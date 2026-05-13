"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE, isNavGroup } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        scrolled
          ? "border-ink-100 bg-white/95 backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-pad flex h-16 items-center justify-between">
        <Link href="/" aria-label="진로팡 홈" className="shrink-0">
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="주요 메뉴"
        >
          {NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-[2px] px-3.5 py-2 text-[14px] leading-[1.2] font-semibold text-ink-700 transition-colors group-hover:text-brand-700"
              >
                {item.label}
                {item.children && (
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-px text-ink-400 transition-transform group-hover:rotate-180 group-hover:text-brand-700"
                    aria-hidden
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>

              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 pt-2 opacity-0 transition-[opacity,transform] duration-150 [transform:translate(-50%,4px)] group-hover:visible group-hover:opacity-100 group-hover:[transform:translate(-50%,0)] group-focus-within:visible group-focus-within:opacity-100 group-focus-within:[transform:translate(-50%,0)]">
                  <ul className="min-w-[212px] rounded-[3px] border border-ink-100 bg-white py-2 shadow-[0_14px_36px_-10px_rgba(11,19,34,0.22)]">
                    {item.children.map((c, ci) =>
                      isNavGroup(c) ? (
                        <li
                          key={`g-${ci}`}
                          className="mb-1 border-b border-ink-100 pb-1 last:mb-0 last:border-0 last:pb-0"
                        >
                          {c.href ? (
                            <Link
                              href={c.href}
                              className="block px-5 pb-1.5 pt-2 text-[11px] font-bold uppercase tracking-[0.1em] text-ink-400 transition-colors hover:text-brand-700"
                            >
                              {c.heading}
                            </Link>
                          ) : (
                            <p className="px-5 pb-1.5 pt-2 text-[11px] font-bold uppercase tracking-[0.1em] text-ink-400">
                              {c.heading}
                            </p>
                          )}
                          <ul>
                            {c.items.map((it) => (
                              <li key={it.href}>
                                <Link
                                  href={it.href}
                                  className="block py-2 pl-8 pr-5 text-[14px] leading-[1.3] font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-brand-700"
                                >
                                  {it.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block px-5 py-2.5 text-[14px] leading-[1.3] font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-brand-700"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${SITE.phoneE164}`}
            className="btn-ghost"
            aria-label={`전화 ${SITE.phone}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.87.69 2.74a2 2 0 0 1-.45 2.11L8.09 9.83a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.87.33 1.79.56 2.74.69A2 2 0 0 1 22 16.92Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {SITE.phone}
          </a>
          <Link href="/contact" className="btn-primary">
            무료 상담 신청
          </Link>
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-ink-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-pad max-h-[calc(100vh-4rem)] overflow-y-auto pb-6">
            <ul className="flex flex-col gap-1 border-t border-ink-100 pt-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-[2px] px-3 py-3 text-[15px] leading-[1.2] font-semibold text-ink-900 hover:bg-ink-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-1 ml-3 border-l border-ink-100">
                      {item.children.map((c, ci) =>
                        isNavGroup(c) ? (
                          <li key={`g-${ci}`}>
                            {c.href ? (
                              <Link
                                href={c.href}
                                className="block py-2.5 pl-4 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink-500 hover:text-brand-700"
                                onClick={() => setOpen(false)}
                              >
                                {c.heading}
                              </Link>
                            ) : (
                              <p className="py-2.5 pl-4 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink-500">
                                {c.heading}
                              </p>
                            )}
                            <ul className="ml-4 border-l border-ink-100">
                              {c.items.map((it) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    className="block py-2 pl-4 text-[14px] leading-[1.3] font-medium text-ink-600 hover:text-brand-700"
                                    onClick={() => setOpen(false)}
                                  >
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block py-2.5 pl-4 text-[14px] leading-[1.3] font-medium text-ink-600 hover:text-brand-700"
                              onClick={() => setOpen(false)}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <a href={`tel:${SITE.phoneE164}`} className="btn-secondary">
                전화 문의 {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="btn-primary"
                onClick={() => setOpen(false)}
              >
                무료 상담 신청서 작성
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
