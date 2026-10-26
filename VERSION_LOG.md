# VERSION LOG

## 0.6.2 — 2026-10-26

Same enter flow as 0.6.1 (detach, no special case). What changes is how much work
that flow does.

### Leaving edit mode: 4.9 s → 15–45 ms on an unchanged document

`finishInkEditTransaction` already compared the overlay against the enter-time
baseline, but on a file with no earlier annotation state there was no baseline to
compare against, so every exit fell through to a full rewrite: parse, save,
write, then verify by parsing again. Now the baseline is written at enter time
even when no state file existed, so an untouched session is answered by restoring
the recorded bytes — a sequential 1:1 copy.

| file | exit before | exit after | parses before | parses after |
| --- | --- | --- | --- | --- |
| 6.1 MB / 42 pages | 1 825 ms | 43 ms | 2 | 0 |
| 18.7 MB / 1 page | 4 862 ms | 15 ms | 2 | 0 |
| 58.6 MB / 66 pages | 9 966 ms | 227 ms | 2 | 0 |

A restore also keeps the document byte-identical, so the ink count stays exactly
as it was (30/30 on the probe file — the rewrite path merged a duplicate legacy
annotation and produced 29).

### The read-back verification no longer blocks leaving

It re-parses the whole document, so it now runs after the spinner stops. If it
fails, the pre-edit state is restored and a notice is shown.

### Entering edit mode

- The verified annotation side-car already lists every ink annotation in the
  exact file (it is rejected when the fingerprint stops matching), so the import
  parse is skipped when it is available.
- The bytes and the parse already in hand are reused instead of reading the
  document a second time: 2 reads of 59 MB before, 1 now.
- A detach computed for the same bytes is remembered and replayed, turning a
  parse + save into a file copy. Capped at 32 MB, because holding the extra copy
  is exactly the wrong thing when the renderer is about to allocate another one.
- The detach cache stores a hash of the source bytes, not the bytes: identity
  does not cost a second copy of the document.

### Crash mitigation for large documents

`PDFDocument.load` on the 58.6 MB / 66 page probe file takes 5.2–8.2 s and leaves
330 MB of RSS (140 MB JS heap) behind; the detach save peaks at 390 MB. Reloading
the native view immediately afterwards asks pdf.js to read the same 59 MB again,
and that second allocation is what took the renderer down. A collector yield now
sits between them — 260 ms normally, 700 ms when the JS heap is already past 55%
of its limit.

### Tests

`tests/fast-exit.test.mjs` pins the unchanged-exit fast path, the baseline
requirement, the detach replay, the hash-based identity and the 32 MB cap. Full
suite: 46 passing. `tests/ink-roundtrip.mjs` on 6.1 MB / 18.7 MB: ink stable over
three cycles with exits in 15–43 ms.

## 0.6.1 — 2026-10-26

Reverts the 0.6.0 lazy detach on the enter path (it could not enter edit mode on
device) and keeps the parts that were wanted.

- Entering edit mode is back to the 0.5.9 flow: it detaches the ink pages, which
  works, at the cost of one rewrite per session.
- Kept: leaving edit mode shows the spinner (`finishPdfInkEditing`).
- Kept: the spinner is ref-counted (`preparingDepth`), so an exit that overlaps
  the enter preparation cannot clear the indicator the enter still needs.
- Kept: the spinner is armed before the annotation-state load and appears after
  120 ms. The state load hashes the whole PDF on a first open and used to run
  before the indicator turned on — that is why some enters showed no spinner.
- Kept: `toPdfBytes` hands `pdf.save()` output to the vault without a second
  full-size copy.
- Removed: `pendingInkDetachPages`, `scheduleInkDetach`, `runPendingInkDetach`,
  `annotationStateTrusted` and their hooks. Enter detaches; nothing else does.

Tests: `tests/spinner.test.mjs` pins the spinner behaviour and asserts the enter
path is back to detaching with no lazy-detach machinery left behind. Full suite
43 passing; `tests/ink-roundtrip.mjs` passes three enter/exit cycles on 6.1 MB.

## 0.6.0 — 2026-10-26

Entering edit mode no longer touches the file at all; a page is rewritten only
when its ink is actually modified. Leaving shows the same spinner as entering.

### Why (measured on the 58.6 MB / 66 page probe document)

| step | cost |
| --- | --- |
| read + fingerprint (what enter needs now) | 106 ms, RSS 168 MB |
| `PDFDocument.load` (what enter used to need) | 4 920 ms, RSS 424 MB |
| detach rewrite (`save` + write 59 MB) | +2 000–4 000 ms |
| pdf.js loading the rewritten file | its own full copy |

Entering edit mode used to detach every ink page immediately: parse the whole
document (424 MB of heap), save it, write it back, then have pdf.js load the
rewritten file. On a 60 MB PDF that is the peak that killed the WebView — the
"spinner spins, then Obsidian disappears" crash.

### Lazy detach

