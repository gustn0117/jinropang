import { NextResponse } from "next/server";
import { readImage } from "@/lib/reviews";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> },
) {
  const { file } = await params;
  const img = await readImage(file);
  if (!img) return new NextResponse("not found", { status: 404 });
  return new NextResponse(img.data as unknown as BodyInit, {
    headers: {
      "Content-Type": img.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
