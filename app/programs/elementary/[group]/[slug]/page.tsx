import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/ProgramDetailView";
import {
  ELEMENTARY,
  ELEMENTARY_GROUP_LABEL,
  findElementaryProgram,
  groupToSegment,
  type ElementaryGroupSegment,
} from "@/lib/programs";

type Params = { group: string; slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return ELEMENTARY.map((p) => ({
    group: groupToSegment(p.group),
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { group, slug } = await params;
  const p = findElementaryProgram(group, slug);
  if (!p) return { title: "프로그램을 찾을 수 없습니다" };
  return {
    title: `${p.title} — 초등 ${ELEMENTARY_GROUP_LABEL[group as ElementaryGroupSegment] ?? ""}`,
    description: p.description,
    alternates: { canonical: `/programs/elementary/${group}/${slug}` },
  };
}

export default async function ElementaryProgramDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { group, slug } = await params;
  const p = findElementaryProgram(group, slug);
  if (!p) notFound();
  const groupLabel = ELEMENTARY_GROUP_LABEL[group as ElementaryGroupSegment];
  return (
    <ProgramDetailView
      program={p}
      eyebrow={`ELEMENTARY · ${groupLabel}`}
      breadcrumb={[
        { label: "초등학교", href: "/programs/elementary" },
        { label: groupLabel, href: `/programs/elementary#${group === "trip" ? "trip" : "g" + group}` },
        { label: p.title },
      ]}
      backHref={`/programs/elementary#${group === "trip" ? "trip" : "g" + group}`}
      backLabel={`${groupLabel} 프로그램 목록`}
    />
  );
}