- `preparePdfInkOverlayForEditing` no longer rewrites the PDF: it arms the ink
  pages in `pendingInkDetachPages` and leaves the PDF painting its own ink.
- `markElementChanged` / `markStrokeDeleted` schedule `runPendingInkDetach`,
  which detaches the touched pages once (never mid-gesture), then hands display
  ownership to the overlay copy.
- A verified annotation side-car (`annotationStateTrusted`) lets enter skip the
  parser entirely; the first import now persists the index so later sessions do
  not parse at all. The fingerprint keeps it self-invalidating when the file
  changes.
- Leaving cancels a pending detach (it would race the save) and waits for one
  already in flight.

### Spinner

- Exit shows the spinner too (`finishPdfInkEditing`).
- Ref-counted (`preparingDepth`) so enter and detach cannot clear each other.
- Delayed by 120 ms before appearing, so fast enters no longer flash.

### Memory

- `toPdfBytes` hands `pdf.save()` output to the vault without a second
  full-size copy (previously every save allocated the document size twice).
- A short yield before the reload lets the large parsed document be collected
  before pdf.js allocates its own copy of the file.

### Tests

`tests/lazy-detach.test.mjs` — enter never rewrites or reloads, modify triggers
detach, both directions show the spinner, no full-size save copies.
Full suite: 44 tests passing. `tests/ink-roundtrip.mjs` still passes on 6.1 MB
and 58.6 MB documents (3 enter/exit cycles each, ink count stable).

## 0.5.9 — 2026-10-26

Entering and leaving PDF edit mode no longer re-parses the whole document, and
selection boxes now fully contain their elements.

### Performance (measured with `tests/ink-transaction-bench.mjs`, same files,
### same device, real plugin class on an in-memory vault)

| file | phase | 0.5.4 | 0.5.9 |
| --- | --- | --- | --- |
| 6.1 MB / 42 pages | enter | 2.22 s (2 parses) | 0.91 s (1 parse) |
| | exit | 2.17 s (2 parses) | 0.42 s |
| | second enter | 1.85 s | 0.26 s (0 parses) |
| 18.7 MB / 1 page | enter | 4.60 s | 2.50 s |
| | exit | 4.70 s | 0.39 s |
| | second enter | 4.60 s | 0.27 s |

- `getPdfReadCache` validates a cached parse by comparing bytes instead of
  trusting `stat`, and joins concurrent callers onto one in-flight parse. Entering
  edit mode schedules the preparation three times for late-mounting pages; every
  one of them used to parse the document again.
- `beginInkEditTransaction` / `completeInkEditTransactionNow` reuse that parse for
  the rewrite instead of loading the file a second time.
- The mutated document is always dropped from the cache afterwards. pdf-lib page
  objects are stateful; reusing a document whose annotations were removed
  corrupts the next write. An earlier attempt cached it and broke the commit
  path — `tests/ink-roundtrip.mjs` now guards that regression.
- Leaving edit mode requests the native view reload as soon as the committed
  bytes are on disk; the read-back verification runs after that reload
  (`InkCommitHooks.onBytesWritten` / `waitForRender`). The transaction record is
  marked committed before the reload, so a crash keeps the committed PDF instead
  of restoring the pre-edit backup.
- `scheduleEditableInkPrepare` retries while a conversion holds the session
  instead of silently dropping the request, and joins the in-flight run.
- A preparing spinner (`is-preparing`) shows on the annotation button while a
  large document is being parsed, so the tap no longer looks ignored.

### Selection boxes

- `normalizedStrokeBounds` includes half the rendered line width, so thick
  highlighter and watercolour strokes are no longer clipped by their own box.
- `normalizedTextBounds` / `textBounds` measure real advances with canvas
  `measureText`; the old 0.58 em estimate cut roughly 40% off CJK text. Without a
  canvas the fallback treats full-width glyphs as one em.
- Selection frame: line width 1.8 → 1, alpha 0.58, handles 10 → 8; marquee
  1.5 → 1 with a 0.06 fill.

### Tests

- `tests/ink-roundtrip.mjs` — real plugin class on an in-memory vault, three
  enter/exit cycles, asserts the Ink annotations on disk stay stable.
- `tests/selection-bounds.test.mjs` — stroke width, CJK measurement, frame style.
- `tests/ink-performance.test.mjs` — pins the parse-count and reload-order
  contracts.
- `tests/ink-transaction-bench.mjs` — before/after timings against any source tree.
- Full suite: 38 tests passing.

### Verification

- `npx tsc --noEmit` clean, `npm run build` clean, `node --check main.js` clean.
- 0.5.9 release assets downloaded back from GitHub and compared byte for byte
  with the local build: `main.js` 8c7f90ca6a1f33ed35, `manifest.json`
  42b095e008f2068c95, `styles.css` e201665ec4680567b9 — all identical.

## 0.5.4 — baseline

Last published build before the ink work. Rebuilt from tag `v0.5.4` it reproduces
`main.js` sha256 `884aebf46264d304e131a6d3025e1e7d31fbc7d733adeca34e113c59d9c4aa1f`.
