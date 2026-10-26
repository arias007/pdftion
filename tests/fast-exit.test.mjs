import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourceUrl = new URL("../src/main.ts", import.meta.url);
const source = await readFile(sourceUrl, "utf8");

const slice = (start, end) => source.slice(source.indexOf(start), source.indexOf(end));
const readSource = () => source;

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
  const beginSource = slice("async beginInkEditTransaction(", "private getDetachedCachePaths");
  assert.ok(
    beginSource.indexOf("findDetachedBytes(file, currentBytes") < beginSource.indexOf("PDFDocument.load(currentBytes"),
    "the replay is consulted before any parse"
  );
  assert.match(beginSource, /const replay = await this\.findDetachedBytes/, "the replay result decides the path");
  assert.match(beginSource, /currentBytes = null;/, "the pre-detach bytes are released before the save allocates");
  assert.match(beginSource, /const sourceSha256 = replay \? null : await sha256Hex\(currentBytes\)/,
    "identity is hashed while the bytes are still in hand, not read back later");
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
  assert.match(prepareSource, /await yieldForCollector\(collectorPressureDelayMs\(this\.file\.stat\?\.size \?\? 0\)\)/);
  assert.ok(
    prepareSource.indexOf("yieldForCollector") < prepareSource.indexOf("await this.reloadNativePdfView()"),
    "the yield happens before the reload"
  );
  assert.match(source, /function collectorPressureDelayMs\(documentBytes = 0\): number/);
  assert.match(source, /usedJSHeapSize \/ used\.jsHeapSizeLimit > 0\.55 \? 700 : 260/);
  // A big document always gets the long window: its reload doubles an already
  // enormous footprint regardless of how much headroom the heap reports.
  assert.match(source, /documentBytes >= 32 \* 1024 \* 1024[\s\S]{0,40}return 700;/);
});

test("a trusted side-car skips the whole-document parse on enter", () => {
  const source = readSource();
  const prepare = slice("private async runEditableInkPrepare", "private setPreparingIndicator");
  assert.match(prepare, /this\.annotationStateTrusted/, "enter checks the side-car first");
  assert.match(prepare, /new Set<number>\(\)[\s\S]{0,400}getPdfInkPageIndexes/, "falls back to the parse when the side-car lists nothing");
  const overlay = slice("private async preparePdfInkOverlayForEditing", "private hasNativeInkOnPage");
  assert.match(overlay, /if \(!this\.annotationStateTrusted\) \{[\s\S]{0,200}importPdfInkForPages/, "the import parse is skipped when trusted");
});

test("a detach computed once is replayed from disk and pruned to one entry", () => {
  const source = readSource();
  const begin = slice("async beginInkEditTransaction(", "async completeInkEditTransaction(");
  assert.match(begin, /findDetachedBytes/, "enter tries the replay cache first");
  assert.ok(
    begin.indexOf("findDetachedBytes") < begin.indexOf("PDFDocument.load"),
    "the cache is consulted before parsing"
  );
  assert.match(begin, /writeDetachedCache/, "a fresh detach is stored for reuse");
  assert.ok(
    begin.indexOf("writeDetachedCache") > -1 && begin.indexOf("writeDetachedCache") < begin.lastIndexOf("return true"),
    "the cache is written before the transaction returns, i.e. before the caller reloads the view"
  );
  const cache = slice("private async findDetachedBytesOnDisk", "private async findDetachedBytes(");
  assert.match(cache, /sha256Hex\(currentBytes\) !== meta\.sourceSha256/, "the replay is invalidated by any outside edit");
  assert.match(cache, /cachedPages\.length !== pageIndexes\.length/, "the replay must match the detached page set");
  const prune = slice("private async pruneDetachedCaches", "private async findDetachedBytesOnDisk");
  assert.match(prune, /endsWith\("\.detached\.pdf"\)/, "stale replay files are pruned");
});
