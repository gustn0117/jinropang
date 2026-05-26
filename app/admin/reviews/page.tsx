import type { Metadata } from "next";
import { cookies } from "next/headers";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";
import { listReviews } from "@/lib/reviews";
import AdminLogin from "../AdminLogin";
import AdminNav from "../AdminNav";
import ReviewsAdmin from "./ReviewsAdmin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "어드민 — 진행후기 관리",
  robots: { index: false, follow: false },
};

export default async function AdminReviewsPage() {
  const c = await cookies();
  const isAuth = isValidToken(c.get(COOKIE_NAME)?.value);
  if (!isAuth) return <AdminLogin />;
  const list = (await listReviews()).reverse(); // 최신순
  return (
    <section className="container-pad py-10 lg:py-14">
      <p className="section-eyebrow">ADMIN</p>
      <h1 className="mt-3 text-[24px] font-bold leading-[1.3] text-ink-900 sm:text-[28px]">
        진행 후기 관리
      </h1>
      <p className="mt-2 text-[14px] text-ink-600">
        등록한 후기는 즉시 진행후기 페이지 상단에 노출됩니다.
      </p>
      <div className="mt-6">
        <AdminNav />
      </div>
      <ReviewsAdmin initialList={list} />
    </section>
  );
}
