import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  /** 히어로 배경 이미지 경로 (옵션). 지정 시 사진 위에 네이비 오버레이가 깔립니다. */
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
      )}
      {!image && (
        <div aria-hidden className="absolute inset-0 bg-hero-grad" />
      )}
      {/* 네이비 그라데이션 오버레이 — 텍스트 가독성 확보 */}
      {image && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-brand-900/85 via-brand-900/55 to-brand-900/70"
        />
      )}
      {/* 아주 옅은 라인 텍스처 + 상단 광원 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
      />
      <div className="container-pad relative flex min-h-[300px] flex-col justify-end pb-12 pt-24 sm:min-h-[340px] sm:pb-14 sm:pt-28">
        {breadcrumb && (
          <ol className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] leading-[1.5] text-white/55">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                홈
              </Link>
            </li>
            {breadcrumb.map((b, i) => (
              <li key={i} className="flex items-center gap-2">
                <span aria-hidden className="text-white/35">
                  /
                </span>
                {b.href ? (
                  <Link
                    href={b.href}
                    className="transition-colors hover:text-white"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        )}
        {eyebrow && (
          <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.14em] text-white/65">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-[28px] font-bold leading-[1.25] drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] sm:text-[36px] sm:leading-[1.2] lg:text-[44px]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-white/85 sm:text-[16px] sm:leading-[1.75]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
