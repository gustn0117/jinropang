import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import QnaSections from "./QnaSections";
import { listQna } from "@/lib/qna";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Q&A — 자주 묻는 질문",
  description:
    "초등·중고등·행사부스 프로그램 관련 자주 묻는 질문과 답변을 카테고리별로 안내합니다.",
  alternates: { canonical: "/about/qna" },
};

export default async function QnaPage() {
  const list = await listQna();
  list.reverse(); // 최신 등록이 위로
  return (
    <>
      <PageHero
        eyebrow="Q&A"
        title="자주 묻는 질문"
        description="프로그램 운영·견적·안전 관리 등 자주 받는 질문을 카테고리별로 정리했습니다. 원하는 답변이 없으시면 1:1로 빠르게 안내드립니다."
        breadcrumb={[
          { label: "진로팡 소개", href: "/about" },
          { label: "Q&A" },
        ]}
      />

      <QnaSections list={list} />

      <CTASection
        title="원하시는 답변이 없으신가요?"
        description="대상·인원·일정만 알려 주시면 가장 잘 맞는 구성을 제안드리고, 안전관리계획서까지 함께 안내드립니다."
      />
    </>
  );
}
