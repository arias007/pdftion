// Regression test for the ink loss the user hit: a side-car that knows fewer
// strokes than the document actually holds must never be allowed to erase the
// rest. Entering edit mode and committing one new stroke has to leave every
// pre-existing annotation in place.
// Run: node tests/no-ink-loss.mjs [source] [pdf...]
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

const { PDFDocument, PDFName, PDFDict } = require(path.join(repoRoot, "node_modules", "pdf-lib", "cjs", "index.js"));
async function countInk(bytes) {
  const pdf = await PDFDocument.load(new Uint8Array(bytes), { ignoreEncryption: true, updateMetadata: false });
  let ink = 0;
  for (const page of pdf.getPages()) {
    const annots = page.node.Annots?.();
    if (!annots) continue;
    for (let i = 0; i < annots.size(); i += 1) {
      const annot = annots.lookupMaybe(i, PDFDict);
      if (annot?.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() === "Ink") ink += 1;
    }
  }
  return ink;
}

function makeVault(initialBytes) {
  const files = new Map([["bench.pdf", new Uint8Array(initialBytes)]]);
  const folders = new Set([".obsidian", ".obsidian/plugins", ".obsidian/plugins/pdftion"]);
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
const PluginClass = await buildPlugin(sourcePath, path.join(repoRoot, "tests", ".noloss-plugin.cjs"));

let failures = 0;
for (const target of targets) {
  const original = readFileSync(target);
  const baselineInk = await countInk(original);
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

  const allStrokes = await plugin.loadPdfInkAnnotations(file);
  // The side-car only remembers two of them — the state a bad commit or a partial
  // restore leaves behind.
  const staleStrokes = allStrokes.slice(0, 2).map((stroke) => ({ ...stroke, pdfPoints: stroke.points.map((p) => ({ ...p })), saved: true, pdfSaved: true }));
  await plugin.saveEditableAnnotationState(file, staleStrokes);
  const pages = new Set(staleStrokes.map((stroke) => stroke.pageIndex));
  const detached = await plugin.beginInkEditTransaction(file, pages, staleStrokes);
  {
    // sanity: the detached copy must still be a loadable PDF
    const detachedBytes = vault.files.get("bench.pdf");
    try {
      const d = await PDFDocument.load(new Uint8Array(detachedBytes), { ignoreEncryption: true, updateMetadata: false });
      let ink = 0;
      for (const pg of d.getPages()) { const a = pg.node.Annots?.(); if (!a) continue; for (let i = 0; i < a.size(); i++) { const x = a.lookupMaybe(i, PDFDict); if (x?.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() === "Ink") ink++; } }
      console.log(`  detached copy: ${d.getPageCount()} pages, ${ink} ink left, ${detachedBytes.byteLength} bytes`);
    } catch (e) { console.log("  detached copy BROKEN:", e.message.slice(0, 100)); }
  }

  // pageCssWidth/Height are required: the annotation's line width is derived from
  // them, and without them every coordinate in the output is NaN.
  const cssWidth = 800;
  const cssHeight = 1100;
  const drawn = {
    color: "#e11d48", externalDirty: false, id: "new-stroke-1", kind: "stroke", opacity: 1,
    pageCssHeight: cssHeight, pageCssWidth: cssWidth, pageIndex: [...pages][0],
    points: [{ x: 0.3, y: 0.3, pressure: 0.5 }, { x: 0.6, y: 0.6, pressure: 0.5 }],
    saved: false, tool: "pen", width: 3
  };
  const elements = [...staleStrokes, drawn];
  const result = await plugin.finishInkEditTransaction(file, elements, pages);
  const verified = await result.verified;
  const finalInk = await countInk(vault.files.get("bench.pdf"));

  const expected = baselineInk + 1;
  const ok = detached === true && result.committed === true && verified === true && finalInk === expected;
  if (!ok) failures += 1;
  console.log(`${path.basename(target)}: baseline=${baselineInk} sidecar=2 +1 new → ink=${finalInk} (expected ${expected}) `
    + `committed=${result.committed} verified=${verified} ${ok ? "OK" : "FAIL"}`);
}

console.log(failures === 0 ? "RESULT: PASS" : "RESULT: FAIL");
process.exit(failures === 0 ? 0 : 1);
