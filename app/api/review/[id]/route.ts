import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteReview } from "@/lib/reviews";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function DELETE(
  _req: Request,
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
  const removed = await deleteReview(id);
  if (!removed) {
    return NextResponse.json({ ok: false, error: "not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
