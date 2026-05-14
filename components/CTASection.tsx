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
    <section className="mt-12 bg-brand-900 text-white">
      <div className="container-pad flex flex-col gap-7 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="flex items-center text-[12.5px] font-bold uppercase tracking-[0.14em] text-white/55">
            <span aria-hidden className="mr-2.5 h-px w-7 bg-white/55" />
            FREE CONSULTING
          </p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.3] sm:text-[34px] sm:leading-[1.25]">
            {title}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.8] text-white/70 sm:text-[16px]">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Link href="/contact" className="btn-dark">
            견적 문의하기
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
            className="inline-flex items-center gap-2 rounded-[2px] border border-white/35 px-6 py-[14px] text-[14.5px] font-semibold text-white transition-colors hover:border-white"
          >
            전화 문의 {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
