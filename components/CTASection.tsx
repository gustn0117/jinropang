import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTASection({
  title = "지금 무료로 맞춤 견적을 받아보세요",
  description = "학교 일정·대상 학년·운영 목적에 맞춰 최적의 체험 프로그램과 부스 구성을 제안해드립니다. 평일 30분 이내 1차 회신을 드립니다.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-pad py-20">
      <div className="relative overflow-hidden rounded-3xl bg-hero-grad p-8 text-white sm:p-12">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-500/30 blur-3xl" aria-hidden />
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] leading-[1.2] font-semibold uppercase tracking-[0.18em] text-white">
              FREE CONSULTING
            </span>
            <h2 className="mt-4 text-2xl leading-[1.3] font-extrabold sm:text-4xl sm:leading-[1.2]">
              {title}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.8] text-white/85 sm:text-[16px] sm:leading-[1.8]">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] leading-[1.2] font-bold text-brand-700 shadow-soft hover:bg-brand-50"
            >
              신청서 작성하기
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
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-[15px] leading-[1.2] font-bold text-white hover:bg-white/10"
            >
              전화 문의 {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
