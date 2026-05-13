import Link from "next/link";
import { SITE } from "@/lib/site";

export default function FloatingCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-30 flex justify-center px-4 sm:bottom-6">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-ink-100 bg-white/95 p-1.5 shadow-soft backdrop-blur">
        <a
          href={`tel:${SITE.phoneE164}`}
          className="hidden items-center gap-2 rounded-full px-4 py-2 text-[13px] leading-[1.2] font-semibold text-ink-700 hover:bg-ink-100 sm:inline-flex"
          aria-label="전화 문의"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
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
        <a
          href={SITE.kakaoChannel}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-2 text-[13px] leading-[1.2] font-bold text-[#3C1E1E] transition hover:brightness-95"
          aria-label="카카오톡 채널 문의"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.84 1.86 5.33 4.66 6.76L5.5 22l4.5-2.45c.65.09 1.32.14 2 .14 5.52 0 10-3.58 10-8s-4.48-8-10-8Z" />
          </svg>
          카톡 문의
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-[13px] leading-[1.2] font-bold text-white shadow-soft hover:bg-brand-700"
        >
          신청서 작성
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
