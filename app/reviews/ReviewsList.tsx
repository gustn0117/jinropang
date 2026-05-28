"use client";

import { useMemo, useState } from "react";
import type { Review } from "@/lib/reviews";
import {
  PROGRAM_CATEGORIES,
  type ProgramCategoryId,
} from "@/lib/categories";

type FilterId = "all" | ProgramCategoryId;

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "전체" },
  ...PROGRAM_CATEGORIES.map((c) => ({ id: c.id as FilterId, label: c.label })),
];

export default function ReviewsList({ reviews }: { reviews: Review[] }) {
  const [active, setActive] = useState<FilterId>("all");

  const counts = useMemo(() => {
    const c: Record<FilterId, number> = {
      all: reviews.length,
      elementary: 0,
      secondary: 0,
      event: 0,
    };
    for (const r of reviews) {
      if (r.category) c[r.category] += 1;
    }
    return c;
  }, [reviews]);

  const filtered = useMemo(() => {
    if (active === "all") return reviews;
    return reviews.filter((r) => r.category === active);
  }, [reviews, active]);

  return (
    <>
      <div
        role="tablist"
        aria-label="진행후기 카테고리"
        className="mt-10 flex flex-wrap gap-2 border-b border-ink-100 pb-1"
      >
        {FILTERS.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f.id)}
              className={`relative -mb-px inline-flex items-center gap-2 border-b-2 px-3 py-2.5 text-[14px] font-bold transition-colors sm:text-[15px] ${
                isActive
                  ? "border-brand-700 text-brand-700"
                  : "border-transparent text-ink-500 hover:text-ink-900"
              }`}
            >
              {f.label}
              <span
                className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold tabular-nums ${
                  isActive
                    ? "bg-brand-700 text-white"
                    : "bg-ink-50 text-ink-500"
                }`}
              >
                {counts[f.id]}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[3px] border border-dashed border-ink-100 bg-white px-6 py-16 text-center">
          <p className="text-[14px] text-ink-600">
            해당 카테고리에 등록된 후기가 없습니다.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <article
              key={r.id}
              className="group flex h-full flex-col overflow-hidden rounded-[3px] border border-ink-100 bg-white transition-colors hover:border-brand-300"
            >
              {r.image && (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                {r.badge && <span className="chip">{r.badge}</span>}
                <h3 className="mt-4 text-lg leading-[1.4] font-bold text-ink-900">
                  {r.title}
                </h3>
                <p className="mt-3 whitespace-pre-wrap text-[14px] leading-[1.8] text-ink-700">
                  “{r.body}”
                </p>
                {r.meta && (
                  <p className="mt-auto border-t border-ink-100 pt-3 text-[12px] leading-[1.5] font-semibold text-ink-500">
                    {r.meta}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
