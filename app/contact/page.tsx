import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "신청서 작성 / 상담 문의",
  description:
    "진로팡에 미래교육 체험 프로그램, 학교 축제 부스, 대회 운영 등을 의뢰하기 위한 무료 견적·상담 신청서입니다. 평일 30분 이내 1차 회신 드립니다.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="무료 견적 · 상담 신청"
        description="학교 일정, 대상 학년, 운영 목적을 알려주시면 담당 매니저가 빠르게 확인하여 안내드립니다. 회사 소개서·견적서·안전관리계획서를 함께 보내드립니다."
        breadcrumb={[{ label: "신청서 작성" }]}
      />

      <section className="container-pad py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-[3px] border border-ink-100 bg-white p-6 sm:p-8">
              <p className="section-eyebrow">FORM</p>
              <h2 className="mt-2 text-2xl leading-[1.3] font-extrabold text-ink-900 sm:text-3xl sm:leading-[1.25]">
                신청서 작성
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-ink-700">
                * 표시는 필수 항목입니다. 제출 시 메일 앱이 열리고, 내용이
                자동으로 채워집니다.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-4">
              <div className="card">
                <p className="section-eyebrow">대표 채널</p>
                <h3 className="mt-2 text-lg leading-[1.4] font-bold text-ink-900">
                  더 빠르게 연결되기
                </h3>
                <ul className="mt-4 space-y-3 text-[14px] leading-[1.6] text-ink-700">
                  <li className="flex items-center justify-between border-b border-ink-100 pb-3">
                    <span className="font-semibold text-ink-500">전화</span>
                    <a
                      href={`tel:${SITE.phoneE164}`}
                      className="text-[15px] leading-[1.3] font-bold text-brand-700"
                    >
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="flex items-center justify-between border-b border-ink-100 pb-3">
                    <span className="font-semibold text-ink-500">카카오톡</span>
                    <a
                      href={SITE.kakaoChannel}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[15px] leading-[1.3] font-bold text-brand-700"
                    >
                      1:1 채널
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-ink-500">이메일</span>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-[15px] leading-[1.3] font-bold text-brand-700"
                    >
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card">
                <p className="section-eyebrow">자료 안내</p>
                <h3 className="mt-2 text-lg leading-[1.4] font-bold text-ink-900">
                  결재용·내부 검토 자료
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-ink-700">
                  안전관리계획서, 프로그램별 운영계획서, 견적서 등 결재·내부
                  검토에 필요한 자료를 신청 시 함께 보내드립니다.
                </p>
              </div>

              <div className="card">
                <p className="section-eyebrow">운영 안내</p>
                <h3 className="mt-2 text-lg leading-[1.4] font-bold text-ink-900">
                  평일 30분 이내 1차 회신
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-ink-700">
                  업무 시간은 평일 09:00 - 18:00 입니다. 그 외 시간 문의는
                  카카오톡 채널로 남겨주시면 다음 영업일에 빠르게 안내드립니다.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
