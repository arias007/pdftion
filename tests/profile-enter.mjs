// Fine-grained timing of the enter/exit path of the ink edit transaction.
// Temporary diagnostic - not part of the shipped test suite.
import Module from "node:module";
import path from "node:path";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { build } from "esbuild";

const repoRoot = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const require = createRequire(import.meta.url);
const pdfLibPath = path.join(repoRoot, "node_modules", "pdf-lib", "cjs", "index.js");

const obsidianStub = {
  Menu: class {}, Modal: class {}, Notice: class {}, Plugin: class {},
  PluginSettingTab: class {}, Setting: class {}, TFile: class {},
  Platform: { isDesktop: false, isMobile: true }
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
      bundle: true, entryPoints: [entry], external: ["obsidian", "pdf-lib", "@pdf-lib/fontkit", "pptxgenjs", "docx", "jszip"],
      format: "cjs", loader: { ".otf": "base64" }, logLevel: "error", outfile, platform: "node"
    });
  } finally {
    rmSync(entry, { force: true });
  }
  return require(outfile).__PdftionPlugin;
}

const BANDWIDTH_MBPS = Number(process.env.IO_MBPS ?? 0);   // 0 = real in-memory timing only
const ioDelay = (bytes) => (BANDWIDTH_MBPS > 0 ? (bytes / (BANDWIDTH_MBPS * 1024 * 1024)) * 1000 : 0);

const marks = [];
function mark(label, ms, bytes = 0) {
  marks.push({ label, ms, bytes });
}

