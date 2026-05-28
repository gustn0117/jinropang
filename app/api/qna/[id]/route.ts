import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";
import { deleteQna } from "@/lib/qna";

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
