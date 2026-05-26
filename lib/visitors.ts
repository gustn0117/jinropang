import fs from "node:fs/promises";
import path from "node:path";

const DATA_DIR = process.env.DATA_DIR ?? path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "visitors.json");

export type VisitorStats = {
  total: number;
  today: number;
  todayKey: string;
};

type StoredStats = {
  total: number;
  daily: Record<string, number>;
};

function todayKeyKST(): string {
  // KST = UTC+9. ISO 날짜만 추출 (YYYY-MM-DD)
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

async function readStore(): Promise<StoredStats> {
  try {
    const txt = await fs.readFile(FILE, "utf8");
    const data = JSON.parse(txt) as StoredStats;
    return {
      total: typeof data.total === "number" ? data.total : 0,
      daily: typeof data.daily === "object" && data.daily !== null ? data.daily : {},
    };
  } catch {
    return { total: 0, daily: {} };
  }
}

async function writeStore(s: StoredStats): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(s), "utf8");
}

export async function getStats(): Promise<VisitorStats> {
  const s = await readStore();
  const key = todayKeyKST();
  return { total: s.total, today: s.daily[key] ?? 0, todayKey: key };
}

export async function incrementVisitor(): Promise<VisitorStats> {
  const s = await readStore();
  const key = todayKeyKST();
  s.total += 1;
  s.daily[key] = (s.daily[key] ?? 0) + 1;
  // 30일 이상 지난 일별 키 정리 (파일 크기 무한 증가 방지)
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const cutoffKey = new Date(cutoff.getTime() + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  for (const k of Object.keys(s.daily)) {
    if (k < cutoffKey) delete s.daily[k];
  }
  await writeStore(s);
  return { total: s.total, today: s.daily[key], todayKey: key };
}
