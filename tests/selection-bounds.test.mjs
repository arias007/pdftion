import test from "node:test";
import assert from "node:assert/strict";
import Module from "node:module";
import path from "node:path";
import { copyFile, appendFile, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import { build } from "esbuild";

// main.ts is not a module of pure helpers: it targets Obsidian. The selection
// geometry helpers only need `activeDocument.createElement("canvas")`, so the
// test bundles the real source with the Obsidian API stubbed out and exercises
// the shipped code instead of a copy of its formulas.
const textMeasureSupport = { measure: null };
const fakeDocument = {
  createElement: () => ({
    getContext: () => ({
      font: "",
      measureText: (value) => ({ width: textMeasureSupport.measure ? textMeasureSupport.measure(value) : 0 })
    })
  })
};
globalThis.activeDocument = fakeDocument;
globalThis.document = fakeDocument;
globalThis.window = globalThis.window ?? {};

const originalLoad = Module._load;
Module._load = function patched(request, ...rest) {
  if (request === "obsidian") {
    return {
      Notice: class {},
      Plugin: class {},
      PluginSettingTab: class {},
      Setting: class {},
      TFile: class {},
      TFolder: class {},
      Modal: class {},
      MarkdownView: class {},
      Menu: class {},
      Platform: { isDesktop: false, isMobile: true }
    };
  }
  return originalLoad.call(this, request, ...rest);
};

const repoRoot = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const probeEntry = path.join(repoRoot, "src", "__geometry_probe.ts");
const outfile = path.join(repoRoot, "tests", ".geometry-probe.cjs");

await copyFile(path.join(repoRoot, "src", "main.ts"), probeEntry);
await appendFile(
  probeEntry,
  "\nexport { normalizedStrokeBounds, normalizedTextBounds, textBounds, measureTextLineWidth, drawSelectionGroup, normalizedElementsBounds };\n"
);
try {
  await build({
    bundle: true,
    entryPoints: [probeEntry],
    external: ["obsidian", "pdf-lib", "@pdf-lib/fontkit", "pptxgenjs", "docx", "jszip"],
    format: "cjs",
    loader: { ".otf": "base64" },
    logLevel: "error",
    outfile,
    platform: "node"
  });
} finally {
  await rm(probeEntry, { force: true });
}

const require = createRequire(import.meta.url);
const {
  normalizedStrokeBounds,
  normalizedTextBounds,
  normalizedElementsBounds,
  textBounds,
  drawSelectionGroup,
  measureTextLineWidth
} = require(outfile);

test.after(async () => {
  await rm(outfile, { force: true });
});

const stroke = (overrides = {}) => ({
  color: "#000000",
  id: "s1",
  kind: "stroke",
  opacity: 1,
  pageCssHeight: 800,
  pageCssWidth: 600,
  pageIndex: 0,
  points: [{ x: 0.2, y: 0.3 }, { x: 0.6, y: 0.5 }, { x: 0.4, y: 0.7 }],
  saved: true,
  tool: "pen",
  width: 8,
  ...overrides
});

const text = (overrides = {}) => ({
  color: "#000000",
  fontFamily: "sans-serif",
  fontSize: 20,
  id: "t1",
  kind: "text",
  opacity: 1,
  pageCssHeight: 800,
  pageCssWidth: 600,
  pageIndex: 0,
  saved: true,
  text: "批处理教程",
  x: 0.1,
  y: 0.2,
  ...overrides
});

test("stroke bounds include half the rendered line width on every side", () => {
  textMeasureSupport.measure = null;
  const box = normalizedStrokeBounds(stroke());
  const padX = 8 / 2 / 600;
  const padY = 8 / 2 / 800;
  assert.ok(Math.abs(box.minX - (0.2 - padX)) < 1e-9, `minX ${box.minX}`);
  assert.ok(Math.abs(box.maxX - (0.6 + padX)) < 1e-9, `maxX ${box.maxX}`);
  assert.ok(Math.abs(box.minY - (0.3 - padY)) < 1e-9, `minY ${box.minY}`);
  assert.ok(Math.abs(box.maxY - (0.7 + padY)) < 1e-9, `maxY ${box.maxY}`);
});

test("a wide brush is never clipped by its own selection box", () => {
  const wide = stroke({ width: 40 });
  const box = normalizedStrokeBounds(wide);
  const halfX = wide.width / 2 / wide.pageCssWidth;
  const halfY = wide.width / 2 / wide.pageCssHeight;
  for (const point of wide.points) {
    assert.ok(box.minX <= point.x - halfX + 1e-9 && box.maxX >= point.x + halfX - 1e-9, "x coverage");
    assert.ok(box.minY <= point.y - halfY + 1e-9 && box.maxY >= point.y + halfY - 1e-9, "y coverage");
  }
});

test("CJK text bounds use measured advances instead of the latin 0.58 em estimate", () => {
  textMeasureSupport.measure = (line) => Array.from(line).length * 20;
  const cjk = text();
  const box = normalizedTextBounds(cjk);
  const expectedWidth = Array.from(cjk.text).length * cjk.fontSize / cjk.pageCssWidth;
  assert.ok(Math.abs((box.maxX - box.minX) - expectedWidth) < 1e-9, `${box.maxX - box.minX} vs ${expectedWidth}`);
  const oldEstimate = cjk.text.length * cjk.fontSize * 0.58 / cjk.pageCssWidth;
  assert.ok(box.maxX - box.minX > oldEstimate * 1.5, "box must be clearly wider than the old estimate");
});

test("CJK fallback measurement (no canvas) treats full-width glyphs as one em", () => {
  textMeasureSupport.measure = null;
  assert.equal(measureTextLineWidth("批处理", 20, "sans-serif"), 60);
  assert.equal(measureTextLineWidth("abc", 20, "sans-serif"), 3 * 20 * 0.58);
});

test("text selection box covers the drawn glyph run", () => {
  textMeasureSupport.measure = (line) => Array.from(line).length * 20;
  const element = text();
  const box = textBounds(element, 600, 800);
  const drawnWidth = Array.from(element.text).length * element.fontSize;
  assert.ok(box.maxX - box.minX >= drawnWidth - 1e-9, "box narrower than the glyphs");
  assert.ok(box.maxY - box.minY >= element.fontSize, "box shorter than one line");
});

test("group bounds union the element boxes", () => {
  textMeasureSupport.measure = (line) => Array.from(line).length * 20;
  const group = normalizedElementsBounds([stroke(), text({ x: 0.05, y: 0.05 })]);
  assert.ok(group.minX <= 0.05 && group.minY <= 0.05);
  assert.ok(group.maxX >= 0.6 && group.maxY >= 0.7);
});

test("selection frame is drawn thin and translucent", () => {
  textMeasureSupport.measure = null;
  const strokes = [];
  const context = {
    fillRect() {},
    globalAlpha: 1,
    lineWidth: 1,
    restore() {},
    save() {},
    setLineDash() {},
    strokeRect() { strokes.push({ alpha: context.globalAlpha, style: context.strokeStyle, width: context.lineWidth }); },
    fillStyle: "",
    strokeStyle: ""
  };
  drawSelectionGroup(context, [stroke()], 600, 800);
  assert.ok(strokes.length >= 1, "frame stroke recorded");
  assert.ok(strokes[0].width <= 1, `frame line width ${strokes[0].width}`);
  const alpha = Number((/rgba\([^)]*?,\s*([\d.]+)\)/.exec(String(strokes[0].style)) ?? [])[1]);
  assert.ok(alpha > 0 && alpha < 0.75, `frame alpha ${alpha}`);
});
