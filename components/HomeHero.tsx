import Link from "next/link";
import { SITE } from "@/lib/site";

const STATS = [
  { label: "출강 지역", value: "전국" },
  { label: "안전 운영", value: "6단계" },
  { label: "평일 1차 회신", value: "30분" },
];

export default function HomeHero() {
  return (
    <>
      {/* 동영상 — 메인 페이지 최상단, 선명하게 노출 */}
      <section className="relative isolate w-full overflow-hidden bg-brand-900">
        <video
          className="h-[48vh] min-h-[260px] w-full animate-slowZoom object-cover sm:h-[58vh] lg:h-[66vh]"
          src="/assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="진로팡 학교 출강 미래교육 현장 영상"
        />
        {/* 하단만 살짝 어둡게 — 영상은 그대로 보이게 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-900 via-brand-900/55 to-transparent"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="container-pad pb-5">
            <p className="flex items-center text-[11.5px] font-bold uppercase tracking-[0.14em] text-white/80">
              <span aria-hidden className="mr-2.5 h-px w-7 bg-white/80" />
              ON-SITE EDUCATION · 현장 운영 실황
            </p>
          </div>
        </div>
      </section>

      {/* 텍스트 히어로 — 네이비 배경, 동영상 바로 아래 */}
      <section className="bg-brand-900 text-white">
        <div className="container-pad animate-fadeUp pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24">
          <div className="max-w-2xl">
            <p className="flex items-center text-[12.5px] font-bold uppercase tracking-[0.14em] text-white/70">
              <span aria-hidden className="mr-2.5 h-px w-7 bg-white/70" />
              전국 학교·기관 출강 · 안전관리 체계 운영
            </p>
            <h1 className="mt-5 text-[34px] font-bold leading-[1.18] sm:text-[48px] lg:text-[58px] lg:leading-[1.12]">
              학교로 찾아가는
              <br />
              미래교육 진로체험, <span className="text-white">진로팡</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-white/75 sm:text-[17px]">
              로봇·코딩·AI·메타버스·VR·드론까지. 학교 일정과 대상 학년, 운영
              목적에 맞춰 최적의 체험 프로그램과 맞춤형 부스를 안전하게 운영해
              드립니다.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-dark">
                무료 견적·상담 신청
                <Arrow />
              </Link>
              <a
                href={`tel:${SITE.phoneE164}`}
                className="inline-flex items-center gap-2 rounded-[2px] border border-white/35 px-6 py-[14px] text-[14.5px] font-semibold text-white transition-colors hover:border-white"
              >
                전화 문의 {SITE.phone}
              </a>
              <a
                href="/assets/jinropang-brochure.pdf"
                className="inline-flex items-center gap-1.5 px-2 py-2 text-[13.5px] font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                회사 소개 PDF
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-white/55">
                    {s.label}
                  </dt>
                  <dd className="mt-1.5 text-[24px] font-bold leading-[1.2] tabular-nums">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
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
