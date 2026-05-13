export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="40" height="40" rx="3" fill="#0f3a82" />
        <path
          d="M11 28V12h7.4c4 0 6.6 2.1 6.6 5.5 0 2.6-1.6 4.4-4.1 5.1l4.5 5.4h-3.7l-4.1-5h-3.5v5H11Zm3.1-7.4h4.2c2.2 0 3.5-1 3.5-2.8 0-1.7-1.3-2.7-3.5-2.7h-4.2v5.5Z"
          fill="white"
        />
      </svg>
      <span className="text-[17px] font-extrabold leading-[1.2] tracking-[-0.01em] text-ink-900">
        진로팡
      </span>
    </span>
  );
}
