import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://auvrion.tech";
  return ["", "/about", "/services", "/work", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: "2026-11-17",
    }),
  );
}
