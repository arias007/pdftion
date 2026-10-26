// One-off repair: rebuild the document from the clean original (every annotation
// keeps its own appearance stream and width) and re-write only the strokes the user
// drew afterwards, through the plugin's own writer so their thickness is correct.
// Usage: node tests/repair-ink.mjs <source.pdf> <current.pdf> <out.pdf>
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
      let w = bs?.lookupMaybe(PDFName.of("W"), PDFNumber)?.asNumber();
      if (w === undefined) {
        const border = annot.lookupMaybe(PDFName.of("Border"), PDFArray);
        w = border?.lookupMaybe(2, PDFNumber)?.asNumber();
      }
      out.set(id, { pageIndex, rect: r, width: w === undefined ? null : Number(w.toFixed(4)) });
    }
  });
  return out;
}

const [sourcePath, currentPath, outPath] = process.argv.slice(2);
const PluginClass = await buildPlugin(path.join(repoRoot, "src", "main.ts"), path.join(repoRoot, "tests", ".repair-plugin.cjs"));

const clean = readFileSync(sourcePath);
const currentBytes = readFileSync(currentPath);

const files = new Map([["bench.pdf", new Uint8Array(clean)]]);
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
const file = new obsidianStub.TFile("bench.pdf");
file.stat = { mtime: 1, size: clean.byteLength };
const vault = {
  adapter, files,
  getAbstractFileByPath(p) { return files.has(p) ? file : null; },
  async modifyBinary(target, data) {
    files.set(target.path, new Uint8Array(data));
    target.stat = { mtime: target.stat.mtime + 1000, size: data.byteLength };
  },
  async readBinary(target) { return adapter.readBinary(target.path); }
};

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

const cleanInk = await plugin.loadPdfInkAnnotations(file);
const cleanIds = new Set(cleanInk.map((stroke) => stroke.id));

// The strokes that only exist in the damaged file come from the session side-car:
// it still holds the exact width and page width they were drawn with.
const sidecarPath = process.argv[5];
const sidecar = sidecarPath ? JSON.parse(readFileSync(sidecarPath, "utf8")) : { elements: [] };
const extra = (sidecar.elements ?? [])
  .filter((element) => element.kind === "stroke" && !cleanIds.has(element.id))
  .map((element) => ({
    ...element,
    pdfPoints: element.points.map((point) => ({ ...point })),
    pdfSaved: false,
    saved: false
  }));

console.log(`clean=${cleanInk.length} sidecar=${(sidecar.elements ?? []).filter((e) => e.kind === "stroke").length} to rewrite=${extra.length}`);
for (const stroke of extra) {
  console.log(`  ${stroke.id} page=${stroke.pageIndex} width=${stroke.width} cssW=${stroke.pageCssWidth} color=${stroke.color}`);
}

if (extra.length > 0) {
  const pages = new Set([...cleanInk, ...extra].map((stroke) => stroke.pageIndex));
  await plugin.beginInkEditTransaction(file, pages, [...cleanInk, ...extra]);
  const result = await plugin.finishInkEditTransaction(file, [...cleanInk, ...extra], pages);
  console.log(`commit=${result.committed} verified=${await result.verified}`);
}

const finalBytes = Buffer.from(files.get("bench.pdf"));
writeFileSync(outPath, finalBytes);

const before = await annotFingerprints(clean);
const after = await annotFingerprints(finalBytes);
let moved = 0;
let resized = 0;
let lost = 0;
for (const [id, want] of before) {
  const now = after.get(id);
  if (!now) { lost += 1; continue; }
  if (JSON.stringify(now.rect) !== JSON.stringify(want.rect)) moved += 1;
  if (now.width !== want.width) resized += 1;
}
console.log(JSON.stringify({ before: before.size, after: after.size, lost, moved, resized }));
