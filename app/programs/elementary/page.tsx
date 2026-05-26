import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import { ELEMENTARY_GROUPS } from "@/lib/programs";

export const metadata: Metadata = {
  title: "초등학교 미래교육 프로그램 — 학년별 맞춤 체험",
  description:
    "초등 1-2학년 입문부터 3-6학년 AI·코딩·메이커, 그리고 체험학습 패키지까지. 진로팡의 초등 전용 미래교육 체험 프로그램을 소개합니다.",
  alternates: { canonical: "/programs/elementary" },
};

const GROUPS = [
  {
    id: "g12",
    label: "1-2학년",
    title: "처음 만나는 미래 기술, 즐겁게 입문",
    description:
      "글보다 그림이 익숙한 저학년에게 직관적인 조작과 짧은 호흡의 미션 중심으로 구성합니다.",
    items: ELEMENTARY_GROUPS.g12,
  },
  {
    id: "g36",
    label: "3-6학년",
    title: "AI · 코딩 · 메이커, 직접 만들어 보기",
    description:
      "스스로 데이터를 만들고, 센서·드론·로봇으로 결과물을 완성하는 단계로 발전합니다.",
    items: ELEMENTARY_GROUPS.g36,
  },
  {
    id: "trip",
    label: "체험학습 패키지",
    title: "하루 만에 즐기는 미래교육 패키지",
    description:
      "여러 프로그램을 순환식으로 운영해, 한 학교에서 다양한 미래기술을 만나는 체험학습형 패키지입니다.",
    items: ELEMENTARY_GROUPS.trip,
  },
  {
    id: "science",
    label: "과학체험부스",
    title: "직접 만들고 관찰하는 과학 원리 체험",
    description:
      "빛·자기력·공기 흐름·구조의 균형 등 과학 원리를 직접 만들고 관찰하며 체험할 수 있는 부스 프로그램입니다.",
    items: ELEMENTARY_GROUPS.science,
  },
  {
    id: "magic",
    label: "과학마술공연",
    title: "마술로 만나는 신기한 과학 원리",
    description:
      "다양한 과학 원리를 마술 공연 형태로 풀어내며, 학생들의 눈높이에 맞춰 흥미롭게 진행하는 공연 프로그램입니다.",
    items: ELEMENTARY_GROUPS.magic,
  },
];

export default function ElementaryPage() {
  return (
    <>
      <PageHero
        eyebrow="ELEMENTARY"
        image="/hero-elementary.png"
        title="초등학교 미래교육 프로그램"
        description="학년별 발달 단계와 안전 기준에 맞춰 설계한 로봇·코딩·AI·메타버스 체험. 학교 교실로 직접 찾아갑니다."
        breadcrumb={[{ label: "초등학교" }]}
      />

      <section className="container-pad py-10 lg:py-14">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
                <p className="mt-2 text-[13px] leading-[1.7] text-ink-700">
                  {g.description}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-[13px] leading-[1.3] font-semibold text-brand-700">
                프로그램 {g.items.length}개 보기
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
            </a>
          ))}
        </div>
      </section>

      {GROUPS.map((g, idx) => (
        <section
          key={g.id}
          id={g.id}
          className={
            idx % 2 === 0
              ? "container-pad scroll-mt-16 py-10 lg:py-14"
              : "bg-soft-grad scroll-mt-16"
          }
        >
          <div className={idx % 2 === 0 ? "" : "container-pad py-10 lg:py-14"}>
            <div>
              <p className="section-eyebrow">{g.label}</p>
              <h2 className="section-title mt-3">{g.title}</h2>
              <p className="lead mt-4 max-w-2xl">{g.description}</p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {g.items.map((p) => (
                <ProgramCard key={`${p.group}-${p.slug}`} p={p} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="초등 학교 일정에 맞춘 맞춤 견적이 필요하신가요?"
        description="학년·인원·시간·예산만 알려 주시면 가장 잘 맞는 구성을 제안드립니다. 안전관리계획서도 함께 보내드립니다."
      />
    </>
  );
}
