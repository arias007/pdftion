import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourceUrl = new URL("../src/main.ts", import.meta.url);
const source = await readFile(sourceUrl, "utf8");

const slice = (start, end) => source.slice(source.indexOf(start), source.indexOf(end));

test("leaving edit mode without changes restores the enter bytes instead of rewriting", () => {
  const finishSource = slice("async finishInkEditTransaction(", "private async completeInkEditTransactionNow(");
  assert.match(finishSource, /inkStrokeSetsEquivalent\(elements, backupElements, pages\)/);
  assert.match(finishSource, /restoreInkEditTransaction\(file, record, true\)/, "the untouched case restores");
  assert.match(finishSource, /return \{ committed: true, restored: true, verified: Promise\.resolve\(true\) \}/);
  assert.doesNotMatch(
    finishSource.slice(finishSource.indexOf("restoreInkEditTransaction(file, record, true)")),
    /completeInkEditTransaction\(file, elements, pages, hooks\);\s*$/,
    "the fast path returns a result instead of falling through to a rewrite"
  );
});

test("a restore is marked so committed strokes keep their original identity", () => {
  const commitSource = slice("private async commitDetachedInkPages", "private async finishPdfInkEditing");
  assert.match(commitSource, /if \(!result\.restored\) \{\s*stroke\.source = "pdftion";/);
});

test("a baseline is recorded on enter so the untouched case can be recognised", () => {
  const beginSource = slice("async beginInkEditTransaction(", "private rememberDetachedBytes");
  assert.match(beginSource, /baselineElements\?: InkElement\[\]/);
  assert.match(beginSource, /else if \(baselineElements\)/, "written when no annotation state existed yet");
  const prepareSource = slice("private async preparePdfInkOverlayForEditing", "private async commitDetachedInkPages");
  assert.match(prepareSource, /beginInkEditTransaction\(\s*this\.file,\s*pageIndexes,\s*this\.getEditableElements\(\)\.map\(cloneElement\)/, "the session passes the baseline");
});

test("the detach can be replayed without parsing the document again", () => {
  assert.match(source, /private detachedBytesCache: DetachedBytesCacheEntry \| null = null;/);
  const beginSource = slice("async beginInkEditTransaction(", "private rememberDetachedBytes");
  assert.ok(
    beginSource.indexOf("findDetachedBytes(file, currentBytes") < beginSource.indexOf("PDFDocument.load(currentBytes"),
    "the cache is consulted before any parse"
  );
  assert.match(source, /sourceSha256: string;/, "identity is a hash, not a second copy of the document");
  const rememberSource = slice("private rememberDetachedBytes", "private async findDetachedBytes");
  assert.match(rememberSource, /MAX_DETACHED_CACHE_BYTES/, "big documents are not cached: the buffer would be alive during the reload");
});

test("bytes already in hand are reused instead of reading the document again", () => {
  const beginSource = slice("async beginInkEditTransaction(", "private rememberDetachedBytes");
  assert.match(beginSource, /const reuse = known && known\.path === file\.path/);
  assert.match(beginSource, /reuse \? known!\.bytes : await this\.app\.vault\.readBinary\(file\)/);
  assert.match(beginSource, /reuse \? known!\.pdf : await PDFDocument\.load\(currentBytes/);
  // The expand-transaction branch may still ask the cache (it hits), but the new
  // transaction path must go through the reuse check above.
  const newTransaction = beginSource.slice(beginSource.indexOf("const known = this.pdfReadCache"));
  assert.match(newTransaction, /const reuse = known &&/, "the new-transaction path reuses the bytes in hand");
});

test("a verified annotation side-car lets enter skip the import parse", () => {
  const prepareSource = slice("private async preparePdfInkOverlayForEditing", "private async commitDetachedInkPages");
  assert.match(prepareSource, /if \(!this\.annotationStateTrusted\) \{\s*await this\.importPdfInkForPages\(pageIndexes\);/);
  assert.match(source, /this\.annotationStateTrusted = state !== null;/);
});

test("the reload is preceded by a collector-friendly yield that grows under heap pressure", () => {
  const prepareSource = slice("private async preparePdfInkOverlayForEditing", "private async commitDetachedInkPages");
  assert.match(prepareSource, /await yieldForCollector\(collectorPressureDelayMs\(\)\)/);
  assert.ok(
    prepareSource.indexOf("yieldForCollector") < prepareSource.indexOf("await this.reloadNativePdfView()"),
    "the yield happens before the reload"
  );
  assert.match(source, /function collectorPressureDelayMs\(\): number/);
  assert.match(source, /usedJSHeapSize \/ used\.jsHeapSizeLimit > 0\.55 \? 700 : 260/);
});
