import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import { EVENT_PROGRAMS } from "@/lib/programs";

export const metadata: Metadata = {
  title: "행사부스 운영 — 축제행사부스·대회 운영",
  description:
    "4족보행 로봇·드론·AR 사격·메타버스·인공지능 보드게임 등 인기 축제행사부스를 모듈식으로 운영합니다. 대회 기획·심사·시상까지 전 과정을 지원합니다.",
  alternates: { canonical: "/programs/event" },
};

const OPERATION = [
  {
    title: "사전 협의",
    description: "행사 규모·예산·운영 시간을 확인하고 부스 조합 시안을 제안합니다.",
  },
  {
    title: "현장 사전 점검",
    description: "공간 크기·전기·동선·비상구를 점검하고 안전관리 계획을 함께 수립합니다.",
  },
  {
    title: "설치 · 리허설",
    description: "장비를 안전하게 설치하고 강사 리허설로 회전 속도를 사전 검증합니다.",
  },
  {
    title: "운영 · 사후 리포트",
    description: "운영 후 참여 수·만족도·사진 등 결과 자료를 학교에 공유드립니다.",
  },
];

export default function EventPage() {
  return (
    <>
      <PageHero
        eyebrow="EVENTS & BOOTHS"
        image="/hero-event.png"
        title="축제·행사 부스, 대회 운영까지"
        description="동시에 많은 학생이 즐기는 부스부터 진지한 경진대회까지. 학교 행사의 색깔에 맞춘 모듈식 운영으로 안전하게 진행합니다."
        breadcrumb={[{ label: "행사부스 운영" }]}
      />

      <section id="booths" className="container-pad py-10 lg:py-14 scroll-mt-16">
        <div className="max-w-3xl">
          <p className="section-eyebrow">축제행사부스</p>
          <h2 className="section-title mt-3">
            축제·진로의 날 부스, 모듈식 조합
          </h2>
          <p className="lead mt-5">
            행사 규모·예산·관심도에 맞춰 인기 부스를 자유롭게 조합해 운영합니다.
            각 부스는 회전 속도, 안전 거리, 전기 사용량까지 사전에 표준화되어
            있어 학교 행사장에 최적화되어 있습니다.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {EVENT_PROGRAMS.map((p) => (
            <ProgramCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section id="operation" className="scroll-mt-16 bg-soft-grad">
        <div className="container-pad py-12 lg:py-16">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="section-eyebrow">OPERATION FLOW</p>
              <h2 className="section-title mt-3">
                행사 운영은<br />
                네 단계로 깔끔하게
              </h2>
              <p className="lead mt-5">
                담당 선생님의 행정 부담을 줄이고, 학생들이 안전하고 즐겁게
                참여할 수 있도록 표준화된 운영 절차를 갖추고 있습니다.
              </p>
            </div>
            <div className="md:col-span-7">
              <ol className="grid gap-4 sm:grid-cols-2">
                {OPERATION.map((o, i) => (
                  <li key={o.title} className="card">
                    <span className="text-[44px] leading-[1] font-black text-brand-100">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[16px] leading-[1.4] font-bold text-ink-900">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.75] text-ink-700">
                      {o.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="competition" className="container-pad py-12 lg:py-16 scroll-mt-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="section-eyebrow">COMPETITION</p>
            <h2 className="section-title mt-3">
              대회·경진대회<br />
              기획부터 시상까지
            </h2>
            <p className="lead mt-5">
              교육청·학교 단위의 코딩·로봇·AI 경진대회를 기획, 심사, 운영,
              시상까지 일괄 진행합니다. 공정한 채점 시스템과 사후 보고서까지
              깔끔하게 제공해 드립니다.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "대회 기획·요강", d: "주제, 대상, 일정, 시상 기준을 함께 설계합니다." },
                { t: "심사·채점 시스템", d: "투명한 채점 양식과 디지털 채점으로 공정성을 확보합니다." },
                { t: "현장 운영", d: "참가 접수·진행·시상까지 안전관리 체계 안에서 진행합니다." },
                { t: "사후 보고서", d: "참가 수, 결과 데이터, 사진 등 정리된 보고서를 제공합니다." },
              ].map((x) => (
                <div key={x.t} className="card">
                  <h3 className="text-[16px] leading-[1.4] font-bold text-ink-900">
                    {x.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.75] text-ink-700">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="학교 축제·진로의 날 일정을 알려주세요"
        description="규모와 시간만 알려주시면 인기 부스 조합과 견적을 빠르게 안내드립니다."
      />
    </>
  );
}
