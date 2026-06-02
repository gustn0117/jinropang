import { SITE } from "@/lib/site";
import { listReviews } from "@/lib/reviews";
import { categoryLabel } from "@/lib/categories";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(iso: string): string {
  try {
    return new Date(iso).toUTCString();
  } catch {
    return new Date().toUTCString();
  }
}

export async function GET() {
  const reviews = (await listReviews()).reverse(); // 최신순
  const buildDate = new Date().toUTCString();
  const feedUrl = `${SITE.url}/rss.xml`;
  const reviewsUrl = `${SITE.url}/reviews`;

  const items = reviews
    .slice(0, 50) // 최신 50건
    .map((r) => {
      const cat = r.category ? categoryLabel(r.category) : "";
      const link = `${reviewsUrl}#${r.id}`;
      const titlePrefix = cat ? `[${cat}] ` : "";
      return `
    <item>
      <title>${xmlEscape(titlePrefix + r.title)}</title>
      <link>${xmlEscape(link)}</link>
      <guid isPermaLink="false">${xmlEscape(r.id)}</guid>
      <pubDate>${rfc822(r.createdAt)}</pubDate>
      ${cat ? `<category>${xmlEscape(cat)}</category>` : ""}
      <description>${xmlEscape(r.body)}</description>
    </item>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(SITE.brandFull)} — 진행후기</title>
    <link>${xmlEscape(reviewsUrl)}</link>
    <description>${xmlEscape(SITE.description)}</description>
    <language>ko-KR</language>
    <atom:link href="${xmlEscape(feedUrl)}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>진로팡 RSS</generator>${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
