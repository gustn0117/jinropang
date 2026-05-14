import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import { SECONDARY } from "@/lib/programs";

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
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SECONDARY.map((p) => (
            <ProgramCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section
        id="festival"
        className="bg-soft-grad scroll-mt-16"
      >
        <div className="container-pad py-10 lg:py-14">
          <div>
            <p className="section-eyebrow">축제부스</p>
            <h2 className="section-title mt-3">축제 · 진로의 날 부스 패키지</h2>
            <p className="lead mt-4 max-w-2xl">
              동시에 많은 학생이 빠르게 회전할 수 있도록 모듈식으로 부스를
              구성합니다. AI 포토·VR·로봇 대결·드론 미션 등 인기 부스 6종을
              자유롭게 조합해 운영합니다.
            </p>
            <Link
              href="/programs/event"
              className="btn-secondary mt-6 inline-flex"
            >
              부스 패키지 자세히 보기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="진로의 날 / 직업 체험의 날 운영 일정을 알려주세요"
        description="대상 학년, 인원, 운영 시간만 알려 주시면 최적의 부스·워크숍 조합을 제안드립니다."
      />
    </>
  );
}
