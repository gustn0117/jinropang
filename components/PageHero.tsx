import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-hero-grad text-white">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" aria-hidden />
      <div className="container-pad relative z-10 py-16 sm:py-20">
        {breadcrumb && (
          <ol className="mb-5 flex flex-wrap items-center gap-1.5 text-[12px] leading-[1.4] text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                홈
              </Link>
            </li>
            {breadcrumb.map((b, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span aria-hidden>›</span>
                {b.href ? (
                  <Link href={b.href} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        )}
        <p className="text-[12px] leading-[1.3] font-semibold uppercase tracking-[0.18em] text-accent-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-[1.25] font-extrabold sm:text-5xl sm:leading-[1.15]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-white/85 sm:text-[17px] sm:leading-[1.8]">
          {description}
        </p>
      </div>
    </section>
  );
}
