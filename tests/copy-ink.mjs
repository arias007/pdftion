// Rebuild a damaged PDF from a known-good copy while keeping the annotations that
// were drawn afterwards. The annotation dictionaries are copied verbatim (with their
// appearance streams), so width, colour and opacity are exactly what the user drew.
// Usage: node tests/copy-ink.mjs <clean.pdf> <donor.pdf> <out.pdf> <id-prefix...>
import { createRequire } from "node:module";
import path from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

const repoRoot = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const require = createRequire(import.meta.url);
const { PDFDocument, PDFName, PDFDict, PDFArray, PDFNumber } = require(path.join(repoRoot, "node_modules", "pdf-lib", "cjs", "index.js"));
const PDFObjectCopier = require(path.join(repoRoot, "node_modules", "pdf-lib", "cjs", "core", "PDFObjectCopier.js")).default;

const [cleanPath, donorPath, outPath, ...wanted] = process.argv.slice(2);
const clean = await PDFDocument.load(new Uint8Array(readFileSync(cleanPath)), { ignoreEncryption: true, updateMetadata: false });
const donor = await PDFDocument.load(new Uint8Array(readFileSync(donorPath)), { ignoreEncryption: true, updateMetadata: false });

function nameOf(annot) {
  const nm = annot.lookup(PDFName.of("NM"));
  return nm && typeof nm.decodeText === "function" ? nm.decodeText() : null;
}
function fingerprints(pdf) {
  const out = new Map();
  pdf.getPages().forEach((page, pageIndex) => {
    const annots = page.node.Annots?.();
    if (!annots) return;
    for (let i = 0; i < annots.size(); i += 1) {
      const annot = annots.lookupMaybe(i, PDFDict);
      if (!annot || annot.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() !== "Ink") continue;
      const rect = annot.lookupMaybe(PDFName.of("Rect"), PDFArray);
      const bs = annot.lookupMaybe(PDFName.of("BS"), PDFDict);
      let w = bs?.lookupMaybe(PDFName.of("W"), PDFNumber)?.asNumber();
      if (w === undefined) {
        const border = annot.lookupMaybe(PDFName.of("Border"), PDFArray);
        w = border?.lookupMaybe(2, PDFNumber)?.asNumber();
      }
      out.set(nameOf(annot) ?? `anon-${pageIndex}-${i}`, {
        pageIndex,
        rect: rect ? [0, 1, 2, 3].map((k) => Number((rect.lookupMaybe(k, PDFNumber)?.asNumber() ?? 0).toFixed(3))) : [],
        width: w === undefined ? null : Number(w.toFixed(4))
      });
    }
  });
  return out;
}

const before = fingerprints(clean);
const donorPages = donor.getPages();
const cleanPages = clean.getPages();
const copier = PDFObjectCopier.for(clean.context, donor.context);

let copied = 0;
donorPages.forEach((donorPage, pageIndex) => {
  const annots = donorPage.node.Annots?.();
  if (!annots) return;
  for (let i = 0; i < annots.size(); i += 1) {
    const annot = annots.lookupMaybe(i, PDFDict);
    if (!annot || annot.lookupMaybe(PDFName.of("Subtype"), PDFName)?.decodeText() !== "Ink") continue;
    const name = nameOf(annot);
    if (!name || before.has(name)) continue;
    if (wanted.length > 0 && !wanted.some((prefix) => name.startsWith(prefix))) continue;
    const copy = copier.copy(annot);
    if (!(copy instanceof PDFDict)) continue;
    copy.set(PDFName.of("P"), cleanPages[pageIndex].ref);
    const ref = clean.context.register(copy);
    cleanPages[pageIndex].node.addAnnot(ref);
    before.set(name, { pageIndex, rect: [], width: null });
    copied += 1;
  }
});

const bytes = await clean.save({ addDefaultPage: false, useObjectStreams: false });
writeFileSync(outPath, Buffer.from(bytes));

const originalFp = fingerprints(await PDFDocument.load(new Uint8Array(readFileSync(cleanPath)), { ignoreEncryption: true, updateMetadata: false }));
const after = fingerprints(await PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false }));
let changed = 0;
for (const [id, want] of originalFp) {
  const now = after.get(id);
  if (!now) { changed += 1; continue; }
  if (JSON.stringify(now.rect) !== JSON.stringify(want.rect) || now.width !== want.width) changed += 1;
}
console.log(JSON.stringify({ copied, cleanInk: originalFp.size, finalInk: after.size, changedOriginals: changed }));
