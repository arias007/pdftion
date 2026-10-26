// Appearance stability: untouched annotations must come out of a commit exactly as
// they went in (same rect, same line width), and repeated enter/exit cycles must not
// make a thin pen thicker. This is the check for "恢复的黑色大小不对".
// Run: node tests/ink-appearance.mjs [source] [pdf...]
import Module from "node:module";
import path from "node:path";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { build } from "esbuild";

const repoRoot = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const require = createRequire(import.meta.url);

const obsidianStub = {
  Menu: class {}, Modal: class {}, Notice: class {}, Platform: { isDesktop: false, isMobile: true },
  Plugin: class {}, PluginSettingTab: class {}, Setting: class {},
  TFile: class TFile {
    constructor(p) { this.path = p; this.extension = "pdf"; this.stat = { mtime: 0, size: 0 }; }
  }
};
const originalLoad = Module._load;
Module._load = function patched(request, ...rest) {
  if (request === "obsidian") return obsidianStub;
  return originalLoad.call(this, request, ...rest);
};
const fakeDocument = { createElement: () => ({ getContext: () => null }) };
globalThis.activeDocument = fakeDocument;
globalThis.document = fakeDocument;
globalThis.activeWindow = globalThis;
globalThis.window = globalThis;

async function buildPlugin(sourcePath, outfile) {
  const entry = path.join(repoRoot, "src", `.probe-${path.basename(outfile)}.ts`);
  const source = readFileSync(sourcePath, "utf8");
  writeFileSync(entry, source.replace("export default class PdftionPlugin", "class PdftionPlugin")
    + "\nexport { PdftionPlugin as __PdftionPlugin };\n");
  try {
    await build({
      bundle: true, entryPoints: [entry],
      external: ["obsidian", "pdf-lib", "@pdf-lib/fontkit", "pptxgenjs", "docx", "jszip"],
      format: "cjs", loader: { ".otf": "base64" }, logLevel: "error", outfile, platform: "node"
    });
  } finally {
    rmSync(entry, { force: true });
  }
  return require(outfile).__PdftionPlugin;
}

const { PDFDocument, PDFName, PDFDict, PDFArray, PDFNumber } = require(path.join(repoRoot, "node_modules", "pdf-lib", "cjs", "index.js"));

// Fingerprint of every ink annotation: id, rect and stroke width. Any rewrite by
// our writer changes these; leaving an annotation alone keeps them identical.
async function annotFingerprints(bytes) {
  const pdf = await PDFDocument.load(new Uint8Array(bytes), { ignoreEncryption: true, updateMetadata: false });
  const out = new Map();
  let counter = 0;
  pdf.getPages().forEach((page, pageIndex) => {
    const annots = page.node.Annots?.();
    if (!annots) return;
    for (let i = 0; i < annots.size(); i += 1) {
      const annot = annots.lookupMaybe(i, PDFDict);
      if (!annot || annot.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() !== "Ink") continue;
      const nm = annot.lookup(PDFName.of("NM"));
      const id = nm && typeof nm.decodeText === "function" ? nm.decodeText() : `anon-${pageIndex}-${counter++}`;
      const rect = annot.lookupMaybe(PDFName.of("Rect"), PDFArray);
      const r = rect ? [0, 1, 2, 3].map((k) => Number((rect.lookupMaybe(k, PDFNumber)?.asNumber() ?? 0).toFixed(3))) : [];
      const bs = annot.lookupMaybe(PDFName.of("BS"), PDFDict);
      const w = bs?.lookupMaybe(PDFName.of("W"), PDFNumber)?.asNumber();
      out.set(id, { pageIndex, rect: r, width: w === undefined ? null : Number(w.toFixed(4)) });
    }
  });
  return out;
}

function makeVault(initialBytes) {
  const files = new Map([["bench.pdf", new Uint8Array(initialBytes)]]);
  const folders = new Set();
  const adapter = {
    async exists(t) { return files.has(t) || folders.has(t); },
    async stat(t) { return files.has(t) ? { mtime: 1, size: files.get(t).byteLength } : null; },
    async list(t) {
      const prefix = t.endsWith("/") ? t : `${t}/`;
      return {
        files: [...files.keys()].filter((k) => k.startsWith(prefix) && !k.slice(prefix.length).includes("/")),
        folders: [...folders].filter((k) => k.startsWith(prefix))
      };
    },
    async mkdir(t) { folders.add(t); },
    async read(t) { if (!files.has(t)) throw new Error(`missing ${t}`); return Buffer.from(files.get(t)).toString("utf8"); },
    async readBinary(t) {
      if (!files.has(t)) throw new Error(`missing ${t}`);
      const v = files.get(t);
      return v.buffer.slice(v.byteOffset, v.byteOffset + v.byteLength);
    },
    async remove(t) { files.delete(t); },
    async write(t, d) { files.set(t, new Uint8Array(Buffer.from(String(d), "utf8"))); },
    async writeBinary(t, d) { files.set(t, new Uint8Array(d)); }
  };
  return {
    adapter, files,
    getAbstractFileByPath(p) { return files.has(p) ? file : null; },
    async modifyBinary(target, data) {
      files.set(target.path, new Uint8Array(data));
      target.stat = { mtime: target.stat.mtime + 1000, size: data.byteLength };
    },
    async readBinary(target) { return adapter.readBinary(target.path); }
  };
}

