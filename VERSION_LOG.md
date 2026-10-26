# VERSION LOG

## 0.7.0 — 2026-10-26

A version bump on top of the **0.6.4 pipeline**, which is the build confirmed on
the device. Three later directions were tried and rejected there:

| version | idea | why it failed on device |
| --- | --- | --- |
| 0.6.5 / 0.6.6 | a large document enters edit mode without detaching; only CSS hides the native ink | the editor never opened, no spinner at all. The native annotation layer is `display:none` while pdftion is active, so the overlay is the only painter — skipping it hid all 78 imported strokes |
| 0.6.7 | a large document's exit writes only the side-car | same: entering edit mode stopped working |

### What 0.7.0 keeps

- entering edit mode really detaches the ink and reloads the native view; that
  path cannot be bypassed
- the detach result is replayed from disk, so a second enter does not parse
- an unchanged exit restores the enter bytes instead of rewriting
- a document at or above 32 MB keeps the reload inside the spinner instead of
  running it in the background while the user already draws
- the commit merges per page and only rewrites annotations that changed, so
  imported ink keeps its geometry, its width attribute and its appearance
- an empty annotation list can no longer be written over a full side-car
- interruptions are recoverable: a journal plus a save-time backup let the next
  start restore the document and re-attach the strokes; a committed transaction
  parks its backup instead of destroying it

### Verified

| check | result |
| --- | --- |
| `npx tsc --noEmit` | clean |
| `node --check main.js` | clean |
| `node --test tests/*.test.mjs` | 60 tests, 59 pass (the one failure is the pre-existing `i18n.test.mjs`, which needs Node's TypeScript support) |
| `tests/ink-appearance.mjs` on 19 MB / 2 strokes | appearance stable |
| `tests/no-ink-loss.mjs` on 19 MB / 2 strokes + 1 new | committed, verified, no loss |
| `tests/ink-roundtrip.mjs` on 6.1 MB / 30 strokes | three cycles, ink 30/30, enter 966/856/833 ms, exit 47/42/49 ms |
| release assets | `main.js` 2a56f2d88c405666…, `manifest.json` 078b96892c3e89ba…, `styles.css` e201665ec4680567… — identical across local build, GitHub release and the installed plugin |

## 0.6.3 — 2026-10-26

Targets the large-document crash. The enter flow is unchanged (it still detaches),
but a document only ever pays for that computation **once**.

### Root cause on the 58.6 MB / 66 page document

| step | cost |
| --- | --- |
| `getPdfInkPageIndexes` (parses the document) | 5.2–8.2 s, RSS 330 MB |
| detach `save()` | +1.0 s, peak RSS 390–500 MB |
| `modifyBinary` of the 59 MB result | 59 MB buffer |
| native view reload (pdf.js reads the same 59 MB again) | another full copy |

The device reports `jsHeapSizeLimit` 1078 MB with 179 MB already used by
Obsidian, so the transaction's ~450 MB sits on top of the PDF view's own copy of
the same document. That is the peak that kills the renderer.

### Detach replay, on disk

- After computing a detach, the result is stored next to the transaction backup
  (`<key>.detached.pdf` + `<key>.detached.json`), keyed by the SHA-256 of the
  source bytes and the page set.
- The next enter finds it and just copies it into the vault: no parse, no save.
  Measured on 6.1 MB / 42 pages and 58.6 MB / 66 pages: repeat enters 4.9–5.1 s →
  **0.23–0.36 s**.
- It is invalidated by any outside edit (the hash no longer matches) and by a
  different ink page set. Only one replay file is kept, since it costs a whole
  document on disk.
- Written *before* the caller reloads the view, so if the reload is what dies, the
  next attempt is the cheap path.
- If the source PDF is destroyed or the plugin is uninstalled the cache goes with
  the plugin data directory; a stale one is never trusted because of the hash.

### Entering no longer parses when a verified state exists

`runEditableInkPrepare` derives the ink page set from the loaded strokes instead
of calling `getPdfInkPageIndexes`, which parses the document. Falls back to the
parse whenever the derived set is empty, so an older state that omits `pdfPoints`
cannot silently skip the detach.

### Peak reduction

- The pre-detach bytes are released before `save()` allocates a second
  document-sized buffer, and the parsed document is dropped from the read cache at
  the same point (the mutated document is never re-cached).
- The source hash is computed while the bytes are in hand, so the cache write does
  not read the 59 MB backup back into memory.
- The collector yield before the native reload is now 700 ms for any document
  ≥ 32 MB, not only when the heap reports pressure — the reload doubles an already
  enormous footprint regardless of reported headroom.

### Tests

`tests/fast-exit.test.mjs` now pins the replay consult-before-parse order, the
hash identity, the page-set check, the single-entry pruning and the size-aware
collector delay. `tests/ink-roundtrip.mjs` gained `TRUSTED=1`, which reproduces
the side-car path: on the 58.6 MB document cycles 2 and 3 enter in 297/319 ms with
ink stable at 76/76. Full suite: 52 passing.

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
