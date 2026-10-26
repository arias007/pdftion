// Rebuild the on-disk state that makes a 59 MB document safe to enter edit mode:
//  - a verified annotation side-car (so the ink pages come from memory, not a parse)
//  - the detached copy + its metadata (so entering replays a file copy)
// Both are produced from the document's own annotations, using the plugin's real
// extractor so the coordinates match what the UI will draw.
import Module, { createRequire } from "node:module";
import path from "node:path";
import crypto from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { build } from "esbuild";

const repoRoot = "/var/minis/shared/pdftion/src";
const require = createRequire(import.meta.url);
const pdfLibPath = path.join(repoRoot, "node_modules", "pdf-lib", "cjs", "index.js");

const obsidianStub = { Menu: class {}, Modal: class {}, Notice: class {}, Plugin: class {}, PluginSettingTab: class {}, Setting: class {}, TFile: class {}, WorkspaceLeaf: class {}, setIcon: () => {} };
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

const sourcePath = process.argv[2];
const vaultRoot = process.argv[3];
const relPath = process.argv[4];
const dataDir = process.argv[5];

const entry = path.join(repoRoot, "src", ".probe-seed.ts");
const source = readFileSync(sourcePath, "utf8");
writeFileSync(entry, source.replace("export default class PdftionPlugin", "class PdftionPlugin")
  + "\nexport { PdftionPlugin as __PdftionPlugin };\n");
const outfile = path.join(repoRoot, "tests", ".seed-plugin.cjs");
await build({
  bundle: true, entryPoints: [entry], external: ["obsidian", "pdf-lib", "@pdf-lib/fontkit", "pptxgenjs", "docx", "jszip"],
  format: "cjs", loader: { ".otf": "base64" }, logLevel: "error", outfile, platform: "node"
});
const PdftionPlugin = require(outfile).__PdftionPlugin;
const { PDFDocument, PDFName, PDFDict } = require(pdfLibPath);

const fileBytes = readFileSync(path.join(vaultRoot, relPath));
const sha256 = crypto.createHash("sha256").update(fileBytes).digest("hex");
const stats = { size: fileBytes.byteLength, sha256 };

const vault = {
  adapter: {
    async exists() { return false; },
    async list() { return { files: [], folders: [] }; },
    async read() { throw new Error("unused"); },
    async readBinary() { return fileBytes.buffer.slice(fileBytes.byteOffset, fileBytes.byteOffset + fileBytes.byteLength); },
    async write() {},
    async writeBinary() {},
    async remove() {},
    async stat() { return null; },
    async mkdir() {}
  },
  async readBinary() { return fileBytes.buffer.slice(fileBytes.byteOffset, fileBytes.byteOffset + fileBytes.byteLength); }
};
const plugin = Object.create(PdftionPlugin.prototype);
plugin.app = { vault };
plugin.manifest = { dir: ".obsidian/plugins/pdftion" };
plugin.settings = {};
plugin.sessions = new Map();
plugin.pdfReadCache = null;
plugin.pdfReadCacheLoading = null;
plugin.pdfInkPageIndexCache = new Map();
plugin.pdfFingerprintCache = null;
plugin.inkCommitPromises = new Map();
const file = { extension: "pdf", path: relPath, stat: { mtime: Date.now(), size: stats.size } };

const strokes = await plugin.loadPdfInkAnnotations(file);
const pages = [...new Set(strokes.map((stroke) => stroke.pageIndex))].sort((a, b) => a - b);
console.log(`document: ${stats.size} bytes, sha ${sha256.slice(0, 16)}, strokes ${strokes.length}, pages ${JSON.stringify(pages)}`);

// Detached copy: the same document with its ink annotations removed on those pages.
const pdf = await PDFDocument.load(new Uint8Array(fileBytes), { ignoreEncryption: true, updateMetadata: false });
const pdfPages = pdf.getPages();
for (const pageIndex of pages) {
  const annots = pdfPages[pageIndex]?.node.Annots?.();
  if (!annots) continue;
  for (let index = annots.size() - 1; index >= 0; index -= 1) {
    const annot = annots.lookupMaybe(index, PDFDict);
    if (annot?.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() === "Ink") annots.remove(index);
  }
}
const saved = await pdf.save({ addDefaultPage: false, useObjectStreams: false });
const detached = Buffer.from(saved.buffer, saved.byteOffset, saved.byteLength);

const key = (() => {
  const out = [];
  for (const byte of Buffer.from(relPath, "utf8")) {
    const ch = String.fromCharCode(byte);
    if (/[A-Za-z0-9\-_.~]/.test(ch)) out.push(ch);
    else out.push("%" + byte.toString(16).toUpperCase().padStart(2, "0"));
  }
  return out.join("");
})();

mkdirSync(path.join(dataDir, "ink-edit-transactions"), { recursive: true });
mkdirSync(path.join(dataDir, "annotations"), { recursive: true });
writeFileSync(path.join(dataDir, "ink-edit-transactions", `${key}.detached.pdf`), detached);
writeFileSync(path.join(dataDir, "ink-edit-transactions", `${key}.detached.json`), JSON.stringify({
  detachedSize: detached.byteLength,
  filePath: relPath,
  pageIndexes: pages,
  sourceSha256: sha256,
  version: 1
}, null, 2));

const elements = strokes.map((stroke) => ({
  ...stroke,
  externalDirty: false,
  pdfPoints: (stroke.pdfPoints ?? stroke.points).map((point) => ({ ...point })),
  pdfSaved: true,
  saved: true
}));
writeFileSync(path.join(dataDir, "annotations", `${key}.json`), JSON.stringify({
  filePath: relPath,
  overlayAnnotationsOnly: true,
  overlayTextOnly: true,
  pdfFingerprint: { mtime: file.stat.mtime, sha256, size: stats.size },
  updatedAt: new Date().toISOString(),
  version: 7,
  elements
}));

console.log(JSON.stringify({
  detachedBytes: detached.byteLength,
  sidecarElements: elements.length,
  pages,
  key
}));
