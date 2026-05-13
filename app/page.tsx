import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.brandFull} | 학교·기관 출강 로봇·코딩·AI·메타버스 체험`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

const PROGRAM_LINKS = [
  { href: "/programs/elementary", name: "학교로 찾아가는 미래교육" },
  { href: "/programs/secondary", name: "학교로 찾아가는 체험학습" },
  { href: "/programs/event", name: "축제 · 행사 체험부스" },
  { href: "/programs/event#competition", name: "대회 운영" },
];

export default function HomePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "진로팡 주요 서비스",
    itemListElement: PROGRAM_LINKS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE.url}${s.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <HomeHero />
    </>
  );
}
