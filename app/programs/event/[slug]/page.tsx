import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/ProgramDetailView";
import { EVENT_PROGRAMS, findEventProgram, displayTitle } from "@/lib/programs";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return EVENT_PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = findEventProgram(slug);
  if (!p) return { title: "프로그램을 찾을 수 없습니다" };
  return {
    title: `${displayTitle(p)} — 행사부스 운영`,
    description: p.description,
    alternates: { canonical: `/programs/event/${slug}` },
  };
}

export default async function EventProgramDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = findEventProgram(slug);
  if (!p) notFound();
  return (
    <ProgramDetailView
      program={p}
      eyebrow="EVENT · 축제행사부스"
      breadcrumb={[
        { label: "행사부스 운영", href: "/programs/event" },
        { label: displayTitle(p) },
      ]}
      backHref="/programs/event"
      backLabel="행사부스 목록"
    />
  );
}
