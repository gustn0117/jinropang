"use client";

import { FormEvent, useState } from "react";
import {
  PROGRAM_CATEGORIES,
  categoryLabel,
  type ProgramCategoryId,
} from "@/lib/categories";
import type { Qna } from "@/lib/qna";

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  } catch {
    return iso;
  }
}

export default function QnaAdmin({ initialList }: { initialList: Qna[] }) {
  const [list, setList] = useState<Qna[]>(initialList);
  const [category, setCategory] = useState<ProgramCategoryId>(
    PROGRAM_CATEGORIES[0].id,
  );
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    if (!question.trim() || !answer.trim()) {
      setErr("질문과 답변은 필수입니다.");
      return;
    }
    setSubmitting(true);
    try {
      const r = await fetch("/api/qna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          question: question.trim(),
          answer: answer.trim(),
        }),
      });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setErr(d?.error ?? "등록 실패");
        setSubmitting(false);
        return;
      }
      const data = await r.json();
      setList((cur) => [data.qna, ...cur]);
      setQuestion("");
      setAnswer("");
    } catch {
      setErr("네트워크 오류");
    }
    setSubmitting(false);
  }

  async function remove(id: string) {
    if (!confirm("이 Q&A를 삭제하시겠습니까?")) return;
    setDeletingId(id);
    const r = await fetch(`/api/qna/${id}`, { method: "DELETE" });
    setDeletingId(null);
    if (r.ok) {
      setList((cur) => cur.filter((x) => x.id !== id));
    } else {
      alert("삭제 실패");
    }
  }

  return (
    <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr]">
      {/* 등록 폼 */}
      <section className="rounded-[3px] border border-ink-100 bg-white p-6 lg:sticky lg:top-24 lg:self-start">
        <h2 className="text-[17px] font-bold text-ink-900">새 Q&A 등록</h2>
        <p className="mt-1 text-[13px] text-ink-500">
          공개 Q&A 페이지에 즉시 노출됩니다.
        </p>
        <form onSubmit={submit} className="mt-5 grid gap-4">
          <div>
            <label className="text-[13px] font-semibold text-ink-900">
              카테고리 <span className="text-brand-600">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as ProgramCategoryId)}
              className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white px-3 py-2.5 text-[14px] outline-none transition focus:border-brand-500 focus:shadow-ring"
            >
              {PROGRAM_CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[13px] font-semibold text-ink-900">
              질문 <span className="text-brand-600">*</span>
            </label>
            <textarea
              rows={2}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              placeholder="예: 진행 가능 학년 범위는 어떻게 되나요?"
              className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white p-3 text-[14px] leading-[1.6] outline-none transition focus:border-brand-500 focus:shadow-ring"
            />
          </div>
          <div>
            <label className="text-[13px] font-semibold text-ink-900">
              답변 <span className="text-brand-600">*</span>
            </label>
            <textarea
              rows={6}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              placeholder="고객에게 안내할 답변을 작성하세요."
              className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white p-3 text-[14px] leading-[1.7] outline-none transition focus:border-brand-500 focus:shadow-ring"
            />
          </div>
          {err && (
            <p className="rounded-[3px] bg-red-50 px-3 py-2 text-[13px] text-red-700">
              {err}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "등록 중..." : "Q&A 등록"}
          </button>
        </form>
      </section>

      {/* 목록 */}
      <section>
        <div className="flex items-end justify-between">
          <h2 className="text-[17px] font-bold text-ink-900">
            등록된 Q&A{" "}
            <span className="font-bold text-brand-700">{list.length}</span>건
          </h2>
          <p className="text-[12px] text-ink-500">최신순</p>
        </div>
        {list.length === 0 ? (
          <div className="mt-6 rounded-[3px] border border-dashed border-ink-100 bg-white px-6 py-16 text-center">
            <p className="text-[14px] text-ink-600">
              등록된 Q&A가 없습니다.
            </p>
          </div>
        ) : (
          <ul className="mt-5 space-y-3">
            {list.map((q) => (
              <li
                key={q.id}
                className="rounded-[3px] border border-ink-100 bg-white p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-[2px] border border-ink-100 px-2 py-0.5 text-[11px] font-semibold text-ink-700">
                      {categoryLabel(q.category)}
                    </span>
                    <span className="text-[11.5px] text-ink-500 tabular-nums">
                      {formatDate(q.createdAt)}
                    </span>
                  </div>
                  <button
                    onClick={() => remove(q.id)}
                    disabled={deletingId === q.id}
                    className="rounded-[2px] border border-ink-100 px-2.5 py-1 text-[12px] font-semibold text-ink-700 hover:border-red-500 hover:text-red-600 disabled:opacity-50"
                  >
                    {deletingId === q.id ? "..." : "삭제"}
                  </button>
                </div>
                <h3 className="mt-3 text-[15.5px] font-bold leading-[1.4] text-ink-900">
                  Q. {q.question}
                </h3>
                <p className="mt-2 whitespace-pre-wrap text-[13.5px] leading-[1.75] text-ink-700">
                  A. {q.answer}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
