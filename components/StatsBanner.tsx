const STATS = [
  {
    badge: "2026년 실적",
    value: "120+",
    label: "운영 학교·기관",
    sub: "전국 초·중·고 및 기관",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
        <path
          d="M24 5 8 13v3h32v-3L24 5Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M10 18v22h28V18M16 22v14M24 22v14M32 22v14"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M6 41h36"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect x="22" y="9" width="4" height="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    badge: "2026년 실적",
    value: "18,000+",
    label: "누적 참여 학생",
    sub: "다양한 학년 대상 운영",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
        <circle cx="17" cy="17" r="6" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="32" cy="20" r="5" stroke="currentColor" strokeWidth="2.4" />
        <path
          d="M5 40c0-6.5 5.5-11 12-11s12 4.5 12 11"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M28 31c5 0 12 3 12 9"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    badge: "2026년 실적",
    value: "300+",
    label: "연간 운영 프로그램",
    sub: "체험부스·진로교육·캠프 등",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
        <rect x="7" y="10" width="34" height="32" rx="3" stroke="currentColor" strokeWidth="2.4" />
        <path d="M7 19h34" stroke="currentColor" strokeWidth="2.4" />
        <path d="M15 6v8M33 6v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="14" y="25" width="6" height="5" fill="currentColor" />
        <rect x="28" y="25" width="6" height="5" fill="currentColor" />
        <rect x="14" y="33" width="6" height="5" fill="currentColor" opacity="0.6" />
        <rect x="28" y="33" width="6" height="5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    badge: null,
    value: "결과보고서 제공",
    label: "교사 활용형 자료 지원",
    sub: "창체·진로활동 운영 지원",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
        <path
          d="M11 6h17l9 9v27H11z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M28 6v9h9" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path
          d="M16 24h16M16 30h16M16 36h10"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    badge: null,
    value: "학교 운영 경험 기반",
    label: "전문 강사진",
    sub: "소수정예·검증된 강사 진행",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
        <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="2.4" />
        <path
          d="M9 42c0-7 6.7-12 15-12s15 5 15 12"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="m35 9 1.6 3.4L40 13l-2.4 2.2.6 3.4L35 17l-3.2 1.6.6-3.4L30 13l3.4-.6L35 9Z"
          fill="currentColor"
        />
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
    <>
      <section className="bg-brand-900 text-white">
        <div className="container-pad shell-pad py-12 lg:py-16">
          {/* 5 stat cards */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-2">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center ${
                  i > 0 ? "lg:border-l lg:border-white/15 lg:pl-2" : ""
                }`}
              >
                {s.badge ? (
                  <span className="rounded-[2px] bg-brand-700 px-2.5 py-1 text-[11px] font-bold tracking-[0.04em] text-white">
                    {s.badge}
                  </span>
                ) : (
                  <span className="h-[24px]" aria-hidden />
                )}
                <span className="mt-4 inline-flex h-[52px] w-[52px] items-center justify-center text-brand-300">
                  {s.icon}
                </span>
                <p
                  className={`mt-4 font-bold leading-[1.2] tabular-nums ${
                    s.badge ? "text-[28px] sm:text-[34px]" : "text-[17px] sm:text-[19px]"
                  }`}
                >
                  {s.value}
                </p>
                <p className="mt-1.5 text-[14px] font-semibold leading-[1.35] text-white">
                  {s.label}
                </p>
                <p className="mt-2 text-[12.5px] leading-[1.5] text-white/55">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>

          {/* 4개 지역 거점 운영 */}
          <div className="mt-10 rounded-[3px] border border-white/10 bg-brand-900/60 p-5 sm:mt-12 sm:flex sm:items-center sm:gap-6 sm:p-6">
            <div className="flex items-center gap-3 shrink-0">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-300" fill="none" aria-hidden>
                <path
                  d="M12 22s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <p className="text-[15px] font-bold leading-[1.3] sm:text-[16px]">
                4개 지역<br className="sm:hidden" /> 거점 운영
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-0 sm:flex sm:flex-1 sm:flex-wrap">
              {REGIONS.map((r) => (
                <div key={r.name} className="flex items-center gap-2.5">
                  <span className="rounded-full bg-brand-700 px-2.5 py-1 text-[11.5px] font-bold text-white">
                    {r.name}
                  </span>
                  <span className="text-[12.5px] text-white/70 sm:text-[13px]">
                    {r.cities}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 하단 메시지 — 학교 업무 부담을 줄입니다 */}
      <section className="bg-soft-grad">
        <div className="container-pad shell-pad py-8 lg:py-12">
          <div className="flex items-center gap-5 rounded-[3px] border border-ink-100 bg-white px-5 py-6 sm:gap-7 sm:px-8 sm:py-7">
            {/* 좌측 방패+학사모 아이콘 */}
            <svg
              viewBox="0 0 48 48"
              className="hidden h-14 w-14 shrink-0 text-brand-700 sm:block"
              fill="none"
              aria-hidden
            >
              <path
                d="M24 4 6 10v12c0 11 8 19 18 22 10-3 18-11 18-22V10L24 4Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path
                d="m14 22 10-5 10 5-10 5-10-5Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
                fill="currentColor"
                fillOpacity="0.15"
              />
              <path
                d="M30 24v6c0 1.5-2.7 2.5-6 2.5s-6-1-6-2.5v-6"
                stroke="currentColor"
                strokeWidth="2.2"
              />
            </svg>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold leading-[1.4] text-ink-700 sm:text-[14.5px]">
                운영 · 안전 · 결과정리까지 체계적으로 지원하여
              </p>
              <p className="mt-1 text-[20px] font-extrabold leading-[1.25] text-ink-900 sm:text-[26px]">
                <span className="bg-gradient-to-b from-transparent from-[62%] to-amber-300 to-[62%] pb-0.5">
                  학교 업무 부담
                </span>
                을 줄입니다.
              </p>
            </div>
            {/* 우측 클립보드 아이콘 */}
            <svg
              viewBox="0 0 48 48"
              className="hidden h-14 w-14 shrink-0 text-brand-700 sm:block"
              fill="none"
              aria-hidden
            >
              <rect x="10" y="9" width="28" height="33" rx="3" stroke="currentColor" strokeWidth="2.2" />
              <rect x="18" y="5" width="12" height="6" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
              <path d="m16 22 4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m16 33 4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
