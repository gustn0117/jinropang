import Link from "next/link";

const PROGRAMS = [
  {
    href: "/programs/elementary",
    badge: "초등학교",
    title: "학교로 찾아가는 미래교육",
    desc: "초등학교 학년별 로봇·코딩·AI·메타버스 체험 프로그램",
    image: "/card-elementary.jpg",
  },
  {
    href: "/programs/secondary",
    badge: "중·고등학교",
    title: "학교로 찾아가는 체험학습",
    desc: "중·고등학교 진로 연계 워크숍·캠프·VR 진로직업 체험",
    image: "/card-secondary.jpg",
  },
  {
    href: "/programs/event",
    badge: "행사부스 운영",
    title: "축제 · 행사 체험부스",
    desc: "AI 포토·VR·로봇 대결·드론 미션 등 인기 부스 모듈 운영",
    image: "/card-event.jpg",
  },
  {
    href: "/programs/event#competition",
    badge: "대회 운영",
    title: "대회 운영",
    desc: "코딩·로봇·AI 경진대회 기획·심사·운영·시상 일괄 진행",
    image: "/card-competition.jpg",
  },
];

export default function HomeHero() {
  return (
    <div className="shell-pad flex animate-fadeUp flex-col gap-4">
      <h1 className="sr-only">찾아가는 미래교육 진로팡 — 학교·기관 출강 로봇·코딩·AI 체험</h1>
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
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
      {PROGRAMS.map((p, i) => (
        <Link
          key={p.title}
          href={p.href}
          className="group relative isolate block aspect-video overflow-hidden rounded-[3px] border border-ink-100 bg-brand-900 text-white transition-colors hover:border-brand-700"
        >
          {/* 배경 이미지 — 풀-블리드, 선명하게 */}
          <img
            src={p.image}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          {/* 하단으로 갈수록 어두워지는 그라데이션 — 본문 가독성 */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-brand-900/0"
          />
          {/* 좌측 살짝 어둡게 — 인덱스/뱃지 가독성 */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-brand-900/35 via-brand-900/0 to-transparent"
          />

          {/* 좌상단 인덱스 */}
          <span className="absolute left-5 top-5 text-[14px] font-bold tabular-nums text-white/65 sm:left-6 sm:top-6 sm:text-[15px]">
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* 우상단 화살표 */}
          <span className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors group-hover:border-white group-hover:bg-white group-hover:text-brand-700 sm:right-6 sm:top-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* 하단 콘텐츠 */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <span className="inline-flex items-center rounded-[2px] border border-white/30 bg-white/10 px-2.5 py-1 text-[11.5px] font-semibold tracking-[0.02em] text-white backdrop-blur-sm">
              {p.badge}
            </span>
            <h3 className="mt-2.5 text-[19px] font-bold leading-[1.3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-[22px]">
              {p.title}
            </h3>
            <p className="mt-1 text-[13.5px] leading-[1.55] text-white/85 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] sm:text-[14px]">
              {p.desc}
            </p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}
