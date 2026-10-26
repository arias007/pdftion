// Regression: a long stroke (more points than the old simplify cap) must still
// verify. The commit writes smoothInkPointsForPdf(points, 1600); verification used
// to compare against simplifyInkPoints(..., 900) as well, so any stroke with more
// than 900 points failed the length check and the whole commit rolled back.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/main.ts", import.meta.url), "utf8");

test("verification compares against exactly what the writer produced", () => {
  const verify = source.slice(
    source.indexOf("private verifyCommittedInkPages"),
    source.indexOf("private async reloadEditableAnnotationsAfterInkRollback")
  );
  assert.match(verify, /smoothInkPointsForPdf\(expected\.points, 1600\)/);
  assert.doesNotMatch(verify, /simplifyInkPoints\(smoothInkPointsForPdf\(expected\.points, 1600\), 900\)/,
    "a second simplification shortens the list and reads as data loss");
});

test("the writer and the verifier cannot drift apart silently", () => {
  const writer = source.slice(
    source.indexOf("function addStandardInkAnnotation"),
    source.indexOf("function drawStrokeAsPdfLines")
  );
  assert.match(writer, /smoothInkPointsForPdf\(stroke\.points, 1600\)/);
  const verify = source.slice(
    source.indexOf("private verifyCommittedInkPages"),
    source.indexOf("private async reloadEditableAnnotationsAfterInkRollback")
  );
  assert.match(verify, /smoothInkPointsForPdf\(expected\.points, 1600\)/);
});

test("only a real loss rolls the document back", () => {
  const verify = source.slice(
    source.indexOf("private verifyCommittedInkPages"),
    source.indexOf("private async reloadEditableAnnotationsAfterInkRollback")
  );
  // A missing annotation is loss and must still roll back.
  assert.match(verify, /throw new Error\(`Ink verification lost/);
  // A point-level mismatch must not: rolling back throws away the user's work,
  // which is worse than a stroke that is a fraction of a pixel off.
  assert.doesNotMatch(verify, /throw new Error\(`Ink verification failed for/);
  assert.match(verify, /console\.warn\(\s*"pdftion kept a committed stroke/s);
  // More annotations than expected is never loss either.
  assert.match(verify, /console\.debug\("pdftion kept extra annotations/s);
});

