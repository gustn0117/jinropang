import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";
import { appendQna, listQna } from "@/lib/qna";
import { isValidCategory } from "@/lib/categories";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const list = await listQna();
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

  let category: unknown;
  let question = "";
  let answer = "";
  try {
    const json = await req.json();
    category = json.category;
    question = typeof json.question === "string" ? json.question.trim() : "";
    answer = typeof json.answer === "string" ? json.answer.trim() : "";
  } catch {
    return NextResponse.json(
      { ok: false, error: "잘못된 요청" },
      { status: 400 },
    );
  }

  if (!isValidCategory(category)) {
    return NextResponse.json(
      { ok: false, error: "카테고리가 올바르지 않습니다." },
      { status: 400 },
    );
  }
  if (!question || !answer) {
    return NextResponse.json(
      { ok: false, error: "질문과 답변은 필수입니다." },
      { status: 400 },
    );
  }

  const qna = await appendQna({ category, question, answer });
  return NextResponse.json({ ok: true, qna });
}
