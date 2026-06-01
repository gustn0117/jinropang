/**
 * 진행후기·Q&A 공통 카테고리 (3종).
 * 클라이언트 컴포넌트에서도 import 하므로, Node 전용 모듈에 의존하지 않습니다.
 */
export const PROGRAM_CATEGORIES = [
  { id: "elementary", label: "초등 프로그램" },
  { id: "secondary", label: "중·고등 프로그램" },
  { id: "event", label: "행사부스 프로그램" },
] as const;

export type ProgramCategoryId = (typeof PROGRAM_CATEGORIES)[number]["id"];

export function isValidCategory(id: unknown): id is ProgramCategoryId {
  return (
    typeof id === "string" &&
    PROGRAM_CATEGORIES.some((c) => c.id === id)
  );
}

export function categoryLabel(id: ProgramCategoryId): string {
  return PROGRAM_CATEGORIES.find((c) => c.id === id)?.label ?? "";
}
