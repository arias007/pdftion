// Lazy runtime loader for `pdftion-libs.cjs` (built from src/heavyEntry.ts).
// main.js stays small: the DOCX/PPTX/JSZip/fontkit stack is only parsed and
// executed when an export or PDF text-embedding actually needs it.
import type { docx, jszip, pdfFontkit, pptxgenjs } from "./heavyEntry";

export type HeavyLibs = {
  docx: typeof docx;
  jszip: typeof jszip;
  pdfFontkit: typeof pdfFontkit;
  pptxgenjs: typeof pptxgenjs;
};

let cachedHeavyLibs: HeavyLibs | null = null;

export function getHeavyLibs(): HeavyLibs {
  if (!cachedHeavyLibs) {
    try {
      // eslint-disable-next-line no-undef
      cachedHeavyLibs = require("./pdftion-libs.cjs") as HeavyLibs;
    } catch (error) {
      throw new Error(
        "pdftion could not load pdftion-libs.cjs. Make sure pdftion-libs.cjs sits in the plugin folder next to main.js (it is part of the release assets).",
        { cause: error }
      );
    }
  }
  return cachedHeavyLibs;
}
