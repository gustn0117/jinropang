import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { appendReview, listReviews } from "@/lib/reviews";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  // 공개: 후기 페이지에서도 사용
  const list = await listReviews();
  list.reverse(); // 최신순
  return NextResponse.json({ ok: true, list });
}

export async function POST(req: NextRequest) {
  const c = await cookies();
  if (!isValidToken(c.get(COOKIE_NAME)?.value)) {
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401 },
    );
  }
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "잘못된 요청" }, { status: 400 });
  }
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const reviewBody = typeof body.body === "string" ? body.body.trim() : "";
  if (!title || !reviewBody) {
    return NextResponse.json(
      { ok: false, error: "제목과 본문은 필수입니다." },
      { status: 400 },
    );
  }
  const pick = (k: string) =>
    typeof body[k] === "string" ? (body[k] as string).trim() : undefined;
  const review = await appendReview({
    title,
    body: reviewBody,
    badge: pick("badge"),
    meta: pick("meta"),
  });
  return NextResponse.json({ ok: true, review });
}
