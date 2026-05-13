import Link from "next/link";
import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.brandFull} | 학교·기관 출강 로봇·코딩·AI·메타버스 체험`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

const SERVICES = [
  {
    href: "/programs/elementary",
    badge: "초등학교",
    title: "학교로 찾아가는 미래교육",
    description:
      "1-2학년 입문부터 5-6학년 심화까지, 학년별 난이도에 맞춘 로봇·AI·메타버스 체험을 학교 교실로 직접 찾아가서 운영합니다.",
    points: ["블록 코딩 입문", "AI 비전 인식", "메타버스 진로 탐색"],
  },
  {
    href: "/programs/secondary",
    badge: "중·고등학교",
    title: "학교로 찾아가는 체험학습",
    description:
      "데이터·AI·로봇 엔지니어링·VR 진로직업까지. 진로 포트폴리오에 활용 가능한 결과물 중심 워크숍을 운영합니다.",
    points: ["AI 데이터 워크숍", "VR 진로직업", "생성형 AI 캠프"],
  },
  {
    href: "/programs/event",
    badge: "축제 · 행사",
    title: "축제·행사 체험부스",
    description:
      "AI 포토 부스·VR 존·로봇 대결·드론 미션 등 인기 부스를 모듈식으로 조합하여 학교 축제와 진로의 날을 운영합니다.",
    points: ["부스 모듈 조합", "MC·진행 지원", "스탬프 운영"],
  },
  {
    href: "/programs/event#competition",
    badge: "대회 운영",
    title: "대회 · 경진대회 운영",
    description:
      "교육청·학교 단위 코딩·로봇 경진대회 기획, 심사, 운영, 시상까지 전 과정을 안전관리 체계 안에서 진행합니다.",
    points: ["기획·심사·운영 일괄", "공정한 채점 시스템", "사후 보고서 제공"],
  },
];

const VALUES = [
  {
    title: "현장 중심의 체험형 콘텐츠",
    description:
      "보고 지나가는 체험이 아니라 직접 만지고 움직이고 해결하는 체험. 모든 콘텐츠를 학교 현장 운영 기준으로 설계합니다.",
  },
  {
    title: "학교와 함께 준비하는 운영",
    description:
      "학년·분위기·공간·시간, 그리고 담당 선생님의 고민까지 반영해 현장에 가장 잘 맞는 운영을 함께 만듭니다.",
  },
  {
    title: "안전이 가장 먼저인 체계",
    description:
      "사전 점검부터 장비·전기 안전관리, 강사 사전 교육, 응급 대응까지 6단계 안전 운영 프로세스를 갖추고 있습니다.",
  },
  {
    title: "행정 부담을 줄이는 협업",
    description:
      "기안용 자료, 안전관리계획서, 결과 보고서 등 학교 내부 검토와 제출에 필요한 자료를 함께 준비해 드립니다.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "신청서 / 전화 문의",
    description:
      "학교 일정, 대상 학년, 운영 목적을 알려 주시면 담당 매니저가 30분 이내 1차 회신을 드립니다.",
  },
  {
    n: "02",
    title: "맞춤 프로그램 제안",
    description:
      "예산·인원·시간에 맞춰 프로그램과 부스 구성을 제안하고 견적과 운영 시안을 정리해 드립니다.",
  },
  {
    n: "03",
    title: "사전 안전 점검",
    description:
      "운영 공간, 전기, 동선, 비상구 등 현장 환경을 사전에 점검하고 안전관리 계획을 수립합니다.",
  },
  {
    n: "04",
    title: "현장 운영 · 결과 공유",
    description:
      "담당 강사·운영 인력이 안전교육 후 투입되어 진행하고, 종료 후 결과 자료를 공유 드립니다.",
  },
];

const FAQ = [
  {
    q: "전국 어디든 출강이 가능한가요?",
    a: "네. 진로팡은 전국 학교·기관 출강 체계로 운영하고 있으며, 도서 산간 지역도 사전 협의 후 운영이 가능합니다.",
  },
  {
    q: "한 번에 몇 명까지 체험할 수 있나요?",
    a: "프로그램에 따라 회당 16-30명 기준으로 운영하며, 체험학습·축제 부스의 경우 동시 운영으로 300명 이상까지 진행한 사례가 있습니다.",
  },
  {
    q: "안전 사고가 걱정되는데, 대비책이 있나요?",
    a: "사전 현장 점검, 장비·전기 안전관리, 강사 사전 교육, 응급 상황 대응 프로세스 등 6단계 안전 운영 체계를 갖추고 있으며, 학교 담당자와 비상 연락 체계를 함께 운영합니다.",
  },
  {
    q: "내부 결재용 자료가 필요해요. 받을 수 있나요?",
    a: "회사 소개서, 프로그램별 운영 계획서, 안전관리계획서, 견적서 등 결재·내부 검토에 필요한 자료를 PDF로 제공해 드립니다.",
  },
];

export default function HomePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "진로팡 주요 서비스",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${SITE.url}${s.href}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HomeHero />

      {/* Trust strip */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-pad grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "교육청·학교 출강", value: "전국" },
            { label: "안전운영 체계", value: "6단계 프로세스" },
            { label: "대표번호", value: SITE.phone },
            { label: "1:1 카톡 채널", value: "실시간 문의" },
          ].map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-between rounded-2xl border border-ink-100 bg-soft-grad px-5 py-4"
            >
              <span className="text-[12px] leading-[1.3] font-semibold uppercase tracking-[0.15em] text-ink-500">
                {t.label}
              </span>
              <span className="text-[15px] leading-[1.3] font-extrabold text-ink-900">
                {t.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-pad py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">SERVICES</p>
          <h2 className="section-title mt-3">
            한 번의 의뢰로 끝나는<br className="hidden sm:block" />
            <span className="text-brand-700">학교 미래교육 운영의 모든 것</span>
          </h2>
          <p className="lead mt-5">
            교실 수업부터 체험학습, 축제 부스, 대회 운영까지. 학교가 한 곳에서
            가장 신뢰하고 맡길 수 있도록 설계된 패키지입니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="card group block">
              <div className="flex items-center justify-between">
                <span className="chip">{s.badge}</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="mt-5 text-xl leading-[1.35] font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.75] text-ink-500">
                {s.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-ink-100 px-2.5 py-1 text-[12px] leading-[1.3] font-medium text-ink-700"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-soft-grad">
        <div className="container-pad grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="section-eyebrow">WHY JINROPANG</p>
            <h2 className="section-title mt-3">
              학교가 신뢰할 수 있는<br />
              미래교육 운영 파트너
            </h2>
            <p className="lead mt-5">
              아이들에게는 새로운 가능성과 즐거운 배움을, 선생님과 담당자에게는
              믿고 맡길 수 있는 안정적인 운영을 약속합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Link href="/about" className="btn-secondary">
                진로팡 소개 자세히 보기
              </Link>
              <Link href="/safety" className="btn-ghost">
                안전관리계획 →
              </Link>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <div key={v.title} className="card">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-[14px] leading-[1.2] font-extrabold text-brand-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[16px] leading-[1.4] font-bold text-ink-900">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.75] text-ink-500">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-pad py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">HOW IT WORKS</p>
          <h2 className="section-title mt-3">신청부터 운영까지, 단 4단계</h2>
          <p className="lead mt-5">
            바쁜 학교 일정에 맞춰 준비 부담을 줄이고, 핵심 협의만 빠르게
            진행하도록 설계된 운영 프로세스입니다.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <li
              key={p.n}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 transition hover:border-brand-200 hover:shadow-soft"
            >
              <span className="text-[44px] leading-[1] font-black text-brand-100">
                {p.n}
              </span>
              <h3 className="mt-3 text-[16px] leading-[1.4] font-bold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.75] text-ink-500">
                {p.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="bg-soft-grad">
        <div className="container-pad py-20">
          <div className="max-w-3xl">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title mt-3">
              담당 선생님이 가장 많이 묻는 질문
            </h2>
          </div>
          <div className="mt-10 grid gap-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-ink-100 bg-white p-5 transition hover:border-brand-200"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-[15px] leading-[1.55] font-bold text-ink-900 sm:text-[16px]">
                    Q. {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[14px] leading-[1.8] text-ink-500">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
