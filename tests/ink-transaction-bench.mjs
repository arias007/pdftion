import Module from "node:module";
import path from "node:path";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { build } from "esbuild";

// A/B benchmark of the ink edit transaction (enter + exit): the published 0.5.4
// source versus the working tree, both running the real plugin class on an
// in-memory vault with pdf-lib parse / vault read counters.

const repoRoot = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const require = createRequire(import.meta.url);

let pdfLoadCount = 0;
let binaryReadCount = 0;

const originalLoad = Module._load;
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
Module._load = function patched(request, ...rest) {
  if (request === "obsidian") {
    return obsidianStub;
  }
  if (request === "pdf-lib") {
    const real = originalLoad.call(this, request, ...rest);
    const wrapped = { ...real };
    wrapped.PDFDocument = new Proxy(real.PDFDocument, {
      get(target, property, receiver) {
        if (property === "load") {
          return (...args) => {
            pdfLoadCount += 1;
            return target.load(...args);
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
  const entry = path.join(repoRoot, "src", `.bench-${path.basename(outfile)}.ts`);
  const source = readFileSync(sourcePath, "utf8");
  const patched = source.replace(
    "export default class PdftionPlugin",
    "class PdftionPlugin"
  ) + "\nexport { PdftionPlugin as __PdftionPlugin };\n";
  writeFileSync(entry, patched);
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

function createVault(initialBytes) {
  const files = new Map();
  const folders = new Set();
  files.set("/bench.pdf", new Uint8Array(initialBytes));
  const adapter = {
    async exists(target) {
      return files.has(target) || folders.has(target);
    },
    async list(target) {
      const prefix = target.endsWith("/") ? target : `${target}/`;
      return {
        files: [...files.keys()].filter((key) => key.startsWith(prefix) && !key.slice(prefix.length).includes("/")),
        folders: [...folders].filter((key) => key.startsWith(prefix))
      };
    },
    async mkdir(target) {
      folders.add(target);
    },
    async read(target) {
      if (!files.has(target)) {
        throw new Error(`missing ${target}`);
      }
      return Buffer.from(files.get(target)).toString("utf8");
    },
    async readBinary(target) {
      if (!files.has(target)) {
        throw new Error(`missing ${target}`);
      }
      const value = files.get(target);
      return value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
    },
    async remove(target) {
      files.delete(target);
    },
    async write(target, data) {
      files.set(target, new Uint8Array(Buffer.from(String(data), "utf8")));
    },
    async writeBinary(target, data) {
      files.set(target, new Uint8Array(data));
    }
  };
  const vault = {
    adapter,
    async modifyBinary(file, data) {
      files.set(file.path, new Uint8Array(data));
      file.stat = { mtime: (file.stat?.mtime ?? 0) + 1000, size: data.byteLength };
    },
    async readBinary(file) {
      binaryReadCount += 1;
      return adapter.readBinary(file.path);
    }
  };
  return vault;
}

function makePlugin(PluginClass, vault) {
  const plugin = Object.create(PluginClass.prototype);
  plugin.app = { vault };
  plugin.manifest = { dir: "plugins/pdftion" };
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

async function runScenario(PluginClass, label, bytes, targetPages) {
  const vault = createVault(bytes);
  const plugin = makePlugin(PluginClass, vault);
  const file = { extension: "pdf", path: "/bench.pdf", stat: { mtime: 1000, size: bytes.byteLength } };

  pdfLoadCount = 0;
  binaryReadCount = 0;
  const enterStart = performance.now();
  const inkPages = await plugin.getPdfInkPageIndexes(file);
  const strokes = await plugin.loadPdfInkAnnotations(file, inkPages);
  const pages = inkPages.size > 0 ? inkPages : targetPages;
  const detached = await plugin.beginInkEditTransaction(file, pages);
  const enterMs = performance.now() - enterStart;
  const enterParses = pdfLoadCount;
  const enterReads = binaryReadCount;

  pdfLoadCount = 0;
  binaryReadCount = 0;
  const exitStart = performance.now();
  // Commit the strokes that were imported on enter, like leaving edit mode does.
  const commit = await plugin.finishInkEditTransaction(file, strokes, pages);
  const committed = typeof commit === "boolean" ? commit : commit.committed;
  const exitMs = performance.now() - exitStart;
  const verified = typeof commit === "boolean" ? true : await commit.verified;
  const exitParses = pdfLoadCount;
  const exitReads = binaryReadCount;

  // Warm cycle: enter/exit again on the same document, which is what a user
  // actually does while working (the first cycle is the cold parse).
  pdfLoadCount = 0;
  binaryReadCount = 0;
  const warmEnterStart = performance.now();
  const warmInkPages = await plugin.getPdfInkPageIndexes(file);
  await plugin.loadPdfInkAnnotations(file, warmInkPages);
  await plugin.beginInkEditTransaction(file, pages);
  const warmEnterMs = performance.now() - warmEnterStart;
  const warmEnterParses = pdfLoadCount;

  pdfLoadCount = 0;
  binaryReadCount = 0;
  const warmExitStart = performance.now();
  const warmCommit = await plugin.finishInkEditTransaction(file, strokes, pages);
  const warmCommitted = typeof warmCommit === "boolean" ? warmCommit : warmCommit.committed;
  const warmExitMs = performance.now() - warmExitStart;
  const warmVerified = typeof warmCommit === "boolean" ? true : await warmCommit.verified;
  const warmExitParses = pdfLoadCount;

  console.log(`  ${label.padEnd(18)} enter ${enterMs.toFixed(0).padStart(5)} ms (parse ${enterParses}, read ${enterReads}, ink pages ${inkPages.size}, strokes ${strokes.length}, detached ${detached})`);
  console.log(`  ${"".padEnd(18)} exit  ${exitMs.toFixed(0).padStart(5)} ms (parse ${exitParses}, read ${exitReads}, committed ${committed}, verified ${verified})`);
  console.log(`  ${"".padEnd(18)} enter2 ${warmEnterMs.toFixed(0).padStart(4)} ms (parse ${warmEnterParses}) · exit2 ${warmExitMs.toFixed(0)} ms (parse ${warmExitParses}, committed ${warmCommitted}, verified ${warmVerified})`);
  return { detached, enterMs, exitMs, enterParses, exitParses, warmEnterMs, warmExitMs, warmEnterParses, warmExitParses };
}

const targets = [{ pages: new Set([0]), path: process.argv[2] ?? "/tmp/bench6.pdf" }];

const NewPlugin = await buildPlugin("/tmp/bench-old-main.ts", path.join(repoRoot, "tests", ".bench-plugin-old.cjs"));
const newSource = path.join(repoRoot, "src", "main.ts");
const LatestPlugin = await buildPlugin(newSource, path.join(repoRoot, "tests", ".bench-plugin-new.cjs"));

const rows = [];
for (const target of targets) {
  const bytes = readFileSync(target.path);
  console.log(`\n=== ${path.basename(target.path)} (${(bytes.byteLength / 1048576).toFixed(1)} MB)`);
  const before = await runScenario(NewPlugin, "0.5.4 published", bytes, target.pages);
  const after = await runScenario(LatestPlugin, "working tree", bytes, target.pages);
  rows.push({
    enterAfter: Math.round(after.enterMs),
    enterBefore: Math.round(before.enterMs),
    enterParseAfter: after.enterParses,
    enterParseBefore: before.enterParses,
    exitAfter: Math.round(after.exitMs),
    exitBefore: Math.round(before.exitMs),
    exitParseAfter: after.exitParses,
    exitParseBefore: before.exitParses,
    file: path.basename(target.path),
    warmEnterAfter: Math.round(after.warmEnterMs),
    warmExitAfter: Math.round(after.warmExitMs),
    warmEnterParseAfter: after.warmEnterParses,
    warmExitParseAfter: after.warmExitParses
  });
}
console.log("\n" + JSON.stringify(rows, null, 2));
