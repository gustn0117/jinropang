"use client";

import { useState, FormEvent } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const r = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!r.ok) {
        const data = await r.json().catch(() => ({}));
        setErr(data?.error ?? "로그인 실패");
        setLoading(false);
        return;
      }
      window.location.reload();
    } catch {
      setErr("네트워크 오류");
      setLoading(false);
    }
  }

  return (
    <section className="container-pad py-20 lg:py-28">
      <div className="mx-auto max-w-md rounded-[3px] border border-ink-100 bg-white p-8">
        <p className="section-eyebrow">ADMIN</p>
        <h1 className="mt-3 text-[24px] font-bold leading-[1.3] text-ink-900">
          어드민 로그인
        </h1>
        <p className="mt-3 text-[14px] leading-[1.7] text-ink-600">
          견적 문의 관리자만 접근 가능합니다.
        </p>
        <form onSubmit={submit} className="mt-6 grid gap-3">
          <label className="block">
            <span className="text-[13px] font-semibold text-ink-900">
              비밀번호
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white px-4 py-3 text-[14px] outline-none transition focus:border-brand-500 focus:shadow-ring"
            />
          </label>
          {err && (
            <p className="rounded-[3px] bg-red-50 px-3 py-2 text-[13px] text-red-700">
              {err}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "확인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </section>
  );
}
