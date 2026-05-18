"use client";

import { useState } from "react";
import type { Inquiry } from "@/lib/inquiries";

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  } catch {
    return iso;
  }
}

export default function AdminTable({
  initialList,
}: {
  initialList: Inquiry[];
}) {
  const [list, setList] = useState<Inquiry[]>(initialList);
  const [openId, setOpenId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  async function remove(id: string) {
    if (!confirm("이 문의를 삭제하시겠습니까?")) return;
    setDeletingId(id);
    const r = await fetch(`/api/inquiry/${id}`, { method: "DELETE" });
    setDeletingId(null);
    if (r.ok) {
      setList((cur) => cur.filter((x) => x.id !== id));
      if (openId === id) setOpenId(null);
    } else {
      alert("삭제 실패");
    }
  }

  async function refresh() {
    const r = await fetch("/api/inquiry");
    if (r.ok) {
      const data = await r.json();
      setList(data.list ?? []);
    }
  }

  function downloadCsv() {
    const headers = [
      "id",
      "createdAt",
      "type",
      "school",
      "name",
      "phone",
      "grade",
      "count",
      "date",
      "memo",
    ];
    const esc = (v: string | undefined) => {
      if (v == null) return "";
      const s = String(v).replace(/"/g, '""');
      return /[",\n]/.test(s) ? `"${s}"` : s;
    };
    const lines = [
      headers.join(","),
      ...list.map((i) =>
        headers.map((h) => esc((i as Record<string, string | undefined>)[h])).join(","),
      ),
    ];
    const blob = new Blob(["﻿" + lines.join("\n")], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `진로팡_견적문의_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="container-pad py-10 lg:py-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="section-eyebrow">ADMIN</p>
          <h1 className="mt-3 text-[24px] font-bold leading-[1.3] text-ink-900 sm:text-[28px]">
            견적 문의 관리
          </h1>
          <p className="mt-2 text-[14px] text-ink-600">
            총 <span className="font-bold text-ink-900">{list.length}</span>건
            · 최신순
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={refresh} className="btn-secondary">
            새로고침
          </button>
          <button
            onClick={downloadCsv}
            className="btn-secondary"
            disabled={list.length === 0}
          >
            CSV 내보내기
          </button>
          <button onClick={logout} className="btn-ghost">
            로그아웃
          </button>
        </div>
      </div>

      {list.length === 0 ? (
        <div className="mt-10 rounded-[3px] border border-dashed border-ink-100 bg-white px-6 py-16 text-center">
          <p className="text-[15px] text-ink-600">
            아직 접수된 문의가 없습니다.
          </p>
        </div>
      ) : (
        <div className="mt-8 overflow-hidden rounded-[3px] border border-ink-100 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13.5px]">
              <thead className="bg-ink-50 text-[12px] uppercase tracking-[0.06em] text-ink-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">접수일</th>
                  <th className="px-4 py-3 font-semibold">유형</th>
                  <th className="px-4 py-3 font-semibold">학교/기관</th>
                  <th className="px-4 py-3 font-semibold">담당자</th>
                  <th className="px-4 py-3 font-semibold">연락처</th>
                  <th className="px-4 py-3 font-semibold">희망 일정</th>
                  <th className="px-4 py-3 font-semibold">인원</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {list.map((i) => (
                  <FragmentRow
                    key={i.id}
                    inquiry={i}
                    open={openId === i.id}
                    deleting={deletingId === i.id}
                    onToggle={() =>
                      setOpenId((cur) => (cur === i.id ? null : i.id))
                    }
                    onDelete={() => remove(i.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

function FragmentRow({
  inquiry,
  open,
  deleting,
  onToggle,
  onDelete,
}: {
  inquiry: Inquiry;
  open: boolean;
  deleting: boolean;
  onToggle: () => void;
  onDelete: () => void;
}) {
  return (
    <>
      <tr className="border-t border-ink-100 hover:bg-ink-50/60">
        <td className="px-4 py-3 tabular-nums text-ink-700">
          {formatDate(inquiry.createdAt)}
        </td>
        <td className="px-4 py-3 text-ink-700">{inquiry.type ?? "-"}</td>
        <td className="px-4 py-3 font-semibold text-ink-900">
          {inquiry.school ?? "-"}
        </td>
        <td className="px-4 py-3 text-ink-700">{inquiry.name ?? "-"}</td>
        <td className="px-4 py-3 tabular-nums text-ink-700">
          <a
            href={`tel:${inquiry.phone}`}
            className="hover:text-brand-700 hover:underline"
          >
            {inquiry.phone ?? "-"}
          </a>
        </td>
        <td className="px-4 py-3 text-ink-700">{inquiry.date ?? "-"}</td>
        <td className="px-4 py-3 text-ink-700">{inquiry.count ?? "-"}</td>
        <td className="px-4 py-3 text-right">
          <div className="flex justify-end gap-1.5">
            <button
              onClick={onToggle}
              className="rounded-[2px] border border-ink-100 px-2.5 py-1 text-[12px] font-semibold text-ink-700 hover:border-brand-700 hover:text-brand-700"
            >
              {open ? "접기" : "상세"}
            </button>
            <button
              onClick={onDelete}
              disabled={deleting}
              className="rounded-[2px] border border-ink-100 px-2.5 py-1 text-[12px] font-semibold text-ink-700 hover:border-red-500 hover:text-red-600 disabled:opacity-50"
            >
              {deleting ? "..." : "삭제"}
            </button>
          </div>
        </td>
      </tr>
      {open && (
        <tr className="border-t border-ink-100 bg-soft-grad">
          <td colSpan={8} className="px-4 py-5">
            <dl className="grid gap-3 sm:grid-cols-2">
              <Spec label="ID" value={inquiry.id} mono />
              <Spec label="접수일" value={formatDate(inquiry.createdAt)} />
              <Spec label="프로그램 유형" value={inquiry.type} />
              <Spec label="학교/기관" value={inquiry.school} />
              <Spec label="담당자" value={inquiry.name} />
              <Spec label="연락처" value={inquiry.phone} />
              <Spec label="대상 학년" value={inquiry.grade} />
              <Spec label="예상 인원" value={inquiry.count} />
              <Spec label="희망 일정" value={inquiry.date} />
            </dl>
            <div className="mt-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                요청사항 / 운영 목적
              </p>
              <p className="mt-2 whitespace-pre-wrap rounded-[3px] border border-ink-100 bg-white p-4 text-[13.5px] leading-[1.7] text-ink-800">
                {inquiry.memo?.trim() || "(내용 없음)"}
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function Spec({
  label,
  value,
  mono,
}: {
  label: string;
  value?: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-ink-100 py-1.5">
      <dt className="text-[12.5px] font-medium text-ink-500">{label}</dt>
      <dd
        className={`text-right text-[13.5px] font-semibold text-ink-900 ${mono ? "font-mono text-[12px]" : ""}`}
      >
        {value || "-"}
      </dd>
    </div>
  );
}
