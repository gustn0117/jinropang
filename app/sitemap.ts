import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/programs/elementary",
  "/programs/secondary",
  "/programs/event",
  "/safety",
  "/reviews",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
