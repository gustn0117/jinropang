export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[19px] font-extrabold leading-[1.2] tracking-[-0.01em] text-ink-900 ${className}`}
    >
      진로팡
    </span>
  );
}
