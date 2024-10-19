import { Gloock, IBM_Plex_Sans } from "next/font/google";

export const fontIBMPlexSans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin-ext", "cyrillic"],
});
export const fontIBMPlexSansBold = IBM_Plex_Sans({
  weight: "700",
  subsets: ["latin-ext", "cyrillic"],
});
export const fontGloock = Gloock({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-gloock",
  display: "swap",
});
