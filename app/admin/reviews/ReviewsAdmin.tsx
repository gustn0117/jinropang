"use client";

import { useState, FormEvent } from "react";
import type { Review } from "@/lib/reviews";

const BADGE_PRESETS = [
  "초등 진로체험",
  "초등 체험학습",
  "중학교 진로의 날",
  "고등학교 캠프",
  "학교 축제",
  "교육청 대회",
  "기관 행사",
];

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  } catch {
    return iso;
  }
}

export default function ReviewsAdmin({
  initialList,
}: {
  initialList: Review[];
}) {
  const [list, setList] = useState<Review[]>(initialList);
  const [badge, setBadge] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [meta, setMeta] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    if (!title.trim() || !body.trim()) {
      setErr("제목과 본문은 필수입니다.");
      return;
    }
    setSubmitting(true);
    try {
      const r = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ badge, title, body, meta }),
      });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setErr(d?.error ?? "등록 실패");
        setSubmitting(false);
        return;
      }
      const data = await r.json();
      setList((cur) => [data.review, ...cur]);
      setBadge("");
      setTitle("");
      setBody("");
      setMeta("");
    } catch {
      setErr("네트워크 오류");
    }
    setSubmitting(false);
  }

  async function remove(id: string) {
    if (!confirm("이 후기를 삭제하시겠습니까?")) return;
    setDeletingId(id);
    const r = await fetch(`/api/review/${id}`, { method: "DELETE" });
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
        <h2 className="text-[17px] font-bold text-ink-900">새 후기 등록</h2>
        <p className="mt-1 text-[13px] text-ink-500">
          진행후기 페이지 상단에 노출됩니다.
        </p>
        <form onSubmit={submit} className="mt-5 grid gap-4">
          <div>
            <label className="text-[13px] font-semibold text-ink-900">
              카테고리(뱃지)
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              list="badge-presets"
              placeholder="예: 초등 진로체험"
              className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white px-3 py-2.5 text-[14px] outline-none transition focus:border-brand-500 focus:shadow-ring"
            />
            <datalist id="badge-presets">
              {BADGE_PRESETS.map((b) => (
                <option key={b} value={b} />
              ))}
            </datalist>
          </div>
          <div>
            <label className="text-[13px] font-semibold text-ink-900">
              제목 <span className="text-brand-600">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="예: 5-6학년 코딩 드론 미션 비행"
              className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white px-3 py-2.5 text-[14px] outline-none transition focus:border-brand-500 focus:shadow-ring"
            />
          </div>
          <div>
            <label className="text-[13px] font-semibold text-ink-900">
              본문 (후기 내용) <span className="text-brand-600">*</span>
            </label>
            <textarea
              rows={6}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              placeholder="현장에서 받은 후기 내용을 입력하세요."
              className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white p-3 text-[14px] leading-[1.7] outline-none transition focus:border-brand-500 focus:shadow-ring"
            />
          </div>
          <div>
            <label className="text-[13px] font-semibold text-ink-900">
              메타 (기관·인원·시간)
            </label>
            <input
              type="text"
              value={meta}
              onChange={(e) => setMeta(e.target.value)}
              placeholder="예: 수도권 초등학교 · 60명 · 120분"
              className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white px-3 py-2.5 text-[14px] outline-none transition focus:border-brand-500 focus:shadow-ring"
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
            {submitting ? "등록 중..." : "후기 등록"}
          </button>
        </form>
      </section>

      {/* 목록 */}
      <section>
        <div className="flex items-end justify-between">
          <h2 className="text-[17px] font-bold text-ink-900">
            등록된 후기{" "}
            <span className="font-bold text-brand-700">{list.length}</span>건
          </h2>
          <p className="text-[12px] text-ink-500">최신순</p>
        </div>
        {list.length === 0 ? (
          <div className="mt-6 rounded-[3px] border border-dashed border-ink-100 bg-white px-6 py-16 text-center">
            <p className="text-[14px] text-ink-600">
              등록된 후기가 없습니다.
            </p>
          </div>
        ) : (
          <ul className="mt-5 space-y-3">
            {list.map((r) => (
              <li
                key={r.id}
                className="rounded-[3px] border border-ink-100 bg-white p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {r.badge && (
                      <span className="rounded-[2px] border border-ink-100 px-2 py-0.5 text-[11px] font-semibold text-ink-700">
                        {r.badge}
                      </span>
                    )}
                    <span className="text-[11.5px] text-ink-500 tabular-nums">
                      {formatDate(r.createdAt)}
                    </span>
                  </div>
                  <button
                    onClick={() => remove(r.id)}
                    disabled={deletingId === r.id}
                    className="rounded-[2px] border border-ink-100 px-2.5 py-1 text-[12px] font-semibold text-ink-700 hover:border-red-500 hover:text-red-600 disabled:opacity-50"
                  >
                    {deletingId === r.id ? "..." : "삭제"}
                  </button>
                </div>
                <h3 className="mt-3 text-[15.5px] font-bold leading-[1.4] text-ink-900">
                  {r.title}
                </h3>
                <p className="mt-2 whitespace-pre-wrap text-[13.5px] leading-[1.75] text-ink-700">
                  {r.body}
                </p>
                {r.meta && (
                  <p className="mt-3 border-t border-ink-100 pt-2 text-[12px] font-semibold text-ink-500">
                    {r.meta}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
