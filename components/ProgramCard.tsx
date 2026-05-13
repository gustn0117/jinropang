import type { Program } from "@/lib/programs";

export default function ProgramCard({ p }: { p: Program }) {
  return (
    <article className="card flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="chip">{p.tag}</span>
        <span className="text-[11px] leading-[1.3] font-semibold uppercase tracking-[0.15em] text-ink-500">
          {p.audience}
        </span>
      </div>
      <h3 className="mt-5 text-xl leading-[1.35] font-bold text-ink-900">{p.title}</h3>
      <p className="mt-2 text-[14px] leading-[1.75] text-ink-500">{p.summary}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-soft-grad p-4">
        <div>
          <dt className="text-[11px] leading-[1.3] font-semibold uppercase tracking-[0.14em] text-ink-500">
            소요 시간
          </dt>
          <dd className="mt-1 text-[13px] leading-[1.4] font-bold text-ink-900">
            {p.duration}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] leading-[1.3] font-semibold uppercase tracking-[0.14em] text-ink-500">
            권장 인원
          </dt>
          <dd className="mt-1 text-[13px] leading-[1.4] font-bold text-ink-900">
            {p.capacity}
          </dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.highlights.map((h) => (
          <li
            key={h}
            className="rounded-full border border-ink-100 px-2.5 py-1 text-[12px] leading-[1.3] font-medium text-ink-700"
          >
            #{h}
          </li>
        ))}
      </ul>
    </article>
  );
}
