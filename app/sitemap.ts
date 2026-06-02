import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import {
  ELEMENTARY,
  SECONDARY,
  SECONDARY_MAGIC,
  EVENT_PROGRAMS,
  groupToSegment,
} from "@/lib/programs";

const STATIC_ROUTES: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, freq: "weekly" },
  { path: "/about", priority: 0.8, freq: "monthly" },
  { path: "/programs/elementary", priority: 0.9, freq: "weekly" },
  { path: "/programs/secondary", priority: 0.9, freq: "weekly" },
  { path: "/programs/event", priority: 0.9, freq: "weekly" },
  { path: "/safety", priority: 0.7, freq: "monthly" },
  { path: "/reviews", priority: 0.8, freq: "weekly" },
  { path: "/qna", priority: 0.7, freq: "weekly" },
  { path: "/contact", priority: 0.6, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // 정적 페이지
  for (const { path, priority, freq } of STATIC_ROUTES) {
    entries.push({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    });
  }

  // 초등 프로그램 상세 — /programs/elementary/[group]/[slug]
  for (const p of ELEMENTARY) {
    entries.push({
      url: `${SITE.url}/programs/elementary/${groupToSegment(p.group)}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // 중·고등 프로그램 상세 — /programs/secondary/[slug]
  for (const p of [...SECONDARY, ...SECONDARY_MAGIC]) {
    entries.push({
      url: `${SITE.url}/programs/secondary/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // 행사부스 상세 — /programs/event/[slug]
  for (const p of EVENT_PROGRAMS) {
    entries.push({
      url: `${SITE.url}/programs/event/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
