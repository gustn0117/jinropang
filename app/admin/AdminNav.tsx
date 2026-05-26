"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/admin", label: "견적 문의" },
  { href: "/admin/reviews", label: "진행 후기" },
];

export default function AdminNav() {
  const pathname = usePathname();
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin";
  }
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-100 pb-3">
      <nav className="flex gap-1">
        {TABS.map((t) => {
          const active =
            t.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(t.href);
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`rounded-[2px] px-3 py-2 text-[14px] font-bold transition-colors ${
                active
                  ? "bg-brand-700 text-white"
                  : "text-ink-700 hover:bg-ink-50 hover:text-brand-700"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </nav>
      <button onClick={logout} className="btn-ghost">
        로그아웃
      </button>
    </div>
  );
}
