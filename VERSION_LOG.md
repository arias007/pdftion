# VERSION LOG

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