const sourcePath = process.argv[2] ?? path.join(repoRoot, "src", "main.ts");
const targets = process.argv.slice(3);
const PluginClass = await buildPlugin(sourcePath, path.join(repoRoot, "tests", ".appearance-plugin.cjs"));

let failures = 0;
for (const target of targets) {
  const original = readFileSync(target);
  const baseline = await annotFingerprints(original);
  const vault = makeVault(original);
  const file = new obsidianStub.TFile("bench.pdf");
  file.stat = { mtime: 1, size: original.byteLength };

  const plugin = Object.create(PluginClass.prototype);
  plugin.app = { vault };
  plugin.manifest = { dir: ".obsidian/plugins/pdftion" };
  plugin.settings = {};
  plugin.sessions = new Map();
  plugin.annotationFontBytes = null;
  plugin.inkCommitPromises = new Map();
  plugin.pdfFingerprintCache = null;
  plugin.pdfInkPageIndexCache = new Map();
  plugin.pdfReadCache = null;
  plugin.pdfReadCacheLoading = null;

  let current = original;
  const problems = [];
  for (let cycle = 1; cycle <= 3; cycle += 1) {
    const strokes = await plugin.loadPdfInkAnnotations(file);
    const pages = new Set(strokes.map((stroke) => stroke.pageIndex));
    await plugin.beginInkEditTransaction(file, pages, strokes);
    // One new stroke per cycle, so the commit path really runs and rewrites a page.
    const drawn = {
      color: "#e11d48", externalDirty: false, id: `new-${cycle}`, kind: "stroke", opacity: 1,
      pageCssHeight: 1100, pageCssWidth: 800, pageIndex: [...pages][0],
      // A different place each cycle: identical geometry would be recognised as the
      // same annotation already present, which is correct behaviour, not a failure.
      points: [
        { x: 0.32 + cycle * 0.02, y: 0.31 + cycle * 0.02, pressure: 0.5 },
        { x: 0.61 + cycle * 0.02, y: 0.62 + cycle * 0.02, pressure: 0.5 }
      ],
      saved: false, tool: "pen", width: 2
    };
    const result = await plugin.finishInkEditTransaction(file, [...strokes, drawn], pages);
    const verified = await result.verified;
    const bytes = vault.files.get("bench.pdf");
    current = Buffer.from(bytes);
    const after = await annotFingerprints(bytes);

    for (const [id, before] of baseline) {
      const now = after.get(id);
      if (!now) {
        problems.push(`cycle ${cycle}: lost annotation ${id}`);
        continue;
      }
      if (JSON.stringify(now.rect) !== JSON.stringify(before.rect)) {
        problems.push(`cycle ${cycle}: ${id} moved ${JSON.stringify(before.rect)} -> ${JSON.stringify(now.rect)}`);
      }
      if (now.width !== before.width) {
        problems.push(`cycle ${cycle}: ${id} width ${before.width} -> ${now.width}`);
      }
    }
    if (process.env.DEBUG_IDS) {
      const added = [...after.keys()].filter((id) => !baseline.has(id));
      const gone = [...baseline.keys()].filter((id) => !after.has(id));
      console.log(`  cycle ${cycle}: committed=${result.committed} verified=${verified} added=${JSON.stringify(added)} gone=${JSON.stringify(gone)}`);
    }
    if (after.size !== baseline.size + cycle) {
      problems.push(`cycle ${cycle}: annotation count ${after.size}, expected ${baseline.size + cycle}`);
    }
    if (!verified) {
      problems.push(`cycle ${cycle}: verification failed`);
    }
  }
  const distinct = new Set(problems);
  if (distinct.size > 0) failures += 1;
  console.log(`${path.basename(target)}: ${baseline.size} originals, ${problems.length === 0 ? "appearance stable" : `${distinct.size} problems`}`);
  for (const problem of [...distinct].slice(0, 6)) console.log(`  - ${problem}`);
}

console.log(failures === 0 ? "RESULT: PASS" : "RESULT: FAIL");
process.exit(failures === 0 ? 0 : 1);
