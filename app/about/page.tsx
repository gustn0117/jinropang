import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "진로팡 소개 — 찾아가는 미래교육 진로체험 전문기관",
  description:
    "진로팡은 학교·기관 대상 로봇·코딩·AI·메타버스 등 미래기술 체험을 운영하는 진로체험 전문기관입니다. 현장 중심의 체험형 교육 콘텐츠와 안전한 운영 체계를 갖추고 있습니다.",
  alternates: { canonical: "/about" },
};

const PARAGRAPHS = [
  `학교와 기관에서 프로그램을 준비하다 보면 아이들에게 즐거운 경험을 주는 것만큼, 그 시간이 의미 있는 배움으로 이어지길 바라는 마음이 크다는 것을 느끼게 됩니다.`,
  `학생들이 단순히 보고 지나가는 체험이 아니라 직접 만지고, 움직이고, 고민하고, 함께 해결해 보며 자연스럽게 배우고 성장하는 시간. 진로팡은 바로 그런 교육을 만들고 싶었습니다.`,
  `로봇, 코딩, AI, 메타버스 등 빠르게 변화하는 미래 기술 속에서 아이들이 어렵고 낯설게 느끼기보다 흥미롭게 경험하며 스스로 이해할 수 있도록 현장 중심의 체험형 교육 콘텐츠를 운영하고 있습니다.`,
  `또한 학교 현장은 늘 다르다는 것을 알고 있습니다. 학년과 분위기, 공간과 시간, 그리고 담당 선생님의 고민까지. 그래서 진로팡은 단순히 프로그램을 진행하는 것을 넘어 학교와 함께 고민하고, 함께 준비하며 현장에 가장 잘 맞는 운영을 만들기 위해 노력합니다.`,
];

const STATS = [
  { label: "출강 가능 지역", value: "전국" },
  { label: "안전 운영 프로세스", value: "6단계" },
  { label: "핵심 분야", value: "AI · 로봇 · 메타버스" },
  { label: "1차 회신", value: "평일 30분 이내" },
];

const COMMITMENT = [
  {
    title: "아이들에게는",
    description:
      "새로운 가능성과 즐거운 배움. 어렵게 느껴지는 미래 기술을 흥미롭게 경험할 수 있도록.",
  },
  {
    title: "선생님과 담당자에게는",
    description:
      "믿고 맡길 수 있는 안정적인 운영. 안전관리부터 결과 자료까지 행정 부담을 덜어드립니다.",
  },
  {
    title: "학교와 지역사회에는",
    description:
      "의미 있는 교육 경험. 학생들이 스스로 꿈과 가능성을 발견할 수 있는 따뜻한 미래교육을 전합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT JINROPANG"
        title="찾아가는 미래교육, 진로팡입니다."
        description="진로팡은 학생들이 미래를 조금 더 가까이 경험하고, 스스로 꿈과 가능성을 발견할 수 있도록 따뜻하고 의미 있는 교육을 만들어가는 진로체험 전문기관입니다."
        breadcrumb={[{ label: "진로팡 소개" }]}
      />

      <section className="container-pad py-24 lg:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="section-eyebrow">OUR STORY</p>
            <h2 className="section-title mt-3">
              아이들이 직접 만지고 움직이며<br />
              배우는 시간을 만듭니다.
            </h2>
            <p className="lead mt-6">
              로봇·코딩·AI·메타버스. 빠르게 변화하는 미래 기술을 어렵고 낯설게
              느끼지 않도록, 진로팡은 학교 현장에서 가장 잘 통하는 체험형
              콘텐츠를 운영합니다.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-5">
              {PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[1.9] text-ink-700 sm:text-[16px] sm:leading-[1.9]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <dl className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="card text-center">
              <dt className="text-[12px] leading-[1.3] font-semibold uppercase tracking-[0.18em] text-ink-500">
                {s.label}
              </dt>
              <dd className="mt-3 text-2xl leading-[1.2] font-extrabold text-ink-900 sm:text-3xl sm:leading-[1.2]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="commitment" className="scroll-mt-16 bg-soft-grad">
        <div className="container-pad py-24 lg:py-32">
          <p className="section-eyebrow">OUR COMMITMENT</p>
          <h2 className="section-title mt-3">우리가 약속드리는 가치</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {COMMITMENT.map((c, i) => (
              <div key={c.title} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] bg-brand-50 text-[14px] leading-[1.2] font-extrabold text-brand-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg leading-[1.4] font-bold text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-ink-700">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container-pad py-24 lg:py-32 scroll-mt-16">
        <div className="rounded-[3px] border border-ink-100 bg-white p-8 sm:p-12">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="section-eyebrow">CONTACT</p>
              <h2 className="section-title mt-3">함께 만들고 싶은 미래교육이 있다면</h2>
              <p className="lead mt-5">
                학교 일정과 대상 학년, 운영 목적을 알려 주시면 담당자가 빠르게
                확인하여 안내드립니다. 회사 소개서와 안전관리계획서, 견적서를 함께
                준비해 드립니다.
              </p>
            </div>
            <div className="md:col-span-5">
              <ul className="space-y-3 text-[14px] leading-[1.6] text-ink-700">
                <li className="flex items-center justify-between border-b border-ink-100 py-3">
                  <span className="font-semibold text-ink-500">대표번호</span>
                  <a
                    href={`tel:${SITE.phoneE164}`}
                    className="text-[15px] leading-[1.4] font-bold text-brand-700 hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center justify-between border-b border-ink-100 py-3">
                  <span className="font-semibold text-ink-500">카카오톡</span>
                  <a
                    href={SITE.kakaoChannel}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] leading-[1.4] font-bold text-brand-700 hover:underline"
                  >
                    1:1 채널 문의
                  </a>
                </li>
                <li className="flex items-center justify-between py-3">
                  <span className="font-semibold text-ink-500">자료</span>
                  <a
                    href="/assets/jinropang-brochure.pdf"
                    className="text-[15px] leading-[1.4] font-bold text-brand-700 hover:underline"
                  >
                    회사 소개서 PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="진로팡과 함께 의미 있는 교육 경험을 만들어 보세요"
        description="학생들이 미래를 조금 더 가까이 경험할 수 있도록, 따뜻하고 의미 있는 시간을 함께 준비합니다."
      />
    </>
  );
}
