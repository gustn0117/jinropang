import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  appendReview,
  listReviews,
  saveImage,
  updateReview,
} from "@/lib/reviews";
import { isValidCategory, type ProgramCategoryId } from "@/lib/categories";
import { COOKIE_NAME, isValidToken } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
// 이미지 업로드(최대 8MB)를 위해 큰 본문 허용
export const maxDuration = 30;

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

  const ct = req.headers.get("content-type") ?? "";
  let title = "";
  let reviewBody = "";
  let badge: string | undefined;
  let meta: string | undefined;
  let categoryRaw: unknown;
  let imageFile: File | null = null;

  if (ct.startsWith("multipart/form-data")) {
    const fd = await req.formData();
    title = String(fd.get("title") ?? "").trim();
    reviewBody = String(fd.get("body") ?? "").trim();
    const b = String(fd.get("badge") ?? "").trim();
    const m = String(fd.get("meta") ?? "").trim();
    categoryRaw = String(fd.get("category") ?? "").trim();
    badge = b || undefined;
    meta = m || undefined;
    const img = fd.get("image");
    if (img instanceof File && img.size > 0) imageFile = img;
  } else {
    // JSON fallback (이미지 없이)
    try {
      const json = await req.json();
      title = typeof json.title === "string" ? json.title.trim() : "";
      reviewBody = typeof json.body === "string" ? json.body.trim() : "";
      badge =
        typeof json.badge === "string" && json.badge.trim()
          ? json.badge.trim()
          : undefined;
      meta =
        typeof json.meta === "string" && json.meta.trim()
          ? json.meta.trim()
          : undefined;
      categoryRaw = json.category;
    } catch {
      return NextResponse.json(
        { ok: false, error: "잘못된 요청" },
        { status: 400 },
      );
    }
  }

  if (!title || !reviewBody) {
    return NextResponse.json(
      { ok: false, error: "제목과 본문은 필수입니다." },
      { status: 400 },
    );
  }
  if (!isValidCategory(categoryRaw)) {
    return NextResponse.json(
      { ok: false, error: "카테고리가 올바르지 않습니다." },
      { status: 400 },
    );
  }
  const category: ProgramCategoryId = categoryRaw;

  // 1) 본문 먼저 저장 → ID 확보
  let review = await appendReview({ category, title, body: reviewBody, badge, meta });

  // 2) 이미지가 있으면 ID 기반 파일명으로 저장 후 record 업데이트
  if (imageFile) {
    const result = await saveImage(review.id, imageFile);
    if (result.ok) {
      const updated = await updateReview(review.id, { image: result.url });
      if (updated) review = updated;
    } else {
      return NextResponse.json(
        { ok: true, review, warning: `이미지 업로드 실패: ${result.error}` },
      );
    }
  }

  return NextResponse.json({ ok: true, review });
}
