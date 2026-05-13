import Link from "next/link";
import { SITE } from "@/lib/site";

const PROGRAMS = [
  {
    href: "/programs/elementary",
    badge: "초등학교",
    title: "학교로 찾아가는 미래교육",
    desc: "초등학교 학년별 로봇·코딩·AI·메타버스 체험 프로그램",
  },
  {
    href: "/programs/secondary",
    badge: "중·고등학교",
    title: "학교로 찾아가는 체험학습",
    desc: "중·고등학교 진로 연계 워크숍·캠프·VR 진로직업 체험",
  },
  {
    href: "/programs/event",
    badge: "행사부스 운영",
    title: "축제 · 행사 체험부스",
    desc: "AI 포토·VR·로봇 대결·드론 미션 등 인기 부스 모듈 운영",
  },
  {
    href: "/programs/event#competition",
    badge: "대회 운영",
    title: "대회 운영",
    desc: "코딩·로봇·AI 경진대회 기획·심사·운영·시상 일괄 진행",
  },
];

const LINKS = [
  { href: SITE.social.instagram, label: "인스타그램 바로가기", external: true },
  { href: SITE.social.youtube, label: "유튜브 바로가기", external: true },
  { href: SITE.social.blog, label: "블로그 바로가기", external: true },
  { href: `tel:${SITE.phoneE164}`, label: `문의전화 ${SITE.phone}` },
  { href: SITE.kakaoChannel, label: "카카오톡 채널 1:1 문의하기", external: true },
];

export default function HomeHero() {
  return (
    <section className="container-pad py-10 lg:py-14">
      <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)_232px] lg:gap-6">
        {/* 좌측 — 소개 + 신청서 작성 */}
        <aside className="flex flex-col rounded-[3px] border border-ink-100 bg-soft-grad p-6">
          <p className="section-eyebrow">진로팡</p>
          <p className="mt-4 flex-1 text-[15px] leading-[1.85] text-ink-700">
            학교 일정과 대상 학년, 진로교육 및 축제·행사 운영 목적에 맞춰 최적의
            체험 프로그램과 맞춤형 체험부스를 제안해드립니다. 신청서 작성 후
            담당자가 확인하여 빠르게 안내드리겠습니다.
          </p>
          <Link href="/contact" className="btn-primary mt-6 w-full">
            신청서 작성
            <Arrow />
          </Link>
        </aside>

        {/* 중앙 — 동영상 + 프로그램 4종 */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-[3px] border border-ink-100 bg-ink-50">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="진로팡 학교 출강 미래교육 현장 영상"
            />
          </div>

          {PROGRAMS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="card group flex items-center justify-between gap-5"
            >
              <div>
                <span className="chip">{p.badge}</span>
                <h3 className="mt-3 text-[18px] font-bold leading-[1.35] text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.65] text-ink-700">
                  {p.desc}
                </p>
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>

        {/* 우측 — 채널 / 문의 바로가기 */}
        <aside className="flex flex-col gap-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="group flex items-center justify-between gap-3 rounded-[3px] border border-ink-100 bg-white px-4 py-3.5 text-[14px] font-semibold text-ink-800 transition-colors hover:border-brand-700 hover:text-brand-700"
            >
              {l.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-ink-400 transition-colors group-hover:text-brand-700"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </aside>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
