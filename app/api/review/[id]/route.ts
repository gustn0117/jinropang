import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  deleteReview,
  listReviews,
  saveImage,
  updateReview,
  type ReviewInput,
} from "@/lib/reviews";
import { isValidCategory, type ProgramCategoryId } from "@/lib/categories";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 30;

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
  const existing = (await listReviews()).find((r) => r.id === id);
  if (!existing) {
    return NextResponse.json({ ok: false, error: "not found" }, { status: 404 });
  }

  const ct = req.headers.get("content-type") ?? "";
  const patch: Partial<ReviewInput> = {};
  let imageFile: File | null = null;

  if (ct.startsWith("multipart/form-data")) {
    const fd = await req.formData();
    if (fd.has("category")) {
      const raw = String(fd.get("category") ?? "").trim();
      if (!isValidCategory(raw)) {
        return NextResponse.json(
          { ok: false, error: "카테고리가 올바르지 않습니다." },
          { status: 400 },
        );
      }
      patch.category = raw as ProgramCategoryId;
    }
    if (fd.has("title")) patch.title = String(fd.get("title") ?? "").trim();
    if (fd.has("body")) patch.body = String(fd.get("body") ?? "").trim();
    if (fd.has("badge")) {
      const b = String(fd.get("badge") ?? "").trim();
      patch.badge = b || undefined;
    }
    if (fd.has("meta")) {
      const m = String(fd.get("meta") ?? "").trim();
      patch.meta = m || undefined;
    }
    const img = fd.get("image");
    if (img instanceof File && img.size > 0) imageFile = img;
  } else {
    try {
      const json = await req.json();
      if (json.category !== undefined) {
        if (!isValidCategory(json.category)) {
          return NextResponse.json(
            { ok: false, error: "카테고리가 올바르지 않습니다." },
            { status: 400 },
          );
        }
        patch.category = json.category as ProgramCategoryId;
      }
      if (typeof json.title === "string") patch.title = json.title.trim();
      if (typeof json.body === "string") patch.body = json.body.trim();
      if (json.badge !== undefined)
        patch.badge =
          typeof json.badge === "string" && json.badge.trim()
            ? json.badge.trim()
            : undefined;
      if (json.meta !== undefined)
        patch.meta =
          typeof json.meta === "string" && json.meta.trim()
            ? json.meta.trim()
            : undefined;
    } catch {
      return NextResponse.json(
        { ok: false, error: "잘못된 요청" },
        { status: 400 },
      );
    }
  }

  if (patch.title !== undefined && !patch.title) {
    return NextResponse.json(
      { ok: false, error: "제목은 비울 수 없습니다." },
      { status: 400 },
    );
  }
  if (patch.body !== undefined && !patch.body) {
    return NextResponse.json(
      { ok: false, error: "본문은 비울 수 없습니다." },
      { status: 400 },
    );
  }

  // 이미지 교체가 있으면 먼저 저장
  if (imageFile) {
    const result = await saveImage(id, imageFile);
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: `이미지 업로드 실패: ${result.error}` },
        { status: 400 },
      );
    }
    patch.image = result.url;
  }

  const updated = await updateReview(id, patch);
  if (!updated) {
    return NextResponse.json({ ok: false, error: "not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, review: updated });
}
