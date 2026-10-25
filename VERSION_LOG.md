# Version log

## v0.5.5 — fast ink entry, finer selection frame

### Entering annotation mode no longer waits for the whole PDF

`0.5.4` parsed the file up to three times before the first stroke could be
drawn (ink page index, stroke import, then the detach transaction that rewrites
the file and reloads the view). On a 55 MB / 66-page PDF a single `pdf-lib`
parse measures **4.3 s** on the phone, so the pen felt stuck — and the bigger the
file, the worse it got.

- Ink is now read from the pdf.js document the viewer already parsed
  (`page.getAnnotations({ intent: "display" })`), which costs milliseconds and
  still works for PDFs `pdf-lib` refuses to load.
- Preparation is per page and lazy: only pages near the viewport are checked,
  and each page is checked once. Scrolling pulls in one more page at a time.
- The ink page index is cached on disk (`data/ink-page-index.json`) keyed by
  path + mtime + size, so reopening a large PDF does no scan at all.
- Ink-free files are ruled out by a byte-level token scan (~2 ms on 50 MB)
  instead of a full parse; the previous string decode cost 1.1 s.
- When the viewer renders annotations as DOM, the existing CSS hiding covers the
  native ink, so the file is never rewritten or reloaded. The detach rewrite is
  now the fallback for viewers without an annotation layer.
- The detach transaction reuses the already parsed document instead of
  invalidating and re-parsing it.

### Ink conversion is faithful

- Every `InkList` path becomes its own stroke. Merging them into one polyline
  drew a straight jump across the page wherever the pen was lifted — the
  "can't be edited properly" case.
- A single-tap annotation survives as a visible dot instead of being dropped.
- Stroke width comes from `/BS /W` (the rendered width) instead of `/Border`,
  which made imported marker strokes render as hairlines.
- Imported native-ink copies are no longer persisted into the annotation state;
  they are re-read from the page, which removes stale duplicates.

### Selection frame

- The frame is a 1-device-pixel hairline snapped to the pixel grid, drawn with
  translucent blue, plus round corner brackets instead of a 1.8 px dash ring
  and 10 px white handle squares.
- Marquee selection follows the same treatment, and the native-text selection
  box dropped its dash pattern and used the same hairline.
- Corner hit radius widened from 8 px to 12 px so the brackets stay easy to grab
  now that they are visually lighter.
- The native text editor border is now a 1 px solid line instead of a 1.5-1.8 px
  dashed box with an inner shadow.

### Verification

```
npx tsc --noEmit                                   # clean
npm run build && node --check main.js              # 2,604,713 bytes
node --test tests/pdftion-contract.test.mjs        # 26/26 pass
node bench/ink-conv.test.mjs                       # 17/17 pass
```

Measured on the phone (`bench/pdfbench.mjs`, `bench/gate2.mjs`):

```
55.4 MB / 66 pages   read 169 ms   token scan 2 ms   pdf-lib load 4,616 ms
27.8 MB / 220 pages  read  43 ms   token scan 135 ms  pdf-lib load   42 ms
17.9 MB /  1 page    read 143 ms   token scan 2 ms    pdf-lib load 2,711 ms
```
