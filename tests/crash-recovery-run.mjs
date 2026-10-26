// Crash-recovery check: enter edit mode, draw, then "crash" (never finish), and
// verify that the next startup restores the original PDF and keeps the strokes.
// Run: node tests/crash-recovery-run.mjs [source] [pdf] [pdf...]
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
  TFile: class TFile { constructor(p) { this.path = p; this.extension = "pdf"; this.stat = { mtime: 0, size: 0 }; } }
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
    for (let i = 0; i < annots.size; i += 1) {
      const annot = annots.lookupMaybe(i, PDFDict);
      if (annot?.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() === "Ink") ink += 1;
    }
  }
  return ink;
}

function memoryVault(initialBytes, pathName) {
  const files = new Map([[pathName, new Uint8Array(initialBytes)]]);
  const folders = new Set();
  const statOf = (target) => (files.has(target) ? { size: files.get(target).byteLength, mtime: 1 } : null);
  const adapter = {
    async exists(t) { return files.has(t) || folders.has(t); },
    async stat(t) { return statOf(t); },
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
    async rename(from, to) { if (!files.has(from)) throw new Error(`missing ${from}`); files.set(to, files.get(from)); files.delete(from); },
    async copy(from, to) { if (!files.has(from)) throw new Error(`missing ${from}`); files.set(to, new Uint8Array(files.get(from))); },
    async write(t, d) { files.set(t, new Uint8Array(Buffer.from(String(d), "utf8"))); },
    async writeBinary(t, d) { files.set(t, new Uint8Array(d)); }
  };
  const byPath = new Map();
  const vault = {
    adapter, files,
    getAbstractFileByPath(p) {
      if (!files.has(p)) return null;
      if (!byPath.has(p)) {
        const file = new obsidianStub.TFile(p);
        byPath.set(p, file);
      }
      const file = byPath.get(p);
      file.stat = { ...statOf(p) };
      return file;
    },
    async modifyBinary(file, data) {
      files.set(file.path, new Uint8Array(data));
      const size = data.byteLength;
      if (file.stat) { file.stat.mtime += 1000; file.stat.size = size; }
    },
    async readBinary(file) { return adapter.readBinary(file.path); }
  };
  return vault;
}

function makePlugin(PluginClass, vault) {
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
  return plugin;
}

const sourcePath = process.argv[2] ?? path.join(repoRoot, "src", "main.ts");
const targets = process.argv.slice(3);
const PluginClass = await buildPlugin(sourcePath, path.join(repoRoot, "tests", ".crash-plugin.cjs"));

let failures = 0;
for (const target of targets) {
  const original = readFileSync(target);
  const baselineInk = await countInk(original);
  const vault = memoryVault(original, "bench.pdf");
  const vaultPath = "bench.pdf";
  const plugin = makePlugin(PluginClass, vault);
  const file = vault.getAbstractFileByPath(vaultPath);
  file.extension = "pdf";

  const inkPages = await plugin.getPdfInkPageIndexes(file);
  const strokes = await plugin.loadPdfInkAnnotations(file, inkPages);
  const pages = inkPages.size > 0 ? inkPages : new Set([0]);
  await plugin.beginInkEditTransaction(file, pages, strokes);

  // The user draws one more stroke after entering edit mode.
  const drawn = {
    color: "#e11d48", externalDirty: false, id: "crash-stroke-1", kind: "stroke", opacity: 1,
    pageIndex: [...pages][0], points: [{ x: 0.2, y: 0.2, pressure: 0.5 }, { x: 0.5, y: 0.5, pressure: 0.5 }],
    saved: false, width: 3
  };
  await plugin.saveEditableAnnotationState(file, [...strokes, drawn]);

  // Crash: the plugin never finishes the transaction. A new process starts.
  const restarted = makePlugin(PluginClass, vault);
  await restarted.recoverPendingInkEditTransactions();

  const restored = vault.files.get(vaultPath);
  const inkNow = await countInk(restored);
  const bytesMatch = Buffer.compare(Buffer.from(restored), original) === 0;
  const statePath = restarted.getAnnotationStatePath(file);
  const stateRaw = await vault.adapter.read(statePath).catch(() => null);
  const state = stateRaw ? JSON.parse(stateRaw) : null;
  const keptStroke = Boolean(state?.elements?.some((element) => element.id === "crash-stroke-1"));
  const leftover = (await vault.adapter.list(".obsidian/plugins/pdftion/data/ink-edit-transactions")).files
    .filter((f) => f.endsWith(".json") && !f.endsWith(".detached.json") && !f.endsWith(".state.json"));
  const backupLeft = (await vault.adapter.list(".obsidian/plugins/pdftion/data/ink-edit-transactions")).files
    .filter((f) => f.endsWith(".pdf") && !f.endsWith(".detached.pdf"));

  const inkOk = baselineInk > 0 ? inkNow === baselineInk : true;
  const ok = bytesMatch && inkOk && keptStroke && leftover.length === 0 && backupLeft.length === 0;
  if (!ok) failures += 1;
  console.log(`${path.basename(target)}: bytesRestored=${bytesMatch} ink=${inkNow}/${baselineInk} strokeKept=${keptStroke} `
    + `leftoverRecords=${leftover.length} leftoverBackups=${backupLeft.length} ${ok ? "OK" : "FAIL"}`);
  if (!ok) {
    console.log(`  state file: ${stateRaw ? stateRaw.slice(0, 200) : "missing"}`);
    console.log(`  leftovers: ${leftover.join(", ")} | backups: ${backupLeft.join(", ")}`);
  }
}

console.log(failures === 0 ? "RESULT: PASS" : "RESULT: FAIL");
process.exit(failures === 0 ? 0 : 1);
