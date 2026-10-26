import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourceUrl = new URL("../src/main.ts", import.meta.url);
const source = await readFile(sourceUrl, "utf8");

const slice = (start, end) => source.slice(source.indexOf(start), source.indexOf(end));

test("leaving edit mode shows the spinner", () => {
  const finishSource = slice("private async finishPdfInkEditing", "private async reloadEditableAnnotationsAfterInkRollback");
  assert.match(finishSource, /this\.setPreparingIndicator\(true\);/);
  assert.match(finishSource, /this\.setPreparingIndicator\(false\);/);
  assert.match(finishSource, /try \{[\s\S]*\} finally \{/, "the spinner must be cleared even when the commit fails");
});

test("the spinner is ref-counted so enter and exit cannot clear each other", () => {
  const indicatorSource = slice("private setPreparingIndicator", "private scheduleEditableInkPrepare");
  assert.match(indicatorSource, /preparingDepth/);
  assert.match(indicatorSource, /Math\.max\(0, this\.preparingDepth \+ \(preparing \? 1 : -1\)\)/);
  assert.match(source, /private preparingDepth = 0;/);
});

test("the spinner covers the annotation-state load and is delayed so it does not flash", () => {
  const prepareSource = slice("private async runEditableInkPrepare", "private setPreparingIndicator");
  const spinnerIndex = prepareSource.indexOf("window.setTimeout");
  const loadIndex = prepareSource.indexOf("await this.loadEditableAnnotations()");
  assert.ok(spinnerIndex > 0 && loadIndex > 0 && spinnerIndex < loadIndex, "the timer is armed before the state load");
  assert.match(prepareSource, /\}, 120\);/, "the indicator waits 120 ms before showing");
  assert.match(prepareSource, /stopSpinner\(\)/, "the delayed show is cancelled when the work finished first");
  assert.doesNotMatch(prepareSource, /finally \{\s*this\.setPreparingIndicator\(false\);/, "no unbalanced release");
});

test("entering edit mode still detaches the ink pages (0.5.9 behaviour)", () => {
  const overlaySource = slice("private async preparePdfInkOverlayForEditing", "private async commitDetachedInkPages");
  assert.match(overlaySource, /beginInkEditTransaction\(\s*this\.file,\s*pageIndexes,/, "enter detaches, as in 0.5.9");
  assert.match(overlaySource, /startBackgroundViewReload/, "the view reload still happens, just after the spinner");
  assert.doesNotMatch(overlaySource, /pendingInkDetachPages/, "lazy detach was reverted");
  assert.doesNotMatch(source, /scheduleInkDetach|runPendingInkDetach/, "no lazy-detach machinery left behind");
});

test("saved PDF bytes are handed over without a full-size copy", () => {
  assert.match(source, /function toPdfBytes\(view: Uint8Array\): ArrayBuffer/);
  assert.doesNotMatch(source, /new Uint8Array\(\w+\)\.set\(saved\)/, "no second full-size buffer per save");
  assert.match(source, /toPdfBytes\(saved\)/);
});
