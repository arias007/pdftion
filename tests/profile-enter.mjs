import Module from "node:module";
import path from "node:path";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { build } from "esbuild";

// Phase-by-phase profile of entering and leaving edit mode, using the real
// plugin class on an in-memory vault. Every vault read, pdf-lib parse and save
// is counted and timed so the expensive step is named rather than guessed.

const repoRoot = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const require = createRequire(import.meta.url);

const obsidianStub = {
  Menu: class {}, Modal: class {}, Notice: class {},
  Platform: { isDesktop: false, isMobile: true },
  Plugin: class {}, PluginSettingTab: class {}, Setting: class {}, TFile: class {}
};
const originalLoad = Module._load;
const stats = { load: 0, readBinary: 0, writeBinary: 0, loadMs: 0, readMs: 0, writeMs: 0, saveMs: 0, save: 0 };
Module._load = function patched(request, ...rest) {
  if (request === "obsidian") return obsidianStub;
  if (request === "pdf-lib") {
    const real = originalLoad.call(this, request, ...rest);
    const wrapped = { ...real };
    const OriginalDoc = real.PDFDocument;
    wrapped.PDFDocument = new Proxy(OriginalDoc, {
      get(target, property, receiver) {
        if (property === "load") {
          return (...args) => {
            stats.load += 1;
            const start = performance.now();
            const promise = target.load(...args);
            return promise.then((doc) => {
              stats.loadMs += performance.now() - start;
              const originalSave = doc.save.bind(doc);
              doc.save = (options) => {
                stats.save += 1;
                const saveStart = performance.now();
                return originalSave(options).then((out) => {
                  stats.saveMs += performance.now() - saveStart;
                  return out;
                });
              };
              return doc;
            });
          };
        }
        return Reflect.get(target, property, receiver);
      }
    });
    return wrapped;
  }
  return originalLoad.call(this, request, ...rest);
};

const fakeDocument = { createElement: () => ({ getContext: () => null }) };
globalThis.activeDocument = fakeDocument;
globalThis.document = fakeDocument;
globalThis.activeWindow = globalThis;
globalThis.window = globalThis;

async function buildPlugin(sourcePath, outfile) {
  const entry = path.join(repoRoot, "src", `.prof-${path.basename(outfile)}.ts`);
  writeFileSync(entry, readFileSync(sourcePath, "utf8")
    .replace("export default class PdftionPlugin", "class PdftionPlugin")
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

function createVault(initialBytes) {
  const files = new Map([["/bench.pdf", new Uint8Array(initialBytes)]]);
  const folders = new Set();
  const adapter = {
    async exists(t) { return files.has(t) || folders.has(t); },
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
      stats.readBinary += 1;
      const start = performance.now();
      const value = files.get(t);
      const out = value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
      stats.readMs += performance.now() - start;
      return out;
    },
    async remove(t) { files.delete(t); },
    async write(t, d) { files.set(t, new Uint8Array(Buffer.from(String(d), "utf8"))); },
    async writeBinary(t, d) {
      stats.writeBinary += 1;
      const start = performance.now();
      files.set(t, new Uint8Array(d));
      stats.writeMs += performance.now() - start;
    }
  };
  return {
    adapter, files,
    async modifyBinary(file, data) {
      stats.writeBinary += 1;
      const start = performance.now();
      files.set(file.path, new Uint8Array(data));
      stats.writeMs += performance.now() - start;
      file.stat = { mtime: (file.stat?.mtime ?? 0) + 1000, size: data.byteLength };
    },
    async readBinary(file) {
      stats.readBinary += 1;
      const start = performance.now();
      const out = await adapter.readBinary(file.path);
      stats.readMs += performance.now() - start;
      return out;
    }
  };
}

function makePlugin(PluginClass, vault) {
  const plugin = Object.create(PluginClass.prototype);
  Object.assign(plugin, {
    annotationFontBytes: null,
    app: { vault },
    inkCommitPromises: new Map(),
    manifest: { dir: ".obsidian/plugins/pdftion" },
    pdfFingerprintCache: null,
    pdfInkPageIndexCache: new Map(),
    pdfReadCache: null,
    pdfReadCacheLoading: null,
    sessions: new Map(),
    settings: {}
  });
  return plugin;
}

function resetStats() {
  stats.load = 0; stats.readBinary = 0; stats.writeBinary = 0;
  stats.loadMs = 0; stats.readMs = 0; stats.writeMs = 0; stats.saveMs = 0; stats.save = 0;
}
const snapshot = () => ({
  load: stats.load, loadMs: Math.round(stats.loadMs),
  read: stats.readBinary, readMs: Math.round(stats.readMs),
  save: stats.save, saveMs: Math.round(stats.saveMs),
  write: stats.writeBinary, writeMs: Math.round(stats.writeMs),
  rss: Math.round(process.memoryUsage().rss / 1048576)
});

const source = process.argv[2] ?? path.join(repoRoot, "src", "main.ts");
const target = process.argv[3] ?? "/tmp/bench6.pdf";
const PluginClass = await buildPlugin(source, path.join(repoRoot, "tests", ".prof-plugin.cjs"));

const original = readFileSync(target);
const vault = createVault(original);
const plugin = makePlugin(PluginClass, vault);
const file = { extension: "pdf", path: "/bench.pdf", stat: { mtime: 1000, size: original.byteLength } };

console.log(`=== ${path.basename(target)} (${(original.byteLength / 1048576).toFixed(1)} MB)  cold RSS ${snapshot().rss} MB`);

for (let cycle = 1; cycle <= 2; cycle += 1) {
  resetStats();
  const enterStart = performance.now();
  const inkPages = await plugin.getPdfInkPageIndexes(file);
  const strokes = await plugin.loadPdfInkAnnotations(file, inkPages);
  const pages = inkPages.size > 0 ? inkPages : new Set([0]);
  await plugin.beginInkEditTransaction(file, pages, strokes);
  const enterMs = Math.round(performance.now() - enterStart);
  const enterStats = snapshot();

  resetStats();
  const exitStart = performance.now();
  const result = await plugin.finishInkEditTransaction(file, strokes, pages);
  await result.verified;
  const exitMs = Math.round(performance.now() - exitStart);
  const exitStats = snapshot();

  console.log(`cycle ${cycle}`);
  console.log(`  enter ${enterMs} ms  parse ${enterStats.load}x/${enterStats.loadMs}ms  read ${enterStats.read}x/${enterStats.readMs}ms  save ${enterStats.save}x/${enterStats.saveMs}ms  write ${enterStats.write}x/${enterStats.writeMs}ms  rss ${enterStats.rss}MB`);
  console.log(`  exit  ${exitMs} ms  parse ${exitStats.load}x/${exitStats.loadMs}ms  read ${exitStats.read}x/${exitStats.readMs}ms  save ${exitStats.save}x/${exitStats.saveMs}ms  write ${exitStats.write}x/${exitStats.writeMs}ms  rss ${exitStats.rss}MB`);
}
