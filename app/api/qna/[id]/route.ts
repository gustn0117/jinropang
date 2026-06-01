import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";
import { deleteQna, updateQna, type QnaInput } from "@/lib/qna";
import { isValidCategory, type ProgramCategoryId } from "@/lib/categories";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const c = await cookies();
  if (!isValidToken(c.get(COOKIE_NAME)?.value)) {
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401 },
    );
  }
  const { id } = await params;
  const ok = await deleteQna(id);
  if (!ok) {
    return NextResponse.json(
      { ok: false, error: "삭제 대상이 없습니다." },
      { status: 404 },
    );
  }
  return NextResponse.json({ ok: true });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const c = await cookies();
  if (!isValidToken(c.get(COOKIE_NAME)?.value)) {
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401 },
    );
  }
  const { id } = await params;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "잘못된 요청" },
      { status: 400 },
    );
  }

  const patch: Partial<QnaInput> = {};
  if (body.category !== undefined) {
    if (!isValidCategory(body.category)) {
      return NextResponse.json(
        { ok: false, error: "카테고리가 올바르지 않습니다." },
        { status: 400 },
      );
    }
    patch.category = body.category as ProgramCategoryId;
  }
  if (typeof body.question === "string") patch.question = body.question.trim();
  if (typeof body.answer === "string") patch.answer = body.answer.trim();

  if (patch.question !== undefined && !patch.question) {
    return NextResponse.json(
      { ok: false, error: "질문은 비울 수 없습니다." },
      { status: 400 },
    );
  }
  if (patch.answer !== undefined && !patch.answer) {
    return NextResponse.json(
      { ok: false, error: "답변은 비울 수 없습니다." },
      { status: 400 },
    );
  }

  const updated = await updateQna(id, patch);
  if (!updated) {
    return NextResponse.json(
      { ok: false, error: "대상을 찾을 수 없습니다." },
      { status: 404 },
    );
  }
  return NextResponse.json({ ok: true, qna: updated });
}
