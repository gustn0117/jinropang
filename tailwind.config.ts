import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 딥 네이비블루 — 절제된 포인트 컬러
        brand: {
          50: "#eef2f8",
          100: "#dde4f0",
          200: "#bccbe0",
          300: "#8aa5c7",
          400: "#5378a8",
          500: "#244f8c",
          600: "#143d75",
          700: "#0f3a82",
          800: "#0a2a60",
          900: "#0b1322",
          950: "#070d18",
        },
        // 무채색 잉크 + 라인
        ink: {
          900: "#0b1220",
          800: "#1b2433",
          700: "#3b4658",
          600: "#586173",
          500: "#6b7280",
          400: "#9aa1ad",
          300: "#c4c9d1",
          100: "#e5e7eb",
          50: "#f5f6f8",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(11, 19, 34, 0.12)",
        ring: "0 0 0 3px rgba(15, 58, 130, 0.14)",
      },
      maxWidth: {
        site: "1280px",
      },
      backgroundImage: {
        "hero-grad": "linear-gradient(140deg, #0b1322 0%, #0f3a82 100%)",
        "soft-grad": "linear-gradient(0deg, #f5f6f8 0%, #f5f6f8 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.16)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease-out both",
        slowZoom: "slowZoom 9s ease-out forwards",
        fade: "fade 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
