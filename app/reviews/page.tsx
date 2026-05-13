import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "진행후기 — 학교·기관에서 전해주신 운영 후기",
  description:
    "진로팡 미래교육 프로그램을 진행한 학교·기관의 진행 후기를 모았습니다. 초등 체험학습부터 중·고등 진로의 날, 축제 부스, 대회 운영까지 다양한 운영 사례를 확인하세요.",
  alternates: { canonical: "/reviews" },
};

const HIGHLIGHTS = [
  { value: "도서벽지 포함 전국", label: "출강 가능 지역" },
  { value: "1회 300명 이상", label: "축제 부스 동시 운영" },
  { value: "사후 결과 보고서 제공", label: "행정 자료 지원" },
  { value: "0건", label: "사후 안전 사고" },
];

const REVIEWS = [
  {
    badge: "초등 진로체험",
    title: "5-6학년 코딩 드론 미션 비행",
    body: "안전 펜스 운영 덕분에 5-6학년 60명이 두 시간 동안 사고 없이 즐겁게 비행 미션을 끝냈습니다. 강사 분들이 학생 통제와 안내까지 잘 해 주셨어요.",
    meta: "수도권 초등학교 · 60명 · 120분",
  },
  {
    badge: "중학교 진로의 날",
    title: "VR 진로직업 체험 + AI 데이터 워크숍",
    body: "VR과 워크숍을 동시 운영해 학생들이 흥미를 잃지 않고 두 가지 미래기술을 함께 경험했습니다. 워크북까지 제공해 사후 활동도 수월했습니다.",
    meta: "지방 중학교 · 180명 · 4교시 분산 운영",
  },
  {
    badge: "고등학교 캠프",
    title: "로봇 엔지니어링 캠프 (2일)",
    body: "PID 튜닝까지 깊이 있게 다뤄 주셔서 학생부에 기록할 수 있는 결과물이 나왔습니다. 진로 포트폴리오용으로 매우 만족합니다.",
    meta: "특목고 · 24명 · 2일 캠프",
  },
  {
    badge: "학교 축제",
    title: "AI 포토 + VR + 로봇 대결 부스 패키지",
    body: "회전이 빠른 부스 위주로 구성해 줄이 길게 늘어졌지만 대기 시간이 짧았어요. MC 진행 지원까지 받아 행사 분위기가 좋았습니다.",
    meta: "도심 고등학교 축제 · 800명 · 6시간",
  },
  {
    badge: "교육청 대회",
    title: "지역 코딩·로봇 경진대회 운영",
    body: "기획·요강 작성부터 심사·시상까지 모두 맡겨 행사 운영이 정말 편했습니다. 사후 보고서도 깔끔하게 정리해 주셔서 결재가 빨랐습니다.",
    meta: "교육청 주관 대회 · 참가팀 32팀",
  },
  {
    badge: "기관 행사",
    title: "지역 어린이 과학 한마당 부스 운영",
    body: "메이커 미니키트와 메타버스 진로존을 함께 운영해 어린이와 학부모 모두 즐거워했습니다. 안전 동선 분리 운영이 인상적이었습니다.",
    meta: "지자체 주관 행사 · 500명 · 4시간",
  },
];

const TRUST_LIST = [
  "출강 지역 제한 없는 전국 운영",
  "6단계 안전 운영 프로세스",
  "결재용 안전관리계획서 / 견적서 / 보고서 제공",
  "사후 결과 자료 및 사진 공유",
  "공정한 디지털 채점 시스템(대회 운영 시)",
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="REVIEWS"
        image="/hero-reviews.png"
        title="현장에서 전해주신 진행 후기"
        description="학교·기관 담당 선생님과 학생들의 목소리로 듣는 진로팡 운영 현장. 다양한 규모와 형태의 운영 사례를 확인하실 수 있습니다."
        breadcrumb={[{ label: "진행후기" }]}
      />

      <section className="py-10 lg:py-14">
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
        <div className="py-10 lg:py-14">
          <div className="max-w-3xl">
            <p className="section-eyebrow">CASE STORIES</p>
            <h2 className="section-title mt-3">운영 사례 모음</h2>
            <p className="lead mt-4">
              초등 체험학습부터 교육청 대회 운영까지, 진로팡이 진행한 다양한
              형태의 운영 사례를 확인해 보세요.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <article key={r.title} className="card">
                <span className="chip">{r.badge}</span>
                <h3 className="mt-5 text-lg leading-[1.4] font-bold text-ink-900">
                  {r.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-ink-700">
                  “{r.body}”
                </p>
                <p className="mt-5 border-t border-ink-100 pt-3 text-[12px] leading-[1.5] font-semibold text-ink-500">
                  {r.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
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
