import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourceUrl = new URL("../src/main.ts", import.meta.url);
const source = await readFile(sourceUrl, "utf8");

const slice = (start, end) => source.slice(source.indexOf(start), source.indexOf(end));

test("entering edit mode reuses one parsed document instead of re-parsing", () => {
  const beginSource = slice(
    "async beginInkEditTransaction(",
    "async completeInkEditTransaction("
  );
  // Reuse whatever parse is already in hand instead of loading the document a
  // second time; only a cold document is parsed here.
  assert.match(beginSource, /const reuse = known &&/, "the transaction reuses the shared parse");
  assert.match(beginSource, /reuse \? known!\.pdf : await PDFDocument\.load/, "a cold document is parsed at most once");
  const newTransaction = beginSource.slice(beginSource.indexOf("const known = this.pdfReadCache"));
  assert.ok(
    newTransaction.indexOf("const reuse = known &&") < newTransaction.indexOf("modifyBinary"),
    "the cache must not be thrown away before the write"
  );
  // A mutated document must never re-enter the cache (the previous attempt did
  // exactly that and corrupted the commit path).
  assert.match(beginSource, /invalidatePdfReadCache\(file\)/);
  assert.doesNotMatch(beginSource, /setPdfReadCache/);
});

test("concurrent readers share a single parse", () => {
  const cacheSource = slice("async getPdfReadCache(file: TFile)", "setPdfReadCache(file: TFile");
  assert.match(cacheSource, /pdfReadCacheLoading/);
  assert.match(cacheSource, /pending\.path === file\.path/);
  assert.match(cacheSource, /arrayBuffersEqual\(currentBytes, cached\.bytes\)/, "writes by this plugin must not force a re-parse");
});

test("entering edit mode joins the retry runs instead of parsing again", () => {
  const prepareSource = slice("private async prepareEditableInkForCurrentPage", "private async runEditableInkPrepare");
  assert.match(prepareSource, /if \(this\.inkPrepareRun\) \{\s*return this\.inkPrepareRun;/);
  assert.match(prepareSource, /this\.inkPrepareRun = run;/);
});

test("leaving edit mode starts the reload before the read-back verification", () => {
  const commitSource = slice("private async completeInkEditTransactionNow(", "private verifyCommittedInkPages(");
  const writeIndex = commitSource.indexOf("await this.app.vault.modifyBinary(file, committedBytes)");
  const hookIndex = commitSource.indexOf("hooks?.onBytesWritten?.()");
  assert.ok(writeIndex > 0, "bytes are written");
  assert.ok(hookIndex > writeIndex, "the reload is requested right after the write");
  assert.doesNotMatch(
    commitSource.slice(0, hookIndex),
    /PDFDocument\.load/,
    "no full parse may run before the reload is requested"
  );
  const verifySource = slice("private verifyCommittedInkPages(", "async rollbackInkEditTransaction(");
  assert.match(verifySource, /await hooks\.waitForRender\(\)/, "verification waits for the reloaded view");
  assert.doesNotMatch(commitSource.slice(hookIndex), /await result\.verified|await this\.verifyCommittedInkPages/, "the commit must not block on verification");
  assert.match(verifySource, /PDFDocument\.load\(committedBytes/);
  assert.match(verifySource, /restoreInkEditTransaction\(file, record, true\)/, "a failed verification still restores the backup");
});

test("the commit record is finalised before verification so a crash keeps the committed PDF", () => {
  const commitSource = slice("private async completeInkEditTransactionNow(", "private verifyCommittedInkPages(");
  assert.match(commitSource, /phase: "committed"/);
  assert.ok(
    commitSource.indexOf('phase: "committed"') < commitSource.indexOf("hooks?.onBytesWritten?.()"),
    "record update comes before the reload request"
  );
});

test("selection boxes include stroke width and measured text metrics", () => {
  const strokeBounds = slice("function normalizedStrokeBounds(", "function normalizedCoverBounds(");
  assert.match(strokeBounds, /stroke\.width\) \/ 2/, "half the line width is part of the box");
  assert.match(strokeBounds, /stroke\.pageCssWidth/);
  assert.match(source, /function measureTextLineWidth\(/);
  assert.match(source, /isFullWidthGlyph/, "CJK glyphs fall back to one em, not 0.58 em");
  assert.doesNotMatch(slice("function normalizedTextBounds(", "function normalizedCoverBounds("), /0\.58/);
  assert.doesNotMatch(slice("function textBounds(", "function strokeBoxContainsPoint("), /0\.58/);
});

test("the selection frame keeps its thin translucent styling", () => {
  const drawSource = slice("function drawSelectionGroup(", "function drawNativeSelection(");
  assert.match(drawSource, /lineWidth = 1;/);
  assert.match(drawSource, /rgba\(28, 126, 214, 0\.58\)/);
  const marquee = slice("function drawMarqueeBox(", "function strokeBounds(");
  assert.match(marquee, /lineWidth = 1;/);
  assert.match(marquee, /rgba\(34, 139, 230, 0\.06\)/);
});
