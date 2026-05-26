import type { Metadata } from "next";
import { cookies } from "next/headers";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";
import { listInquiries } from "@/lib/inquiries";
import AdminLogin from "./AdminLogin";
import AdminTable from "./AdminTable";
import AdminNav from "./AdminNav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "어드민 — 견적 문의 관리",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const c = await cookies();
  const isAuth = isValidToken(c.get(COOKIE_NAME)?.value);
  if (!isAuth) return <AdminLogin />;
  const list = (await listInquiries()).reverse(); // 최신순
  return (
    <>
      <div className="container-pad pt-10 lg:pt-14">
        <AdminNav />
      </div>
      <AdminTable initialList={list} />
    </>
  );
}
