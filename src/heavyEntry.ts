// Separate bundle compiled to `pdftion-libs.cjs`. It is required lazily by
// main.js at first use so Obsidian startup no longer parses and executes the
// heavy export stack (DOCX / PPTX / ZIP / PDF font subsetting). This file must
// ship next to main.js in every release and install.
export * as docx from "docx";
export { default as jszip } from "jszip";
export { default as pptxgenjs } from "pptxgenjs";
export * as pdfFontkit from "@pdf-lib/fontkit";
