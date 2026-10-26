import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourceUrl = new URL("../src/main.ts", import.meta.url);
const source = await readFile(sourceUrl, "utf8");

const slice = (start, end) => source.slice(source.indexOf(start), source.indexOf(end, source.indexOf(start)));

test("a crash while editing restores the original bytes and re-attaches the strokes", () => {
  const recovery = slice("private async recoverInkEditTransaction", "private async refreshOpenSessionAfterRecovery");
  assert.match(recovery, /const elements = await this\.readPendingInkEditElements\(file\)\s*\n?\s*\?\? await this\.readInkEditBackupElements\(record\)/,
    "the strokes are read before the document is touched, with the enter-time baseline as fallback");
  assert.match(recovery, /await this\.restoreInkEditTransaction\(file, record, true\)/);
  assert.match(recovery, /await this\.saveEditableAnnotationState\(file, elements, restoredBytes, \{ allowEmpty: true \}\)/,
    "the recovered strokes are written back as the annotation state");
  // Strokes drawn after entering are only in the state file; losing it on a crash
  // is exactly the bug this covers.
  assert.doesNotMatch(recovery, /remove\(this\.getAnnotationStatePath/, "the side-car is never deleted on restore");
});

test("a restore refuses to write a truncated backup over the document", () => {
  const restore = slice("private async restoreInkEditTransaction", "private async recoverPendingInkEditTransactions");
  assert.match(restore, /if \(!\(await this\.isBackupUsable\(record\)\)\)/);
  assert.match(restore, /throw new Error\(`pdftion backup for \$\{record\.filePath\} is incomplete\.`\)/,
    "an incomplete backup must abort instead of overwriting the PDF");
  const usable = slice("private async isBackupUsable", "private invalidatePdfInkPageIndexes");
  assert.match(usable, /size === record\.sourceSize/, "the recorded size is what proves the copy is whole");
  assert.match(usable, /readBinary\(record\.backupPdfPath\)\)\.byteLength/,
    "adapters without stat still get a size check instead of skipping it");
});

test("the backup is staged under a temporary name and renamed into place", () => {
  const copy = slice("private async copyVaultFileIntoBackup", "private async copyOverDocument");
  assert.match(copy, /const staging = `\$\{toPath\}\.new`/);
  assert.match(copy, /await rename\(staging, toPath\)/);
  assert.match(copy, /await this\.app\.vault\.adapter\.remove\(staging\)\.catch\(\(\) => undefined\);\s*throw error;/,
    "a failed copy must not leave a half-written backup behind");
});

test("the JSON journal and the annotation state are written atomically", () => {
  const writer = slice("private async writeTextAtomically", "private async writeInkEditTransaction");
  assert.match(writer, /const staging = `\$\{path\}\.tmp`/);
  assert.match(writer, /await rename\(staging, path\)/);
  assert.match(source, /private async writeInkEditTransaction[\s\S]{0,300}writeTextAtomically/);
  assert.match(source, /async saveEditableAnnotationState\([\s\S]{0,900}writeTextAtomically/);
  // An empty list from a torn-down session must not empty a full side-car.
  assert.match(source, /if \(elements\.length === 0 && !options\.allowEmpty\) \{\s*return;/);
});

test("an unfinished session keeps its transaction on disk, a finished one is cleaned up", () => {
  const recovery = slice("private async recoverPendingInkEditTransactions", "private async recoverInkEditTransaction");
  const oneFile = slice("private async recoverInkEditTransaction", "private async refreshOpenSessionAfterRecovery");
  assert.match(oneFile, /record\.phase === "committed"/, "a committed record needs no restore");
  assert.match(oneFile, /deleteInkEditTransaction\(record, \{ park: true \}\)/,
    "a committed transaction parks its backup instead of destroying it");
  assert.match(recovery, /Orphans are only removed after a day/, "a header that failed to write must not take its backup");
  assert.match(recovery, /path\.endsWith\("\.detached\.pdf"\) \|\| path\.endsWith\("\.detached\.json"\)/,
    "the replay cache is not mistaken for an orphaned backup");
});

test("leaving the foreground forces a checkpoint instead of waiting for the debounce", () => {
  assert.match(source, /registerDomEvent\(activeDocument, "visibilitychange"/);
  assert.match(source, /activeDocument\.visibilityState === "hidden"[\s\S]{0,80}checkpointAllSessionsSoon\(true\)/);
  const deadline = slice("private ensureCheckpointDeadline", "private clearCheckpointDeadline");
  assert.match(deadline, /window\.setTimeout\([\s\S]{0,220}checkpointEditableState\(\)/, "a hard deadline bounds the debounce");
  assert.match(source, /checkpointNow\(\): void \{/);
});

test("entering edit mode does not hash the whole document to trust the side-car", () => {
  const trust = slice("private async getPdfFingerprintForTrust", "async loadAnnotationState");
  assert.match(trust, /parsed\.pdfFingerprint\.mtime === stat\.mtime && parsed\.pdfFingerprint\.size === stat\.size/,
    "an unchanged stat is enough to trust the recorded fingerprint");
  assert.match(trust, /return this\.getPdfFingerprint\(file\);/, "a mismatch still falls back to hashing");
  assert.match(source, /const currentFingerprint = await this\.getPdfFingerprintForTrust\(file\)/);
});
