import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.akrentalservice.in/sitemap.xml",
    host: "https://www.akrentalservice.in",
  };
}
