import fs from "node:fs/promises";
import path from "node:path";
import type { ProgramCategoryId } from "@/lib/categories";

const DATA_DIR = process.env.DATA_DIR ?? path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "reviews.jsonl");
const IMG_DIR = path.join(DATA_DIR, "review-images");

export type ReviewInput = {
  /** 3개 카테고리 중 하나 (기존 데이터 호환 위해 선택적) */
  category?: ProgramCategoryId;
  badge?: string;
  title: string;
  body: string;
  meta?: string;
  image?: string;
};

export type Review = ReviewInput & {
  id: string;
  createdAt: string;
};

/* ===== 이미지 업로드 처리 ===== */
const ALLOWED_IMG = new Map<string, string>([
  ["image/jpeg", "jpg"],
  ["image/jpg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);
const MAX_IMG_SIZE = 8 * 1024 * 1024; // 8 MB

export type ImageSaveResult =
  | { ok: true; filename: string; url: string }
  | { ok: false; error: string };

export async function saveImage(
  reviewId: string,
  file: File,
): Promise<ImageSaveResult> {
  const ext = ALLOWED_IMG.get(file.type);
  if (!ext) return { ok: false, error: "지원하지 않는 형식 (jpg/png/webp만 가능)" };
  if (file.size === 0)
    return { ok: false, error: "빈 파일" };
  if (file.size > MAX_IMG_SIZE)
    return { ok: false, error: "8MB를 초과할 수 없습니다" };
  await fs.mkdir(IMG_DIR, { recursive: true });
  const filename = `${reviewId}.${ext}`;
  const buf = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(IMG_DIR, filename), buf);
  return { ok: true, filename, url: `/api/review-image/${filename}` };
}

export async function readImage(
  filename: string,
): Promise<{ data: Buffer; contentType: string } | null> {
  if (!filename || filename.includes("/") || filename.includes(".."))
    return null;
  const ext = path.extname(filename).slice(1).toLowerCase();
  const types: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
  };
  const contentType = types[ext];
  if (!contentType) return null;
  try {
    const data = await fs.readFile(path.join(IMG_DIR, filename));
    return { data, contentType };
  } catch {
    return null;
  }
}

async function deleteImageByUrl(imageUrl?: string): Promise<void> {
  if (!imageUrl) return;
  const filename = imageUrl.replace(/^\/api\/review-image\//, "");
  if (!filename || filename.includes("/") || filename.includes("..")) return;
  try {
    await fs.unlink(path.join(IMG_DIR, filename));
  } catch {
    /* 파일이 이미 없거나 권한 없음 — 무시 */
  }
}

const SEED: ReviewInput[] = [
  {
    category: "elementary",
    badge: "초등 진로체험",
    title: "5-6학년 코딩 드론 미션 비행",
    body: "안전 펜스 운영 덕분에 5-6학년 60명이 두 시간 동안 사고 없이 즐겁게 비행 미션을 끝냈습니다. 강사 분들이 학생 통제와 안내까지 잘 해 주셨어요.",
    meta: "수도권 초등학교 · 60명 · 120분",
  },
  {
    category: "secondary",
    badge: "중학교 진로의 날",
    title: "VR 진로직업 체험 + AI 데이터 워크숍",
    body: "VR과 워크숍을 동시 운영해 학생들이 흥미를 잃지 않고 두 가지 미래기술을 함께 경험했습니다. 워크북까지 제공해 사후 활동도 수월했습니다.",
    meta: "지방 중학교 · 180명 · 4교시 분산 운영",
  },
  {
    category: "secondary",
    badge: "고등학교 캠프",
    title: "로봇 엔지니어링 캠프 (2일)",
    body: "PID 튜닝까지 깊이 있게 다뤄 주셔서 학생부에 기록할 수 있는 결과물이 나왔습니다. 진로 포트폴리오용으로 매우 만족합니다.",
    meta: "특목고 · 24명 · 2일 캠프",
  },
  {
    category: "event",
    badge: "학교 축제",
    title: "AI 포토 + VR + 로봇 대결 부스 패키지",
    body: "회전이 빠른 부스 위주로 구성해 줄이 길게 늘어졌지만 대기 시간이 짧았어요. MC 진행 지원까지 받아 행사 분위기가 좋았습니다.",
    meta: "도심 고등학교 축제 · 800명 · 6시간",
  },
  {
    category: "event",
    badge: "교육청 대회",
    title: "지역 코딩·로봇 경진대회 운영",
    body: "기획·요강 작성부터 심사·시상까지 모두 맡겨 행사 운영이 정말 편했습니다. 사후 보고서도 깔끔하게 정리해 주셔서 결재가 빨랐습니다.",
    meta: "교육청 주관 대회 · 참가팀 32팀",
  },
  {
    category: "event",
    badge: "기관 행사",
    title: "지역 어린이 과학 한마당 부스 운영",
    body: "메이커 미니키트와 메타버스 진로존을 함께 운영해 어린이와 학부모 모두 즐거워했습니다. 안전 동선 분리 운영이 인상적이었습니다.",
    meta: "지자체 주관 행사 · 500명 · 4시간",
  },
];

function genId(): string {
  return (
    Date.now().toString(36) +
    "-" +
    Math.random().toString(36).slice(2, 8)
  );
}

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function fileExists(): Promise<boolean> {
  try {
    await fs.access(FILE);
    return true;
  } catch {
    return false;
  }
}

async function seedIfMissing(): Promise<void> {
  await ensureDir();
  if (await fileExists()) return;
  // 기본 후기 6건을 초기 데이터로 적재 (작성 시각: 과거 일자 분산)
  const base = Date.now();
  const seeded: Review[] = SEED.map((s, i) => ({
    id: `seed-${(i + 1).toString().padStart(2, "0")}`,
    createdAt: new Date(base - (SEED.length - i) * 86400000).toISOString(),
    ...s,
  }));
  await fs.writeFile(
    FILE,
    seeded.map((r) => JSON.stringify(r)).join("\n") + "\n",
    "utf8",
  );
}

export async function listReviews(): Promise<Review[]> {
  await seedIfMissing();
  const txt = await fs.readFile(FILE, "utf8");
  return txt
    .split("\n")
    .filter(Boolean)
    .map((l) => {
      try {
        return JSON.parse(l) as Review;
      } catch {
        return null;
      }
    })
    .filter((x): x is Review => x !== null);
}

export async function appendReview(data: ReviewInput): Promise<Review> {
  await ensureDir();
  // seed가 없다면 먼저 채워두기
  if (!(await fileExists())) await seedIfMissing();
  const review: Review = {
    id: genId(),
    createdAt: new Date().toISOString(),
    ...data,
  };
  await fs.appendFile(FILE, JSON.stringify(review) + "\n", "utf8");
  return review;
}

export async function updateReview(
  id: string,
  patch: Partial<ReviewInput>,
): Promise<Review | null> {
  if (!(await fileExists())) return null;
  const all = await listReviews();
  const idx = all.findIndex((r) => r.id === id);
  if (idx < 0) return null;
  all[idx] = { ...all[idx], ...patch };
  await fs.writeFile(
    FILE,
    all.map((r) => JSON.stringify(r)).join("\n") + "\n",
    "utf8",
  );
  return all[idx];
}

export async function deleteReview(id: string): Promise<boolean> {
  if (!(await fileExists())) return false;
  const all = await listReviews();
  const target = all.find((r) => r.id === id);
  if (!target) return false;
  // 첨부 이미지 함께 삭제
  await deleteImageByUrl(target.image);
  const remaining = all.filter((r) => r.id !== id);
  await ensureDir();
  await fs.writeFile(
    FILE,
    remaining.map((r) => JSON.stringify(r)).join("\n") +
      (remaining.length > 0 ? "\n" : ""),
    "utf8",
  );
  return true;
}
