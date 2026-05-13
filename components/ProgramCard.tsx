import type { Program } from "@/lib/programs";

export default function ProgramCard({ p }: { p: Program }) {
  return (
    <article className="card flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <span className="chip">{p.tag}</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
          {p.audience}
        </span>
      </div>
      <h3 className="mt-5 text-[19px] font-bold leading-[1.35] text-ink-900">
        {p.title}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.75] text-ink-700">{p.summary}</p>

      <dl className="mt-5 border-t border-ink-100">
        <div className="spec-row">
          <dt className="font-medium text-ink-500">소요 시간</dt>
          <dd className="text-right font-semibold text-ink-900 tabular-nums">
            {p.duration}
          </dd>
        </div>
        <div className="spec-row">
          <dt className="font-medium text-ink-500">권장 인원</dt>
          <dd className="text-right font-semibold text-ink-900 tabular-nums">
            {p.capacity}
          </dd>
        </div>
      </dl>

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {p.highlights.map((h) => (
          <li
            key={h}
            className="rounded-[2px] border border-ink-100 px-2.5 py-1 text-[12px] font-medium text-ink-700"
          >
            {h}
          </li>
        ))}
      </ul>
    </article>
  );
}
