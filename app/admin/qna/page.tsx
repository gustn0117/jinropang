import type { Metadata } from "next";
import { cookies } from "next/headers";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";
import { listQna } from "@/lib/qna";
import AdminLogin from "../AdminLogin";
import AdminNav from "../AdminNav";
import QnaAdmin from "./QnaAdmin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "어드민 — Q&A 관리",
  robots: { index: false, follow: false },
};

export default async function AdminQnaPage() {
  const c = await cookies();
  const isAuth = isValidToken(c.get(COOKIE_NAME)?.value);
  if (!isAuth) return <AdminLogin />;
  const list = (await listQna()).reverse(); // 최신순
  return (
    <section className="container-pad py-10 lg:py-14">
      <p className="section-eyebrow">ADMIN</p>
      <h1 className="mt-3 text-[24px] font-bold leading-[1.3] text-ink-900 sm:text-[28px]">
        Q&A 관리
      </h1>
      <p className="mt-2 text-[14px] text-ink-600">
        등록한 Q&A는 즉시 Q&A 페이지에 노출됩니다.
      </p>
      <div className="mt-6">
        <AdminNav />
      </div>
      <QnaAdmin initialList={list} />
    </section>
  );
}
