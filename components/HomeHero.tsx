import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-hero-grad text-white">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl" aria-hidden />

      <div className="container-pad relative z-10 grid items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-6">
          <span className="chip bg-white/15 text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
            전국 학교·기관 출강 · 안전관리 체계 운영
          </span>
          <h1 className="mt-5 text-4xl leading-[1.2] font-extrabold sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.05]">
            학교로 찾아가는
            <br />
            <span className="bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent">
              미래교육 진로체험,
            </span>
            <br />
            진로팡
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-white/85 sm:text-[17px] sm:leading-[1.8]">
            로봇·코딩·AI·메타버스·VR·드론까지. 학교 일정과 대상 학년, 운영
            목적에 맞춰 최적의 체험 프로그램과 맞춤형 부스를 안전하게 운영해
            드립니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] leading-[1.2] font-bold text-brand-700 shadow-soft hover:bg-brand-50"
            >
              무료 견적·상담 신청
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a
              href={`tel:${SITE.phoneE164}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[15px] leading-[1.2] font-bold text-white hover:bg-white/10"
            >
              전화 문의 {SITE.phone}
            </a>
            <a
              href="/assets/jinropang-brochure.pdf"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] leading-[1.2] font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline"
              aria-label="진로팡 회사 소개 PDF 다운로드"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              회사 소개 PDF
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6">
            <div>
              <dt className="text-[11px] leading-[1.3] font-semibold uppercase tracking-[0.18em] text-white/60">
                출강 지역
              </dt>
              <dd className="mt-1 text-2xl leading-[1.2] font-extrabold">전국</dd>
            </div>
            <div>
              <dt className="text-[11px] leading-[1.3] font-semibold uppercase tracking-[0.18em] text-white/60">
                안전 프로세스
              </dt>
              <dd className="mt-1 text-2xl leading-[1.2] font-extrabold">6단계</dd>
            </div>
            <div>
              <dt className="text-[11px] leading-[1.3] font-semibold uppercase tracking-[0.18em] text-white/60">
                평일 1차 회신
              </dt>
              <dd className="mt-1 text-2xl leading-[1.2] font-extrabold">30분</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-black/30 shadow-soft sm:aspect-video md:aspect-[4/5]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="진로팡 체험교육 현장 동영상"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
              <div>
                <p className="text-[11px] leading-[1.3] font-semibold uppercase tracking-[0.18em] text-accent-400">
                  ON-SITE EDUCATION
                </p>
                <p className="mt-1 text-[15px] leading-[1.4] font-bold sm:text-lg">
                  현장 운영 실황
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[11px] leading-[1.2] font-semibold backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" aria-hidden />
                LIVE LOOP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
