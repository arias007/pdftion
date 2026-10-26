import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourceUrl = new URL("../src/main.ts", import.meta.url);
const source = await readFile(sourceUrl, "utf8");

const slice = (start, end) => source.slice(source.indexOf(start), source.indexOf(end));

test("entering edit mode never rewrites the PDF", () => {
  const prepareSource = slice(
    "private async preparePdfInkOverlayForEditing",
    "private hasNativeInkOnPage"
  );
  assert.doesNotMatch(
    prepareSource,
    /beginInkEditTransaction/,
    "the enter path must not detach (that is a full-file rewrite)"
  );
  assert.doesNotMatch(prepareSource, /reloadNativePdfView/, "entering must not reload the view");
  assert.match(prepareSource, /pendingInkDetachPages\.add/, "pages are armed for lazy detach instead");
});

test("the verified annotation side-car lets enter skip the parser entirely", () => {
  const prepareSource = slice("private async runEditableInkPrepare", "private setPreparingIndicator");
  assert.match(prepareSource, /annotationStateTrusted/);
  const trustedIndex = prepareSource.indexOf("if (this.annotationStateTrusted)");
  const parseIndex = prepareSource.indexOf("getPdfInkPageIndexes");
  assert.ok(trustedIndex > 0 && parseIndex > 0 && trustedIndex < parseIndex, "trusted branch returns before the parse");
  assert.match(
    prepareSource.slice(trustedIndex, parseIndex),
    /return;/,
    "the trusted branch must return without parsing"
  );
});

test("a page is detached only when its ink is actually modified", () => {
  const changeSource = slice("private markElementChanged(", "private markElementsDeleted(");
  assert.match(changeSource, /scheduleInkDetach\(\[element\.pageIndex\]\)/);
  assert.match(changeSource, /pendingInkDetachPages\.has\(element\.pageIndex\)/);

  const deleteSource = slice("private markStrokeDeleted(", "private markElementsDeleted(");
  assert.match(deleteSource, /scheduleInkDetach\(\[stroke\.pageIndex\]\)/);

  const detachSource = slice("private async runPendingInkDetach", "private async commitDetachedInkPages");
  assert.match(detachSource, /beginInkEditTransaction\(this\.file, pages\)/);
  assert.match(detachSource, /isInteracting\(\)/, "never reload mid-gesture");
  assert.match(detachSource, /setPreparingIndicator\(true\)/);
  assert.match(detachSource, /setPreparingIndicator\(false\)/);
});

test("both entering and leaving edit mode show the spinner", () => {
  const finishSource = slice("private async finishPdfInkEditing", "private async reloadEditableAnnotationsAfterInkRollback");
  assert.match(finishSource, /setPreparingIndicator\(true\)/);
  assert.match(finishSource, /setPreparingIndicator\(false\)/);
  const prepareSource = slice("private async runEditableInkPrepare", "private setPreparingIndicator");
  assert.match(prepareSource, /setPreparingIndicator\(true\)/);
});

test("the spinner is ref-counted and never flashes for fast work", () => {
  const indicatorSource = slice("private setPreparingIndicator", "private scheduleEditableInkPrepare");
  assert.match(indicatorSource, /preparingDepth/);
  const prepareSource = slice("private async runEditableInkPrepare", "private setPreparingIndicator");
  assert.match(prepareSource, /}, 120\);/, "the spinner waits 120 ms before showing");
  assert.match(prepareSource, /stopSpinner\(\)/);
});

test("saved PDF bytes are handed over without a full-size copy", () => {
  assert.match(source, /function toPdfBytes\(view: Uint8Array\): ArrayBuffer/);
  assert.doesNotMatch(source, /new Uint8Array\(\w+\)\.set\(saved\)/, "no second full-size buffer per save");
  assert.match(source, /toPdfBytes\(saved\)/);
});
