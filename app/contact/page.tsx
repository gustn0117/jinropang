import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

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

      <section className="py-10 lg:py-14">
        <div className="rounded-[3px] border border-ink-100 bg-white p-6 sm:p-8">
          <p className="section-eyebrow">FORM</p>
          <h2 className="mt-2 text-[22px] font-bold leading-[1.3] text-ink-900 sm:text-[26px]">
            신청서 작성
          </h2>
          <p className="mt-3 text-[14px] leading-[1.7] text-ink-700">
            * 표시는 필수 항목입니다. 제출 시 메일 앱이 열리고, 내용이 자동으로
            채워집니다. 빠른 연락은 오른쪽 채널을 이용해주세요.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
