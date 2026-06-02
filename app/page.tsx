import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import StatsBanner from "@/components/StatsBanner";
import { LeftAside, RightAside } from "@/components/SiteAsides";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} | 학교로 찾아가는 AI·로봇·코딩 진로체험 전문기관`,
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

      {/* 데스크탑 — 좌·우 사이드를 뷰포트 가장자리에 고정 (홈 전용) */}
      <aside
        aria-label="좌측 안내"
        className="fixed left-6 top-[96px] z-30 hidden w-[200px] lg:block"
      >
        <LeftAside />
      </aside>
      <aside
        aria-label="채널 / 문의"
        className="fixed right-6 top-[96px] z-30 hidden w-[188px] lg:block"
      >
        <RightAside />
      </aside>

      <HomeHero />

      {/* 2026년 실적 + 4개 지역 거점 운영 + 학교 업무 부담 */}
      <StatsBanner />

      {/* 모바일 — 본문 하단에 사이드 인라인 표시 */}
      <div className="container-pad space-y-4 pt-10 lg:hidden">
        <LeftAside />
        <RightAside />
      </div>
    </>
  );
}
