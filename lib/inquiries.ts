import fs from "node:fs/promises";
import path from "node:path";

/** Docker 컨테이너에선 docker-compose가 /app/data를 영구 볼륨으로 마운트함 */
const DATA_DIR = process.env.DATA_DIR ?? path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "inquiries.jsonl");

export type InquiryInput = {
  type?: string;
  school?: string;
  name?: string;
  phone?: string;
  grade?: string;
  count?: string;
  date?: string;
  budget?: string;
  memo?: string;
};

export type Inquiry = InquiryInput & {
  id: string;
  createdAt: string;
};

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

export async function appendInquiry(data: InquiryInput): Promise<Inquiry> {
  await ensureDir();
  const inquiry: Inquiry = {
    id: genId(),
    createdAt: new Date().toISOString(),
    ...data,
  };
  await fs.appendFile(FILE, JSON.stringify(inquiry) + "\n", "utf8");
  return inquiry;
}

export async function listInquiries(): Promise<Inquiry[]> {
  try {
    const txt = await fs.readFile(FILE, "utf8");
    return txt
      .split("\n")
      .filter(Boolean)
      .map((l) => {
        try {
          return JSON.parse(l) as Inquiry;
        } catch {
          return null;
        }
      })
      .filter((x): x is Inquiry => x !== null);
  } catch (e: unknown) {
    if (
      typeof e === "object" &&
      e !== null &&
      "code" in e &&
      (e as { code?: string }).code === "ENOENT"
    ) {
      return [];
    }
    throw e;
  }
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const all = await listInquiries();
  const remaining = all.filter((i) => i.id !== id);
  if (remaining.length === all.length) return false;
  await ensureDir();
  await fs.writeFile(
    FILE,
    remaining.map((i) => JSON.stringify(i)).join("\n") +
      (remaining.length > 0 ? "\n" : ""),
    "utf8",
  );
  return true;
}
