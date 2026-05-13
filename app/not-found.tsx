import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="chip">404</span>
      <h1 className="mt-5 text-3xl leading-[1.25] font-extrabold text-ink-900 sm:text-4xl sm:leading-[1.2]">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-3 max-w-md text-[14px] leading-[1.8] text-ink-700">
        주소가 변경되었거나 더 이상 사용되지 않는 페이지입니다. 아래 메뉴로
        진로팡 사이트를 계속 둘러보실 수 있습니다.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Link href="/" className="btn-primary">
          홈으로 가기
        </Link>
        <Link href="/contact" className="btn-secondary">
          상담 신청
        </Link>
      </div>
    </section>
  );
}
