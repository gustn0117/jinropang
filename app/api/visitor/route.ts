import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getStats, incrementVisitor } from "@/lib/visitors";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const COOKIE = "jp_visited";

// GET: 현재 통계 조회만 (증가 없음)
export async function GET() {
  const stats = await getStats();
  return NextResponse.json({ ok: true, ...stats });
}

// POST: 방문 카운트 증가 (하루에 한 번만, 쿠키로 dedup)
export async function POST() {
  const c = await cookies();
  const visited = c.get(COOKIE)?.value;
  const today = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);

  // 같은 방문자가 오늘 이미 카운트된 경우 — 증가 없이 현재값만 반환
  if (visited === today) {
    const stats = await getStats();
    return NextResponse.json({ ok: true, counted: false, ...stats });
  }

  const stats = await incrementVisitor();
  // 쿠키 만료: 한국 시간 자정 직후까지 — 단순화를 위해 24시간
  c.set(COOKIE, today, {
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    httpOnly: false,
    path: "/",
  });
  return NextResponse.json({ ok: true, counted: true, ...stats });
}
