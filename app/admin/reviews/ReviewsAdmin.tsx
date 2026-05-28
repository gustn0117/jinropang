"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import type { Review } from "@/lib/reviews";
import {
  PROGRAM_CATEGORIES,
  categoryLabel,
  type ProgramCategoryId,
} from "@/lib/categories";

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
  const [editingId, setEditingId] = useState<string | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const [category, setCategory] = useState<ProgramCategoryId>(
    PROGRAM_CATEGORIES[0].id,
  );
  const [badge, setBadge] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [meta, setMeta] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");
  const [warning, setWarning] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const isEditing = editingId !== null;

  // 미리보기 URL 생성·해제
  useEffect(() => {
    if (!image) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(image);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  function onImageChange(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setErr("");
    if (f) {
      if (!/^image\/(jpe?g|png|webp)$/i.test(f.type)) {
        setErr("jpg / png / webp 형식만 업로드할 수 있습니다.");
        e.target.value = "";
        return;
      }
      if (f.size > 8 * 1024 * 1024) {
        setErr("이미지는 8MB 이하만 업로드할 수 있습니다.");
        e.target.value = "";
        return;
      }
    }
    setImage(f);
  }

  function resetForm() {
    setEditingId(null);
    setExistingImageUrl(null);
    setCategory(PROGRAM_CATEGORIES[0].id);
    setBadge("");
    setTitle("");
    setBody("");
    setMeta("");
    setImage(null);
    setErr("");
    setWarning("");
    const fileInput = document.getElementById(
      "review-image-input",
    ) as HTMLInputElement | null;
    if (fileInput) fileInput.value = "";
  }

  function startEdit(r: Review) {
    setEditingId(r.id);
    setExistingImageUrl(r.image ?? null);
    setCategory(r.category ?? PROGRAM_CATEGORIES[0].id);
    setBadge(r.badge ?? "");
    setTitle(r.title);
    setBody(r.body);
    setMeta(r.meta ?? "");
    setImage(null);
    setErr("");
    setWarning("");
    const fileInput = document.getElementById(
      "review-image-input",
    ) as HTMLInputElement | null;
    if (fileInput) fileInput.value = "";
    // 모바일/태블릿에서 폼이 보이도록 상단으로 스크롤
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    setWarning("");
    if (!title.trim() || !body.trim()) {
      setErr("제목과 본문은 필수입니다.");
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("category", category);
      fd.append("title", title);
      fd.append("body", body);
      fd.append("badge", badge);
      fd.append("meta", meta);
      if (image) fd.append("image", image);

      const url = isEditing ? `/api/review/${editingId}` : "/api/review";
      const method = isEditing ? "PATCH" : "POST";
      const r = await fetch(url, { method, body: fd });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setErr(d?.error ?? (isEditing ? "수정 실패" : "등록 실패"));
        setSubmitting(false);
        return;
      }
      const data = await r.json();
      if (isEditing) {
        setList((cur) =>
          cur.map((x) => (x.id === data.review.id ? data.review : x)),
        );
      } else {
        setList((cur) => [data.review, ...cur]);
      }
      if (data.warning) setWarning(data.warning);
      resetForm();
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
      {/* 등록·수정 폼 */}
      <section
        className={`rounded-[3px] border bg-white p-6 lg:sticky lg:top-24 lg:self-start ${
          isEditing ? "border-brand-700 ring-2 ring-brand-100" : "border-ink-100"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-[17px] font-bold text-ink-900">
            {isEditing ? "후기 수정" : "새 후기 등록"}
          </h2>
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-[2px] border border-ink-100 px-2.5 py-1 text-[12px] font-semibold text-ink-700 hover:border-ink-300 hover:bg-ink-50"
            >
              취소
            </button>
          )}
        </div>
        <p className="mt-1 text-[13px] text-ink-500">
          {isEditing
            ? "수정 후 저장하면 즉시 진행후기 페이지에 반영됩니다."
            : "진행후기 페이지 상단에 노출됩니다."}
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
              뱃지(세부 표시)
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              list="badge-presets"
              placeholder="예: 초등 진로체험 (선택)"
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
          <div>
            <label className="text-[13px] font-semibold text-ink-900">
              사진 (선택)
            </label>
            <p className="mt-1 text-[12px] text-ink-500">
              jpg · png · webp / 최대 8MB
            </p>
            {previewUrl ? (
              <div className="mt-2 overflow-hidden rounded-[3px] border border-ink-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="미리보기"
                  className="block aspect-[4/3] w-full object-cover"
                />
                <div className="flex items-center justify-between gap-2 border-t border-ink-100 bg-soft-grad px-3 py-2 text-[12px]">
                  <span className="truncate text-ink-700">
                    {image?.name} ·{" "}
                    {image
                      ? `${(image.size / 1024).toFixed(0)} KB`
                      : ""}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      const fi = document.getElementById(
                        "review-image-input",
                      ) as HTMLInputElement | null;
                      if (fi) fi.value = "";
                    }}
                    className="rounded-[2px] border border-ink-100 bg-white px-2 py-1 text-[11.5px] font-semibold text-ink-700 hover:border-red-500 hover:text-red-600"
                  >
                    제거
                  </button>
                </div>
              </div>
            ) : existingImageUrl ? (
              <div className="mt-2 overflow-hidden rounded-[3px] border border-ink-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={existingImageUrl}
                  alt="기존 이미지"
                  className="block aspect-[4/3] w-full object-cover"
                />
                <div className="flex items-center justify-between gap-2 border-t border-ink-100 bg-soft-grad px-3 py-2 text-[12px]">
                  <span className="truncate text-ink-700">기존 이미지</span>
                  <label
                    htmlFor="review-image-input"
                    className="cursor-pointer rounded-[2px] border border-ink-100 bg-white px-2 py-1 text-[11.5px] font-semibold text-ink-700 hover:border-brand-700 hover:text-brand-700"
                  >
                    교체
                  </label>
                </div>
              </div>
            ) : (
              <label
                htmlFor="review-image-input"
                className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-[3px] border border-dashed border-ink-100 bg-white px-3 py-5 text-[13px] text-ink-600 transition-colors hover:border-brand-700 hover:text-brand-700"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 4v12m0 0 4-4m-4 4-4-4M5 21h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                사진 선택
              </label>
            )}
            <input
              id="review-image-input"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={onImageChange}
              className="hidden"
            />
          </div>
          {err && (
            <p className="rounded-[3px] bg-red-50 px-3 py-2 text-[13px] text-red-700">
              {err}
            </p>
          )}
          {warning && (
            <p className="rounded-[3px] bg-amber-50 px-3 py-2 text-[13px] text-amber-800">
              {warning}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting
              ? isEditing
                ? "저장 중..."
                : "등록 중..."
              : isEditing
                ? "수정 저장"
                : "후기 등록"}
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
                className={`rounded-[3px] border bg-white p-5 ${
                  editingId === r.id
                    ? "border-brand-700 ring-2 ring-brand-100"
                    : "border-ink-100"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {r.category && (
                      <span className="rounded-[2px] bg-brand-700 px-2 py-0.5 text-[11px] font-bold text-white">
                        {categoryLabel(r.category)}
                      </span>
                    )}
                    {r.badge && (
                      <span className="rounded-[2px] border border-ink-100 px-2 py-0.5 text-[11px] font-semibold text-ink-700">
                        {r.badge}
                      </span>
                    )}
                    <span className="text-[11.5px] text-ink-500 tabular-nums">
                      {formatDate(r.createdAt)}
                    </span>
                    {editingId === r.id && (
                      <span className="rounded-[2px] bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800">
                        수정 중
                      </span>
                    )}
                  </div>
                  <div className="flex shrink-0 gap-1.5">
                    <button
                      onClick={() => startEdit(r)}
                      className="rounded-[2px] border border-ink-100 px-2.5 py-1 text-[12px] font-semibold text-ink-700 hover:border-brand-700 hover:text-brand-700"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => remove(r.id)}
                      disabled={deletingId === r.id}
                      className="rounded-[2px] border border-ink-100 px-2.5 py-1 text-[12px] font-semibold text-ink-700 hover:border-red-500 hover:text-red-600 disabled:opacity-50"
                    >
                      {deletingId === r.id ? "..." : "삭제"}
                    </button>
                  </div>
                </div>
                <h3 className="mt-3 text-[15.5px] font-bold leading-[1.4] text-ink-900">
                  {r.title}
                </h3>
                {r.image && (
                  <div className="mt-3 overflow-hidden rounded-[3px] border border-ink-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.image}
                      alt={r.title}
                      className="block aspect-[4/3] w-full object-cover"
                    />
                  </div>
                )}
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
