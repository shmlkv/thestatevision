import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://thestate.vision/sitemap.xml",
    host: "https://thestate.vision",
  };
}
