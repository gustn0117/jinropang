import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/ProgramDetailView";
import { SECONDARY, findSecondaryProgram } from "@/lib/programs";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return SECONDARY.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = findSecondaryProgram(slug);
  if (!p) return { title: "프로그램을 찾을 수 없습니다" };
  return {
    title: `${p.title} — 중·고등 미래교육 프로그램`,
    description: p.description,
    alternates: { canonical: `/programs/secondary/${slug}` },
  };
}

export default async function SecondaryProgramDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = findSecondaryProgram(slug);
  if (!p) notFound();
  return (
    <ProgramDetailView
      program={p}
      eyebrow="MIDDLE · HIGH SCHOOL"
      breadcrumb={[
        { label: "중·고등학교", href: "/programs/secondary" },
        { label: p.title },
      ]}
      backHref="/programs/secondary"
      backLabel="중·고등 프로그램 목록"
    />
  );
}
