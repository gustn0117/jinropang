import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import { SECONDARY } from "@/lib/programs";

export const metadata: Metadata = {
  title: "중·고등학교 미래교육 프로그램 — 진로 연계 워크숍",
  description:
    "중학교 AI 데이터 워크숍, VR 진로직업 체험, 고등학교 로봇 엔지니어링·생성형 AI 캠프, 그리고 축제·진로의 날 부스 패키지까지. 진로팡의 중·고등 전용 프로그램을 만나보세요.",
  alternates: { canonical: "/programs/secondary" },
};

const GROUPS = [
  {
    id: "middle",
    label: "중학교",
    title: "흥미와 동기를 함께 키우는 워크숍",
    description:
      "AI 데이터 리터러시, VR 진로직업 체험, 진로 탐색형 메타버스까지. 학생들이 스스로 탐색하고 표현하는 시간을 만듭니다.",
  },
  {
    id: "high",
    label: "고등학교",
    title: "진로 포트폴리오로 이어지는 심화 캠프",
    description:
      "제어공학·AI·로봇 엔지니어링·프롬프트 등 학생부 활용이 가능한 결과물을 함께 만들어가는 캠프형 프로그램입니다.",
  },
  {
    id: "festival",
    label: "축제부스",
    title: "축제·진로의 날 부스 패키지",
    description:
      "동시에 많은 학생이 빠르게 회전할 수 있도록 모듈식으로 부스를 구성합니다. 스탬프 운영과 MC 지원도 가능합니다.",
  },
];

export default function SecondaryPage() {
  return (
    <>
      <PageHero
        eyebrow="MIDDLE · HIGH SCHOOL"
        title="중·고등학교 미래교육 프로그램"
        description="진로 동기부여부터 학생부 활용 가능한 포트폴리오 결과물까지. 중·고등학생의 발달 단계에 맞춘 심화 체험을 운영합니다."
        breadcrumb={[{ label: "중·고등학교" }]}
      />

      <section className="container-pad py-20 lg:py-28">
        <div className="grid gap-4 md:grid-cols-3">
          {GROUPS.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="card flex h-full flex-col justify-between"
            >
              <div>
                <span className="chip">{g.label}</span>
                <h2 className="mt-4 text-lg leading-[1.4] font-bold text-ink-900">
                  {g.title}
                </h2>
                <p className="mt-2 text-[13px] leading-[1.7] text-ink-500">
                  {g.description}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-[13px] leading-[1.3] font-semibold text-brand-700">
                프로그램 보기 →
              </span>
            </a>
          ))}
        </div>
      </section>

      {GROUPS.map((g, idx) => {
        const items = SECONDARY.filter((p) => {
          if (g.id === "middle") return p.tag === "중학교";
          if (g.id === "high") return p.tag === "고등학교";
          return p.tag === "축제부스";
        });
        return (
          <section
            key={g.id}
            id={g.id}
            className={idx % 2 === 0 ? "container-pad py-20 lg:py-28" : "bg-soft-grad"}
          >
            <div className={idx % 2 === 0 ? "" : "container-pad py-20 lg:py-28"}>
              <div>
                <p className="section-eyebrow">{g.label}</p>
                <h2 className="section-title mt-3">{g.title}</h2>
                <p className="lead mt-4 max-w-2xl">{g.description}</p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProgramCard key={p.slug} p={p} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="진로의 날 / 직업 체험의 날 운영 일정을 알려주세요"
        description="대상 학년, 인원, 운영 시간만 알려 주시면 최적의 부스·워크숍 조합을 제안드립니다."
      />
    </>
  );
}
