import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import { SECONDARY, SECONDARY_FESTIVAL, SECONDARY_MAGIC } from "@/lib/programs";

export const metadata: Metadata = {
  title: "중·고등학교 미래교육 프로그램 — 진로 연계 워크숍",
  description:
    "로봇공학·자율주행·웨어러블·메타버스·IoT·생성형 AI·드론 등 중·고등학생을 위한 진로 연계 미래교육 프로그램. 진로팡이 학교 교실로 찾아갑니다.",
  alternates: { canonical: "/programs/secondary" },
};

export default function SecondaryPage() {
  return (
    <>
      <PageHero
        eyebrow="MIDDLE · HIGH SCHOOL"
        image="/hero-secondary.png"
        title="중·고등학교 미래교육 프로그램"
        description="진로 동기부여부터 학생부 활용 가능한 포트폴리오 결과물까지. 중·고등학생의 발달 단계에 맞춘 심화 체험을 운영합니다."
        breadcrumb={[{ label: "중·고등학교" }]}
      />

      <section
        id="middle"
        className="container-pad scroll-mt-16 py-10 lg:py-14"
      >
        <div>
          <p className="section-eyebrow">교육 프로그램</p>
          <h2 className="section-title mt-3">
            진로 연계 심화 워크숍 · 캠프
          </h2>
          <p className="lead mt-4 max-w-2xl">
            로봇·자율주행·웨어러블·메타버스·IoT·생성형 AI·드론까지. 중·고등학생
            대상 진로 포트폴리오와 학생부 활용이 가능한 결과물 중심 프로그램입니다.
          </p>
          <p className="mt-3 inline-flex items-start gap-2 rounded-[3px] border border-brand-100 bg-brand-50 px-3.5 py-2.5 text-[13.5px] font-medium leading-[1.55] text-brand-800">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-brand-700" aria-hidden>
              <path d="M12 8v5M12 16.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span>
              동일 프로그램이라도 학교급 및 학년 수준에 따라 난이도와 활동 내용을
              조정하여 운영합니다.
            </span>
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SECONDARY.map((p) => (
            <ProgramCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section id="festival" className="bg-soft-grad scroll-mt-16">
        <div className="container-pad py-10 lg:py-14">
          <div>
            <p className="section-eyebrow">축제 · 진로의 날 부스</p>
            <h2 className="section-title mt-3">
              중·고등 축제·진로의 날 부스 패키지
            </h2>
            <p className="lead mt-4 max-w-2xl">
              동시에 많은 학생이 빠르게 회전할 수 있도록 모듈식으로 부스를
              구성합니다. 로봇·드론·AR 스포츠·인공지능 등 다양한 부스를 자유롭게
              조합해 운영합니다.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SECONDARY_FESTIVAL.map((p) => (
              <ProgramCard key={`festival-${p.slug}`} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="magic" className="container-pad scroll-mt-16 py-10 lg:py-14">
        <div>
          <p className="section-eyebrow">과학마술공연</p>
          <h2 className="section-title mt-3">미래산업과 결합한 과학 마술쇼</h2>
          <p className="lead mt-4 max-w-2xl">
            미래산업 기술과 마술 공연을 결합하여, 학생들이 과학 원리와 상상력을
            함께 경험할 수 있는 특별한 퍼포먼스를 진행합니다.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SECONDARY_MAGIC.map((p) => (
            <ProgramCard key={`magic-${p.slug}`} p={p} />
          ))}
        </div>
      </section>

      <CTASection
        title="진로의 날 / 직업 체험의 날 운영 일정을 알려주세요"
        description="대상 학년, 인원, 운영 시간만 알려 주시면 최적의 부스·워크숍 조합을 제안드립니다."
      />
    </>
  );
}
