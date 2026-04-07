import { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.akrentalservice.in";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${base}/${l.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: l.city === "Pimpri-Chinchwad" ? 0.9 : 0.8,
  }));

  return [...staticPages, ...locationPages];
}
