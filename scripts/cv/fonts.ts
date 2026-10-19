import { createRequire } from "node:module";
import { Font } from "@react-pdf/renderer";

// Same typefaces as the website, loaded from the @fontsource packages (OFL licensed).
// react-pdf supports TTF and WOFF, but not WOFF2.
const require = createRequire(import.meta.url);
const file = (pkg: string, name: string) => require.resolve(`@fontsource/${pkg}/files/${name}.woff`);

export const registerFonts = () => {
  Font.register({
    family: "Inter",
    fonts: [
      { src: file("inter", "inter-latin-400-normal"), fontWeight: 400 },
      { src: file("inter", "inter-latin-500-normal"), fontWeight: 500 },
      { src: file("inter", "inter-latin-600-normal"), fontWeight: 600 },
      { src: file("inter", "inter-latin-700-normal"), fontWeight: 700 },
    ],
  });

  Font.register({
    family: "Space Grotesk",
    fonts: [
      { src: file("space-grotesk", "space-grotesk-latin-500-normal"), fontWeight: 500 },
      { src: file("space-grotesk", "space-grotesk-latin-600-normal"), fontWeight: 600 },
      { src: file("space-grotesk", "space-grotesk-latin-700-normal"), fontWeight: 700 },
    ],
  });

  // Never split words with hyphens; it looks messy on a CV.
  Font.registerHyphenationCallback((word) => [word]);
};
