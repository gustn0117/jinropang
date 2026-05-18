/**
 * 어드민 인증 헬퍼 — 비밀번호 기반 단일 세션 쿠키.
 * 보안 수준: 1명 운영자용 저수준. 비밀번호 변경은 ADMIN_PASSWORD 환경변수로 override.
 */
export const COOKIE_NAME = "jinropang_admin";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "1234";
const ADMIN_TOKEN =
  process.env.ADMIN_SESSION_TOKEN ?? "jp-admin-7q9k3xz5m8n2v4b1tk5p";

export function verifyPassword(input: unknown): boolean {
  return typeof input === "string" && input === ADMIN_PASSWORD;
}

export function getToken(): string {
  return ADMIN_TOKEN;
}

export function isValidToken(input: string | undefined): boolean {
  return input === ADMIN_TOKEN;
}
