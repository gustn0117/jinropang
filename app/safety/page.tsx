import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "안전관리계획 — 사전 점검부터 응급 대응까지 6단계 프로세스",
  description:
    "진로팡은 사전 안전 점검, 장비 안전관리, 현장 운영, 강사 안전교육, 응급상황 대응, 종료 점검까지 6단계 안전 운영 프로세스를 구축하여 학교 행사와 체험학습을 안전하게 진행합니다.",
  alternates: { canonical: "/safety" },
};

const STEPS = [
  {
    n: "01",
    title: "사전 안전 점검 및 운영 계획 수립",
    description:
      "행사 및 교육 운영 전 사전 현장 확인과 안전 점검을 진행합니다.",
    blocks: [
      {
        h: "주요 점검 항목",
        list: [
          "운영 공간 크기 및 동선 확인",
          "전기 사용 환경 점검",
          "장비 설치 가능 여부 확인",
          "학생 이동 동선 확인",
          "비상구 및 대피 공간 확인",
          "체험별 위험 요소 사전 검토",
        ],
      },
      {
        h: "운영 계획 수립",
        list: [
          "프로그램별 운영 인원 배치",
          "학년별 난이도 조정",
          "체험 인원 분산 운영",
          "안전관리 담당자 지정",
        ],
      },
    ],
  },
  {
    n: "02",
    title: "장비 안전관리",
    description: "교육·체험 장비의 안전한 운영을 위해 사전 점검 후 운영합니다.",
    blocks: [
      {
        h: "관리 항목",
        list: [
          "전원 및 케이블 상태 확인",
          "장비 파손 여부 확인",
          "배터리 상태 점검",
          "로봇 및 센서 장비 정상 작동 확인",
          "체험 부스 고정 상태 확인",
        ],
      },
      {
        h: "전기 안전관리",
        list: [
          "멀티탭 과부하 방지",
          "누전차단기 사용",
          "전선 커버 및 정리 운영",
          "학생 접근 제한 구역 설정",
        ],
      },
    ],
  },
  {
    n: "03",
    title: "현장 운영 안전관리",
    description: "운영 당일 안전관리 담당자를 지정하여 현장을 운영합니다.",
    blocks: [
      {
        h: "운영 방식",
        list: [
          "체험별 담당 강사 배치",
          "학생 대기 동선 분리",
          "체험 인원 제한 운영",
          "위험 구역 접근 통제",
          "장비 주변 안전거리 확보",
        ],
      },
      {
        h: "학생 안전관리",
        list: [
          "체험 전 안전교육 진행",
          "장비 사용 방법 안내",
          "뛰거나 밀치는 행동 통제",
          "저학년 우선 보호 운영",
        ],
      },
    ],
  },
  {
    n: "04",
    title: "강사 및 운영인력 안전교육",
    description:
      "모든 운영 인력은 사전 운영교육 및 안전교육 후 현장에 투입됩니다.",
    blocks: [
      {
        h: "교육 내용",
        list: [
          "장비 사용 방법 숙지",
          "학생 응대 및 통제 방법",
          "응급 상황 대응 절차",
          "전기 및 장비 사고 대응",
          "비상 연락 체계 확인",
        ],
      },
    ],
  },
  {
    n: "05",
    title: "응급상황 대응 프로세스",
    description: "현장 내 응급상황 발생 시 신속 대응 체계를 운영합니다.",
    blocks: [
      {
        h: "대응 절차",
        list: [
          "현장 즉시 통제",
          "학생 안전 확보",
          "학교 담당자 즉시 공유",
          "응급조치 진행",
          "필요 시 119 신고",
          "사고 내용 기록 및 보고",
        ],
      },
      {
        h: "비상 연락 체계",
        list: [
          "학교 담당자",
          "현장 운영 책임자",
          "응급기관(119)",
          "보호자 연락 체계 연계",
        ],
      },
    ],
  },
  {
    n: "06",
    title: "운영 종료 후 안전 점검",
    description: "행사 종료 후 현장 및 장비 안전 상태를 최종 확인합니다.",
    blocks: [
      {
        h: "점검 항목",
        list: [
          "장비 전원 차단 확인",
          "케이블 및 장비 회수",
          "파손 여부 확인",
          "현장 정리 상태 확인",
          "분실물 확인",
        ],
      },
    ],
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="SAFETY MANAGEMENT"
        image="/hero-safety.png"
        title="안전이 가장 먼저, 6단계 안전 운영 프로세스"
        description="진로팡은 학교·기관 대상 교육 및 체험 운영 경험을 기반으로 프로그램별 위험요소 분석, 운영인력 안전교육, 장비 점검, 응급 대응 체계를 포함한 안전운영 프로세스를 구축하여 운영하고 있습니다."
        breadcrumb={[{ label: "안전관리계획" }]}
      />

      <section className="container-pad py-20 lg:py-28">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <a
              key={s.n}
              href={`#step-${s.n}`}
              className="card flex h-full flex-col"
            >
              <span className="text-[44px] leading-[1] font-black text-brand-100">
                {s.n}
              </span>
              <h2 className="mt-3 text-[16px] leading-[1.4] font-bold text-ink-900">
                {s.title}
              </h2>
              <p className="mt-2 text-[13px] leading-[1.7] text-ink-700">
                {s.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] leading-[1.3] font-semibold text-brand-700">
                상세 보기 →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-soft-grad">
        <div className="container-pad py-20 lg:py-28">
          {STEPS.map((s, idx) => (
            <div
              key={s.n}
              id={`step-${s.n}`}
              className={`scroll-mt-24 ${idx > 0 ? "mt-16 border-t border-ink-100 pt-16" : ""}`}
            >
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="text-[44px] leading-[1] font-black text-brand-100">
                    {s.n}
                  </span>
                  <h2 className="mt-2 text-2xl leading-[1.3] font-extrabold text-ink-900 sm:text-3xl sm:leading-[1.25]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.8] text-ink-700">
                    {s.description}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {s.blocks.map((b) => (
                      <div key={b.h} className="card">
                        <h3 className="text-[14px] leading-[1.4] font-bold text-ink-900">
                          {b.h}
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {b.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-[13px] leading-[1.75] text-ink-700"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="mt-0.5 shrink-0 text-brand-700"
                                aria-hidden
                              >
                                <path
                                  d="m5 12 5 5L20 7"
                                  stroke="currentColor"
                                  strokeWidth="2.4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pad py-20 lg:py-28">
        <div className="rounded-[3px] border border-ink-100 bg-white p-8 sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="section-eyebrow">결재 · 내부 검토 자료</p>
              <h2 className="mt-3 text-2xl leading-[1.3] font-extrabold text-ink-900 sm:text-3xl sm:leading-[1.25]">
                안전관리계획서 / 운영계획서 제공
              </h2>
              <p className="lead mt-4">
                결재용·내부 검토용 자료로 활용하실 수 있도록 안전관리계획서,
                프로그램별 운영계획서, 견적서를 신청 시 함께 보내드립니다.
              </p>
            </div>
            <div className="md:col-span-4">
              <a href="/contact" className="btn-primary w-full">
                자료 요청 신청
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="안전한 운영, 진로팡과 함께"
        description="6단계 안전 운영 프로세스로 학교 일정에 맞춰 안전하게 운영합니다. 학교 담당자와 상시 연락 체계로 진행합니다."
      />
    </>
  );
}
