const STATS = [
  {
    badge: "2026년 실적",
    value: "120+",
    label: "운영 학교·기관",
    sub: "전국 초·중·고 및 기관",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
        <path d="M16 4 4 9v2h24V9L16 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7 13v15h18V13M11 16v9M16 16v9M21 16v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M3 28h26" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badge: "2026년 실적",
    value: "18,000+",
    label: "누적 참여 학생",
    sub: "다양한 학년 대상 운영",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="22" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M20 20.5c3.5 0 8 2 8 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badge: "2026년 실적",
    value: "300+",
    label: "연간 운영 프로그램",
    sub: "체험부스·진로교육·캠프 등",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
        <rect x="5" y="7" width="22" height="21" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 13h22" stroke="currentColor" strokeWidth="1.7" />
        <path d="M11 4v6M21 4v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="10" y="17" width="4" height="3" fill="currentColor" />
        <rect x="18" y="17" width="4" height="3" fill="currentColor" />
        <rect x="10" y="22" width="4" height="3" fill="currentColor" opacity="0.5" />
        <rect x="18" y="22" width="4" height="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    badge: null,
    value: "결과보고서 제공",
    label: "교사 활용형 자료 지원",
    sub: "창체·진로활동 운영 지원",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
        <path d="M8 4h12l5 5v19H8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M20 4v5h5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12 16h10M12 21h10M12 26h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badge: null,
    value: "학교 운영 경험 기반",
    label: "전문 강사진",
    sub: "소수정예·검증된 강사 진행",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
        <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6 28c0-4.7 4.5-8 10-8s10 3.3 10 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="m24 5 1 2.3 2.3.5L25.5 9.5l.4 2.4L24 11l-2 .9.5-2.4L21 7.8l2.3-.5L24 5Z" fill="currentColor" />
      </svg>
    ),
  },
];

const REGIONS = [
  { name: "수도권", cities: "서울 · 경기 · 인천" },
  { name: "충청권", cities: "대전 · 세종 · 충청" },
  { name: "경상권", cities: "부산 · 대구 · 경상" },
  { name: "전라권", cities: "광주 · 전라" },
];

export default function StatsBanner() {
  return (
    <section className="bg-ink-50">
      <div className="shell-pad py-12 lg:py-16">
        {/* 헤더 */}
        <div className="mb-10 max-w-2xl">
          <p className="section-eyebrow">JINROPANG IN NUMBERS</p>
          <h2 className="section-title mt-3">
            진로팡이 함께해온 <span className="text-brand-700">학교 미래교육</span>
          </h2>
          <p className="lead mt-3">
            2026년 한 해, 전국 학교·기관에서 진로팡과 함께한 숫자입니다.
          </p>
        </div>

        {/* 5개 스탯 — 흰 카드 + 좌측 정렬 세로 스택, 동일 높이 */}
        <dl className="grid grid-cols-1 overflow-hidden rounded-[3px] border border-ink-100 bg-white lg:grid-cols-5">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`flex min-w-0 flex-col p-5 lg:p-6 ${
                i > 0 ? "border-t border-ink-100 lg:border-l lg:border-t-0" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[2px] bg-brand-50 text-brand-700">
                  {s.icon}
                </span>
                {s.badge && (
                  <span className="whitespace-nowrap rounded-[2px] bg-brand-50 px-1.5 py-0.5 text-[10px] font-bold tracking-[0.04em] text-brand-700">
                    {s.badge}
                  </span>
                )}
              </div>
              <dd
                className={`mt-4 font-extrabold leading-[1.05] tabular-nums text-ink-900 ${
                  s.badge
                    ? "text-[26px] xl:text-[30px]"
                    : "text-[16px] leading-[1.3]"
                }`}
              >
                {s.value}
              </dd>
              <dt className="mt-2 text-[13.5px] font-semibold leading-[1.4] text-ink-900">
                {s.label}
              </dt>
              <p className="mt-auto pt-3 text-[12px] leading-[1.55] text-ink-500">
                {s.sub}
              </p>
            </div>
          ))}
        </dl>

        {/* 4개 지역 거점 운영 — 라이트 카드 */}
        <div className="mt-5 grid grid-cols-1 gap-0 overflow-hidden rounded-[3px] border border-ink-100 bg-white sm:grid-cols-[auto_1fr] sm:items-stretch">
          <div className="flex items-center gap-2.5 border-b border-ink-100 px-6 py-4 sm:border-b-0 sm:border-r">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-700" fill="none" aria-hidden>
              <path d="M12 22s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13Z" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <p className="text-[14px] font-bold text-ink-900">
              4개 지역 거점 운영
            </p>
          </div>
          <ul className="grid grid-cols-2 divide-ink-100 sm:grid-cols-4 sm:divide-x">
            {REGIONS.map((r) => (
              <li
                key={r.name}
                className="flex flex-col items-start gap-1 border-t border-ink-100 px-5 py-4 sm:border-t-0"
              >
                <span className="rounded-[2px] bg-brand-700 px-2 py-0.5 text-[11px] font-bold text-white">
                  {r.name}
                </span>
                <span className="text-[12.5px] text-ink-700">{r.cities}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 하단 메시지 */}
        <div className="mt-5 flex items-center gap-5 rounded-[3px] border border-ink-100 bg-white px-5 py-5 sm:gap-6 sm:px-7 sm:py-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[2px] bg-brand-50 text-brand-700 sm:h-14 sm:w-14">
            <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" aria-hidden>
              <path d="M16 3 4 7v8c0 7.5 5.4 13 12 14.5C22.6 28 28 22.5 28 15V7L16 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="m11 16 3.5 3.5L22 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[12.5px] font-semibold leading-[1.4] text-ink-500 sm:text-[13px]">
              운영 · 안전 · 결과정리까지 체계적으로 지원하여
            </p>
            <p className="mt-1 text-[18px] font-extrabold leading-[1.3] text-ink-900 sm:text-[22px]">
              학교 업무 부담을{" "}
              <span className="text-brand-700">줄입니다.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
