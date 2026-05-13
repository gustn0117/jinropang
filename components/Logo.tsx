type Props = {
  className?: string;
  /** Tailwind 높이 클래스 (예: "h-9", "h-14"). 너비는 auto로 비율 유지 */
  sizeClassName?: string;
};

export default function Logo({ className = "", sizeClassName = "h-9" }: Props) {
  return (
    <img
      src="/logo.png"
      alt="진로팡"
      width={160}
      height={65}
      className={`${sizeClassName} w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
