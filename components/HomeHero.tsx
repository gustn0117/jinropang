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
  {
    href: SITE.social.instagram,
    label: "인스타그램",
    sub: "바로가기",
    external: true,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: SITE.social.youtube,
    label: "유튜브",
    sub: "바로가기",
    external: true,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.5 9.2v5.6L15 12z" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: SITE.social.blog,
    label: "네이버 블로그",
    sub: "바로가기",
    external: true,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.5 16V8l5 5.5V8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: `tel:${SITE.phoneE164}`,
    label: "문의전화",
    sub: SITE.phone,
    external: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.87.69 2.74a2 2 0 0 1-.45 2.11L8.09 9.83a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.87.33 1.79.56 2.74.69A2 2 0 0 1 22 16.92Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: SITE.kakaoChannel,
    label: "카카오톡 채널",
    sub: "1:1 문의하기",
    external: true,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 4C6.9 4 2.8 7.2 2.8 11.2c0 2.5 1.7 4.7 4.2 6L6 21l4.2-2.3c.6.1 1.2.1 1.8.1 5.1 0 9.2-3.2 9.2-7.6S17.1 4 12 4Z" />
      </svg>
    ),
  },
];

export default function HomeHero() {
  return (
    <section className="container-pad py-12 lg:py-16">
      <div className="grid animate-fadeUp gap-5 lg:grid-cols-[268px_minmax(0,1fr)_244px] lg:gap-6">
        {/* 좌측 — 소개 + 신청서 작성 */}
        <aside className="flex flex-col rounded-[3px] border border-ink-100 bg-soft-grad p-7">
          <p className="section-eyebrow">전국 학교·기관 출강</p>
          <h1 className="mt-4 text-[24px] font-bold leading-[1.3] text-ink-900">
            학교로 찾아가는
            <br />
            미래교육 진로팡
          </h1>
          <div aria-hidden className="my-5 h-px bg-ink-100" />
          <p className="flex-1 text-[14.5px] leading-[1.85] text-ink-700">
            학교 일정과 대상 학년, 진로교육 및 축제·행사 운영 목적에 맞춰 최적의
            체험 프로그램과 맞춤형 체험부스를 제안해드립니다. 신청서 작성 후
            담당자가 확인하여 빠르게 안내드리겠습니다.
          </p>
          <Link href="/contact" className="btn-primary mt-7 w-full">
            신청서 작성
            <Arrow />
          </Link>
          <p className="mt-3 text-center text-[12px] leading-[1.4] text-ink-500">
            평일 30분 이내 1차 회신
          </p>
        </aside>

        {/* 중앙 — 동영상 + 프로그램 4종 */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-[3px] border border-ink-100 bg-brand-900">
            <video
              className="absolute inset-0 h-full w-full animate-slowZoom object-cover"
              src="/assets/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="진로팡 학교 출강 미래교육 현장 영상"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-900/80 to-transparent"
            />
            <p className="absolute bottom-4 left-5 flex items-center text-[11.5px] font-bold uppercase tracking-[0.14em] text-white">
              <span aria-hidden className="mr-2.5 h-px w-6 bg-white" />
              ON-SITE · 현장 운영 실황
            </p>
          </div>

          {PROGRAMS.map((p, i) => (
            <Link
              key={p.title}
              href={p.href}
              className="group flex items-center gap-5 rounded-[3px] border border-ink-100 bg-white p-5 transition-colors hover:border-brand-700 sm:p-6"
            >
              <span className="text-[22px] font-bold leading-none tabular-nums text-brand-100 transition-colors group-hover:text-brand-700 sm:text-[26px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <span className="chip">{p.badge}</span>
                <h3 className="mt-2.5 text-[18px] font-bold leading-[1.35] text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.65] text-ink-700">
                  {p.desc}
                </p>
              </div>
              <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white sm:inline-flex">
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
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group flex items-center gap-3.5 rounded-[3px] border border-ink-100 bg-white px-4 py-3.5 transition-colors hover:border-brand-700"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[2px] bg-ink-50 text-ink-700 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">
                {l.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-semibold leading-[1.3] text-ink-900">
                  {l.label}
                </span>
                <span className="block text-[12px] leading-[1.3] text-ink-500">
                  {l.sub}
                </span>
              </span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-ink-300 transition-colors group-hover:text-brand-700"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
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
