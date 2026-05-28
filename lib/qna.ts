import fs from "node:fs/promises";
import path from "node:path";
import type { ProgramCategoryId } from "@/lib/categories";

// 카테고리 상수/타입은 클라이언트 안전한 lib/categories에서 직접 import 하세요.
export type { ProgramCategoryId } from "@/lib/categories";

const DATA_DIR = process.env.DATA_DIR ?? path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "qna.jsonl");

export type QnaInput = {
  category: ProgramCategoryId;
  question: string;
  answer: string;
};

export type Qna = QnaInput & {
  id: string;
  createdAt: string;
};

function genId(): string {
  return (
    Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8)
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

export async function listQna(): Promise<Qna[]> {
  if (!(await fileExists())) return [];
  const txt = await fs.readFile(FILE, "utf8");
  return txt
    .split("\n")
    .filter(Boolean)
    .map((l) => {
      try {
        return JSON.parse(l) as Qna;
      } catch {
        return null;
      }
    })
    .filter((x): x is Qna => x !== null);
}

export async function appendQna(data: QnaInput): Promise<Qna> {
  await ensureDir();
  const qna: Qna = {
    id: genId(),
    createdAt: new Date().toISOString(),
    ...data,
  };
  await fs.appendFile(FILE, JSON.stringify(qna) + "\n", "utf8");
  return qna;
}

export async function deleteQna(id: string): Promise<boolean> {
  if (!(await fileExists())) return false;
  const all = await listQna();
  const remaining = all.filter((q) => q.id !== id);
  if (remaining.length === all.length) return false;
  await ensureDir();
  await fs.writeFile(
    FILE,
    remaining.map((q) => JSON.stringify(q)).join("\n") +
      (remaining.length > 0 ? "\n" : ""),
    "utf8",
  );
  return true;
}
