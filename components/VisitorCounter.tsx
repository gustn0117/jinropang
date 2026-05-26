"use client";

import { useEffect, useState } from "react";

type Stats = { total: number; today: number };

export default function VisitorCounter() {
  const [s, setS] = useState<Stats | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/visitor", {
          method: "POST",
          credentials: "same-origin",
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = (await res.json()) as { ok: boolean } & Stats;
        if (alive && data.ok) setS({ total: data.total, today: data.today });
      } catch {
        /* 네트워크 실패는 조용히 무시 */
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (!s) {
    return (
      <span
        className="inline-flex items-center gap-2 text-[12px] text-ink-500"
        aria-label="방문자 수 로딩 중"
      >
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-ink-300" />
        방문자
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-3 text-[12px] leading-[1.6] text-ink-500">
      <span className="inline-flex items-center gap-1.5">
        <span className="text-ink-400">오늘</span>
        <span className="font-bold text-ink-900 tabular-nums">
          {s.today.toLocaleString()}
        </span>
      </span>
      <span aria-hidden className="text-ink-200">
        |
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="text-ink-400">누적</span>
        <span className="font-bold text-ink-900 tabular-nums">
          {s.total.toLocaleString()}
        </span>
      </span>
    </span>
  );
}
