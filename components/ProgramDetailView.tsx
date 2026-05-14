import Link from "next/link";
import PageHero from "./PageHero";
import CTASection from "./CTASection";
import { type Program } from "@/lib/programs";

export default function ProgramDetailView({
  program,
  eyebrow,
  breadcrumb,
  backHref,
  backLabel,
}: {
  program: Program;
  eyebrow: string;
  breadcrumb: { label: string; href?: string }[];
  backHref: string;
  backLabel: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        image={program.image}
        title={program.title}
        description={program.description}
        breadcrumb={breadcrumb}
      />

      <section className="container-pad py-10 lg:py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* 좌측 — 이미지 */}
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-ink-100 bg-ink-50">
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* 우측 — 운영 정보 + 설명 */}
          <div className="md:col-span-5">
            <p className="section-eyebrow">PROGRAM DETAILS</p>
            <h2 className="mt-3 text-[24px] font-bold leading-[1.3] text-ink-900">
              운영 정보
            </h2>

            <dl className="mt-6 border-t border-ink-100">
              <div className="flex items-start justify-between gap-4 border-b border-ink-100 py-3.5 text-[14.5px] leading-[1.55]">
                <dt className="font-medium text-ink-500">소요 시간</dt>
                <dd className="text-right font-semibold text-ink-900 tabular-nums">
                  {program.duration}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-ink-100 py-3.5 text-[14.5px] leading-[1.55]">
                <dt className="font-medium text-ink-500">권장 인원</dt>
                <dd className="text-right font-semibold text-ink-900 tabular-nums">
                  {program.capacity}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 py-3.5 text-[14.5px] leading-[1.55]">
                <dt className="font-medium text-ink-500">대상</dt>
                <dd className="text-right font-semibold text-ink-900">
                  {program.category === "elementary"
                    ? program.group === "g12"
                      ? "초등 1-2학년"
                      : program.group === "g36"
                        ? "초등 3-6학년"
                        : "초등 체험학습"
                    : program.category === "secondary"
                      ? "중·고등학생"
                      : "축제·행사부스 / 전 학년"}
                </dd>
              </div>
            </dl>

            <h3 className="mt-8 text-[17px] font-bold text-ink-900">
              프로그램 소개
            </h3>
            <p className="mt-3 text-[15px] leading-[1.85] text-ink-700">
              {program.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <Link href="/contact" className="btn-primary">
                이 프로그램 견적 문의
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
              <Link href={backHref} className="btn-secondary">
                ← {backLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="이 프로그램, 학교 일정에 맞춰 운영해드립니다"
        description="대상 학년·인원·운영 시간만 알려주시면 가장 잘 맞는 구성을 제안드립니다."
      />
    </>
  );
}
