import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { appendInquiry, listInquiries } from "@/lib/inquiries";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "잘못된 요청" }, { status: 400 });
  }
  const required = ["school", "name", "phone"] as const;
  for (const k of required) {
    if (typeof body[k] !== "string" || !(body[k] as string).trim()) {
      return NextResponse.json(
        { ok: false, error: `'${k}' 필수 항목이 누락되었습니다.` },
        { status: 400 },
      );
    }
  }
  const pick = (k: string) =>
    typeof body[k] === "string" ? (body[k] as string).trim() : undefined;
  const inquiry = await appendInquiry({
    type: pick("type"),
    school: pick("school"),
    name: pick("name"),
    phone: pick("phone"),
    grade: pick("grade"),
    count: pick("count"),
    date: pick("date"),
    memo: pick("memo"),
  });
  return NextResponse.json({ ok: true, id: inquiry.id });
}

export async function GET() {
  const c = await cookies();
  if (!isValidToken(c.get(COOKIE_NAME)?.value)) {
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401 },
    );
  }
  const list = await listInquiries();
  list.reverse(); // 최신순
  return NextResponse.json({ ok: true, list });
}
