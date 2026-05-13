import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "찾아가는 미래교육 진로팡";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #0f1a45 0%, #1d39ad 45%, #3866f5 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#FFC94A",
              color: "#1D39AD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 36,
            }}
          >
            R
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5, display: "flex" }}>
            진로팡
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#FFC94A",
              fontWeight: 700,
              display: "flex",
            }}
          >
            FUTURE EDUCATION FOR EVERY SCHOOL
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
              whiteSpace: "pre",
            }}
          >
            {"학교로 찾아가는\n미래교육 진로체험"}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 500,
              display: "flex",
            }}
          >
            로봇 · 코딩 · AI · 메타버스 · VR · 드론
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <span style={{ display: "flex" }}>전국 학교·기관 출강 · 6단계 안전운영</span>
          <span style={{ fontWeight: 800, color: "white", display: "flex" }}>1668-1758</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
