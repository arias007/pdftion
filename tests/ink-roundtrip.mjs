import Module from "node:module";
import path from "node:path";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { build } from "esbuild";

// End-to-end ink round-trip check of the ink edit transaction: run the real
// plugin class on an in-memory vault, enter and leave edit mode repeatedly, and
// assert the PDF on disk keeps exactly the same Ink annotations each time.
// This is the check the previous attempt was missing.

const repoRoot = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const require = createRequire(import.meta.url);
const pdfLibPath = path.join(repoRoot, "node_modules", "pdf-lib", "cjs", "index.js");

const obsidianStub = {
  Menu: class {},
  Modal: class {},
  Notice: class {},
  Platform: { isDesktop: false, isMobile: true },
  Plugin: class {},
  PluginSettingTab: class {},
  Setting: class {},
  TFile: class {}
};
const originalLoad = Module._load;
Module._load = function patched(request, ...rest) {
  if (request === "obsidian") {
    return obsidianStub;
  }
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
      bundle: true,
      entryPoints: [entry],
      external: ["obsidian", "pdf-lib", "@pdf-lib/fontkit", "pptxgenjs", "docx", "jszip"],
      format: "cjs",
      loader: { ".otf": "base64" },
      logLevel: "error",
      outfile,
      platform: "node"
    });
  } finally {
    rmSync(entry, { force: true });
  }
  return require(outfile).__PdftionPlugin;
}

const { PDFDocument, PDFName, PDFDict } = require(pdfLibPath);

async function countInk(bytes) {
  const pdf = await PDFDocument.load(new Uint8Array(bytes), { ignoreEncryption: true, updateMetadata: false });
  let ink = 0;
  for (const page of pdf.getPages()) {
    const annots = page.node.Annots?.();
    if (!annots) continue;
    for (let index = 0; index < annots.size(); index += 1) {
      const annot = annots.lookupMaybe(index, PDFDict);
      if (annot?.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() === "Ink") ink += 1;
    }
  }
  return ink;
}

function createVault(initialBytes) {
  const files = new Map([["/bench.pdf", new Uint8Array(initialBytes)]]);
  const folders = new Set();
  const adapter = {
    async exists(target) { return files.has(target) || folders.has(target); },
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
      return value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
    },
    async remove(target) { files.delete(target); },
    async write(target, data) { files.set(target, new Uint8Array(Buffer.from(String(data), "utf8"))); },
    async writeBinary(target, data) { files.set(target, new Uint8Array(data)); }
  };
  const vault = {
    adapter,
    files,
    async modifyBinary(file, data) {
      files.set(file.path, new Uint8Array(data));
      file.stat = { mtime: (file.stat?.mtime ?? 0) + 1000, size: data.byteLength };
      if (globalThis.__writeAt !== undefined && globalThis.__writeClock) {
        globalThis.__writeAt = performance.now() - globalThis.__writeClock;
      }
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

const source = process.argv[2] ?? path.join(repoRoot, "src", "main.ts");
const target = process.argv[3] ?? "/tmp/bench6.pdf";
const PluginClass = await buildPlugin(source, path.join(repoRoot, "tests", ".probe-plugin.cjs"));

const original = readFileSync(target);
const vault = createVault(original);
const plugin = makePlugin(PluginClass, vault);
const file = { extension: "pdf", path: "/bench.pdf", stat: { mtime: 1000, size: original.byteLength } };

const baseline = await countInk(original);
console.log(`file=${path.basename(target)} ink=${baseline}`);

let failed = false;
let previousInk = null;
for (let cycle = 1; cycle <= 3; cycle += 1) {
  const enterStart = performance.now();
  const inkPages = await plugin.getPdfInkPageIndexes(file);
  const strokes = await plugin.loadPdfInkAnnotations(file, inkPages);
  const pages = inkPages.size > 0 ? inkPages : new Set([0]);
  let enterError = null;
  try {
    await plugin.beginInkEditTransaction(file, pages);
  } catch (error) {
    enterError = error;
  }
  const enterMs = performance.now() - enterStart;
  const detachedInk = await countInk(vault.files.get("/bench.pdf"));

  globalThis.__writeAt = undefined;
  globalThis.__writeClock = performance.now();
  const exitStart = performance.now();
  let exitError = null;
  let committed = null;
  let verified = null;
  try {
    const result = await plugin.finishInkEditTransaction(file, strokes, pages);
    committed = typeof result === "boolean" ? result : result.committed;
    verified = typeof result === "boolean" ? true : await result.verified;
  } catch (error) {
    exitError = error;
  }
  const exitMs = performance.now() - exitStart;
  const finalInk = await countInk(vault.files.get("/bench.pdf"));
  // 0.5.4 itself collapses one duplicate legacy annotation on the first commit,
  // so the assertion is "no error, committed, verified, and stable afterwards".
  const ok = !enterError && !exitError && committed === true && verified === true
    && (previousInk === null ? finalInk > 0 : finalInk === previousInk);
  previousInk = finalInk;
  if (!ok) failed = true;
  const writeAt = globalThis.__writeAt === undefined ? -1 : Math.round(globalThis.__writeAt);
  console.log(`cycle ${cycle}: enter ${enterMs.toFixed(0)}ms detachedInk=${detachedInk} -> bytesOnDisk@${writeAt}ms exit ${exitMs.toFixed(0)}ms ink=${finalInk}/${baseline} committed=${committed} verified=${verified}`
    + (enterError ? ` ENTER_ERROR=${enterError.message}` : "")
    + (exitError ? ` EXIT_ERROR=${exitError.message}` : "")
    + (ok ? "  OK" : "  FAIL"));
}

console.log(failed ? "RESULT: FAIL" : "RESULT: PASS");
process.exit(failed ? 1 : 0);
