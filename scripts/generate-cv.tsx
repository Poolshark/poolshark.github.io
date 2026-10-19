/**
 * Generates public/cv.pdf from src/data/resume.ts, the same data the website uses.
 *
 *   npm run cv       # regenerate the PDF
 *   npm run build    # runs this automatically first (via "prebuild")
 */
import React from "react";
import { statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderToFile } from "@react-pdf/renderer";
import { resume } from "../src/data/resume";
import { CvDocument } from "./cv/CvDocument";
import { registerFonts } from "./cv/fonts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "public", "cv.pdf");

// Date the PDF by when its sources last changed rather than "now", so
// regenerating an unchanged CV produces an identical file (no git noise).
const sources = ["src/data/resume.ts", "scripts/cv/CvDocument.tsx"];
const lastChanged = new Date(Math.max(...sources.map((file) => statSync(path.join(root, file)).mtimeMs)));

registerFonts();

const started = Date.now();
await renderToFile(<CvDocument resume={resume} date={lastChanged} />, output);
console.log(`CV written to ${path.relative(root, output)} in ${Date.now() - started} ms`);
