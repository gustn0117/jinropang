import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/site";
import { listReviews } from "@/lib/reviews";
import ReviewsList from "./ReviewsList";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "진행후기 — 학교·기관에서 전해주신 운영 후기",
  description:
    "진로팡 미래교육 프로그램을 진행한 학교·기관의 진행 후기를 모았습니다. 초등 체험학습부터 중·고등 진로의 날, 축제 부스, 대회 운영까지 다양한 운영 사례를 확인하세요.",
  alternates: { canonical: "/reviews" },
};

const HIGHLIGHTS = [
  { value: "전국 출강 가능", label: "출강 가능 지역" },
  { value: "1회 300명 이상", label: "축제 부스 동시 운영" },
  { value: "사후 결과 보고서 제공", label: "행정 자료 지원" },
  { value: "0건", label: "사후 안전 사고" },
];

const TRUST_LIST = [
  "출강 지역 제한 없는 전국 운영",
  "6단계 안전 운영 프로세스",
  "결재용 안전관리계획서 / 견적서 / 보고서 제공",
  "수업 및 활동 기록에 활용 가능한 결과자료 제공",
  "공정한 디지털 채점 시스템(대회 운영 시)",
];

export default async function ReviewsPage() {
  const reviews = (await listReviews()).reverse(); // 최신순
  return (
    <>
      <PageHero
        eyebrow="REVIEWS"
        image="/hero-reviews.png"
        title="현장에서 전해주신 진행 후기"
        description="학교·기관 담당 선생님과 학생들의 목소리로 듣는 진로팡 운영 현장. 다양한 규모와 형태의 운영 사례를 확인하실 수 있습니다."
        breadcrumb={[{ label: "진행후기" }]}
      />

      <section className="container-pad py-10 lg:py-14">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="card text-center">
              <dt className="text-[12px] leading-[1.3] font-semibold uppercase tracking-[0.18em] text-ink-500">
                {h.label}
              </dt>
              <dd className="mt-3 text-xl leading-[1.3] font-extrabold text-ink-900 sm:text-2xl sm:leading-[1.2]">
                {h.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-soft-grad">
        <div className="container-pad py-10 lg:py-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="max-w-3xl">
              <p className="section-eyebrow">CASE STORIES</p>
              <h2 className="section-title mt-3">운영 사례 모음</h2>
              <p className="lead mt-4">
                초등 체험학습부터 교육청 대회 운영까지, 진로팡이 진행한 다양한
                형태의 운영 사례를 확인해 보세요.
              </p>
            </div>
            <a
              href={SITE.social.blog}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary shrink-0 sm:mt-10"
            >
              더 많은 후기 보기
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
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
          </div>
          {reviews.length === 0 ? (
            <div className="mt-10 rounded-[3px] border border-dashed border-ink-100 bg-white px-6 py-16 text-center">
              <p className="text-[14px] text-ink-600">
                아직 등록된 후기가 없습니다.
              </p>
            </div>
          ) : (
            <ReviewsList reviews={reviews} />
          )}
        </div>
      </section>

      <section className="container-pad py-10 lg:py-14">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="section-eyebrow">WHY SCHOOLS TRUST US</p>
            <h2 className="section-title mt-3">
              학교가 신뢰하는 이유,<br />
              결국 안전과 운영의 디테일
            </h2>
            <p className="lead mt-5">
              학교 담당 선생님이 안심하고 맡길 수 있도록 진로팡은 운영의
              디테일에 가장 많은 시간을 씁니다.
            </p>
          </div>
          <div className="md:col-span-6">
            <ul className="space-y-3">
              {TRUST_LIST.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-[3px] border border-ink-100 bg-white p-4"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="m5 12 5 5L20 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-[1.55] font-semibold text-ink-900">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="다음 운영의 주인공이 되어주세요"
        description="학교 행사와 체험학습 일정을 알려주시면 가장 잘 맞는 운영을 함께 준비해 드립니다."
      />
    </>
  );
}
