export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="40" height="40" rx="10" fill="url(#g)" />
        <path
          d="M11 28V12h7.4c4 0 6.6 2.1 6.6 5.5 0 2.6-1.6 4.4-4.1 5.1l4.5 5.4h-3.7l-4.1-5h-3.5v5H11Zm3.1-7.4h4.2c2.2 0 3.5-1 3.5-2.8 0-1.7-1.3-2.7-3.5-2.7h-4.2v5.5Z"
          fill="white"
        />
        <circle cx="29" cy="13" r="2.5" fill="#FFC94A" />
        <defs>
          <linearGradient
            id="g"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1D39AD" />
            <stop offset="1" stopColor="#3866F5" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[17px] leading-[1.2] font-extrabold tracking-tight text-ink-900">
        진로팡
      </span>
    </span>
  );
}
