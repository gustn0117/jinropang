"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  PROGRAM_CATEGORIES,
  isValidCategory,
  type ProgramCategoryId,
} from "@/lib/categories";
import type { Qna } from "@/lib/qna";

export default function QnaSections({ list }: { list: Qna[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");
  const active: ProgramCategoryId = isValidCategory(catParam)
    ? catParam
    : PROGRAM_CATEGORIES[0].id;
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function setActive(id: ProgramCategoryId) {
    router.replace(`/qna?cat=${id}`, { scroll: false });
  }

  const grouped = useMemo(() => {
    const map: Record<ProgramCategoryId, Qna[]> = {
      elementary: [],
      secondary: [],
      event: [],
    };
    for (const q of list) {
      if (map[q.category]) map[q.category].push(q);
    }
    return map;
  }, [list]);

  const items = grouped[active];

  function toggle(id: string) {
    setOpenIds((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="container-pad py-10 lg:py-14">
      {/* 카테고리 탭 */}
      <div
        role="tablist"
        aria-label="Q&A 카테고리"
        className="flex flex-wrap gap-2 border-b border-ink-100 pb-1"
      >
        {PROGRAM_CATEGORIES.map((c) => {
          const isActive = c.id === active;
          const count = grouped[c.id].length;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(c.id)}
              className={`relative -mb-px inline-flex items-center gap-2 border-b-2 px-3 py-2.5 text-[14px] font-bold transition-colors sm:text-[15px] ${
                isActive
                  ? "border-brand-700 text-brand-700"
                  : "border-transparent text-ink-500 hover:text-ink-900"
              }`}
            >
              {c.label}
              <span
                className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold tabular-nums ${
                  isActive
                    ? "bg-brand-700 text-white"
                    : "bg-ink-50 text-ink-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 아코디언 */}
      <div className="mt-8">
        {items.length === 0 ? (
          <div className="rounded-[3px] border border-dashed border-ink-100 bg-white px-6 py-16 text-center">
            <p className="text-[14px] text-ink-600">
              아직 등록된 Q&A가 없습니다.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-ink-100 border-y border-ink-100">
            {items.map((q) => {
              const open = openIds.has(q.id);
              return (
                <li key={q.id}>
                  <button
                    type="button"
                    onClick={() => toggle(q.id)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-4 py-5 text-left transition-colors hover:bg-ink-50/60"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[13px] font-black text-brand-700">
                      Q
                    </span>
                    <span className="flex-1 text-[15.5px] font-bold leading-[1.55] text-ink-900 sm:text-[16px]">
                      {q.question}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      className={`mt-1 shrink-0 text-ink-400 transition-transform ${
                        open ? "rotate-180 text-brand-700" : ""
                      }`}
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {open && (
                    <div className="flex items-start gap-4 pb-6">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[13px] font-black text-white">
                        A
                      </span>
                      <p className="flex-1 whitespace-pre-wrap text-[14px] leading-[1.85] text-ink-700 sm:text-[14.5px]">
                        {q.answer}
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