function createVault(initialBytes) {
  const files = new Map([["/bench.pdf", new Uint8Array(initialBytes)]]);
  const folders = new Set();
  const held = new Map();
  const sleep = (ms) => (ms > 0 ? new Promise((r) => setTimeout(r, ms)) : Promise.resolve());
  async function wrap(op, target, fn) {
    const start = performance.now();
    const result = await fn();
    const bytes = typeof target === "string" ? 0 : 0;
    await sleep(0);
    const index = marks.push({ label: `io:${op}`, ms: performance.now() - start, bytes: bytes || 0 }) - 1;
    return { result, index };
  }
  const adapter = {
    async exists(target) { return files.has(target) || folders.has(target); },
    async stat(target) {
      if (!files.has(target)) return null;
      return { mtime: 1, size: files.get(target).byteLength };
    },
    async list(target) {
      const prefix = target.endsWith("/") ? target : `${target}/`;
      return {
        files: [...files.keys()].filter((key) => key.startsWith(prefix) && !key.slice(prefix.length).includes("/")),
        folders: [...folders].filter((key) => key.startsWith(prefix))
      };
    },
    async mkdir(target) { folders.add(target); },
    async read(target) {
      if (!files.has(target)) throw new Error(`missing ${target}`);
      return Buffer.from(files.get(target)).toString("utf8");
    },
    async readBinary(target) {
      if (!files.has(target)) throw new Error(`missing ${target}`);
      const value = files.get(target);
      await sleep(ioDelay(value.byteLength));
      const copy = value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
      marks.push({ label: `io:readBinary`, ms: 0, bytes: value.byteLength });
      return copy;
    },
    async remove(target) { files.delete(target); },
    async write(target, data) { files.set(target, new Uint8Array(Buffer.from(String(data), "utf8"))); },
    async writeBinary(target, data) {
      await sleep(ioDelay(data.byteLength));
      marks.push({ label: `io:writeBinary`, ms: 0, bytes: data.byteLength });
      files.set(target, new Uint8Array(data));
    }
  };
  const vault = {
    adapter, files,
    async modifyBinary(file, data) {
      await sleep(ioDelay(data.byteLength));
      marks.push({ label: `io:modifyBinary`, ms: 0, bytes: data.byteLength });
      files.set(file.path, new Uint8Array(data));
      file.stat = { mtime: (file.stat?.mtime ?? 0) + 1000, size: data.byteLength };
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
  plugin.loadSettings = async () => {};
  plugin.saveSettings = async () => {};
  return plugin;
}

const source = process.argv[2] ?? path.join(repoRoot, "src", "main.ts");
const target = process.argv[3] ?? "/tmp/b61.pdf";
const PluginClass = await buildPlugin(source, path.join(repoRoot, "tests", ".prof-plugin.cjs"));

const { PDFDocument, PDFName, PDFDict } = require(pdfLibPath);

async function countInk(bytes) {
  const pdf = await PDFDocument.load(new Uint8Array(bytes), { ignoreEncryption: true, updateMetadata: false });
  let ink = 0;
  for (const page of pdf.getPages()) {
    const annots = page.node.Annots?.();
    if (!annots) continue;
    for (let index = 0; index < annots.size; index += 1) {
      const annot = annots.lookupMaybe(index, PDFDict);
      if (annot?.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() === "Ink") ink += 1;
    }
  }
  return ink;
}

const original = readFileSync(target);
const vault = createVault(original);
const plugin = makePlugin(PluginClass, vault);
const file = { extension: "pdf", path: "/bench.pdf", stat: { mtime: 1000, size: original.byteLength } };
const baselineInk = countInkBytes(original);
function countInkBytes(bytes) {
  const text = Buffer.from(bytes).toString("latin1");
  return (text.match(/\/Subtype\s*\/Ink/g) ?? []).length;
}

function roundMs(value) { return Math.round(value * 10) / 10; }

async function time(label, fn) {
  const start = performance.now();
  const value = await fn();
  mark(label, roundMs(performance.now() - start));
  return value;
}

console.log(`== ${path.basename(target)} ${(original.byteLength / 1024 / 1024).toFixed(1)}MB  io_model=${BANDWIDTH_MBPS || "memory"}`);

let lastPages = null;
for (let cycle = 1; cycle <= 3; cycle += 1) {
  marks.length = 0;
  const totalStart = performance.now();
  const trusted = cycle > 1;
  const t0 = performance.now();
  const state = await time("loadAnnotationState", () => plugin.loadAnnotationState(file));
  mark("  (sidecar bytes)", 0, 0);
  let pages;
  if (!trusted) {
    pages = await time("getPdfInkPageIndexes", () => plugin.getPdfInkPageIndexes(file));
  } else {
    pages = lastPages ?? await plugin.getPdfInkPageIndexes(file);
  }
  const strokeList = await time("loadPdfInkAnnotations", () => plugin.loadPdfInkAnnotations(file, pages));
  const pageSet = pages.size > 0 ? pages : new Set([0]);
  lastPages = pages;
  const prep = performance.now();
  await time("beginInkEditTransaction", () => plugin.beginInkEditTransaction(file, pageSet, strokeList));
  const enterTotal = performance.now() - totalStart;
  const detachedInk = countInkBytes(vault.files.get("/bench.pdf"));
  const exitStart = performance.now();
  let result;
  try {
    result = await time("finishInkEditTransaction", () => plugin.finishInkEditTransaction(file, strokeList, pageSet));
    if (result?.verified) await result.verified;
  } catch (error) {
    mark(`EXIT_ERROR ${error.message}`, 0);
  }
  const exitTotal = performance.now() - exitStart;
  const finalInk = countInkBytes(vault.files.get("/bench.pdf"));
  const ioBytes = marks.filter((m) => m.label.startsWith("io:")).reduce((sum, m) => sum + m.bytes, 0);
  console.log(`\ncycle ${cycle} (${trusted ? "trusted" : "cold"}): enter ${roundMs(enterTotal)}ms exit ${roundMs(exitTotal)}ms detachedInk=${detachedInk} ink=${finalInk}/${baselineInk} io=${(ioBytes / 1024 / 1024).toFixed(0)}MB state=${state ? "yes" : "no"}`);
  for (const m of marks) {
    const bytes = m.bytes ? ` ${(m.bytes / 1024 / 1024).toFixed(1)}MB` : "";
    if (m.ms >= 1 || m.bytes) console.log(`   ${m.label.padEnd(34)} ${String(m.ms).padStart(8)}ms${bytes}`);
  }
}
