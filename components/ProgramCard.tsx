import Link from "next/link";
import { type Program, programHref, displayTitle } from "@/lib/programs";

export default function ProgramCard({ p }: { p: Program }) {
  const href = programHref(p);
  const title = displayTitle(p);
  return (
    <Link
      href={href}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[3px] border border-ink-100 bg-white transition-colors hover:border-brand-700"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-50">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[16px] font-bold leading-[1.35] text-ink-900">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13.5px] leading-[1.65] text-ink-700">
          {p.description}
        </p>
        <dl className="mt-4 border-t border-ink-100">
          <div className="flex items-start justify-between gap-3 border-b border-ink-100 py-2 text-[12.5px] leading-[1.5]">
            <dt className="font-medium text-ink-500">소요 시간</dt>
            <dd className="text-right font-semibold text-ink-900 tabular-nums">
              {p.duration}
            </dd>
          </div>
          <div className="flex items-start justify-between gap-3 py-2 text-[12.5px] leading-[1.5]">
            <dt className="font-medium text-ink-500">권장 인원</dt>
            <dd className="text-right font-semibold text-ink-900 tabular-nums">
              {p.capacity}
            </dd>
          </div>
        </dl>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-700 transition-colors">
          상세 보기
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
