import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dae6ff",
          200: "#bdd2ff",
          300: "#8db4ff",
          400: "#5a8dff",
          500: "#3866f5",
          600: "#2347d6",
          700: "#1d39ad",
          800: "#1d3389",
          900: "#1c2f6e",
          950: "#0f1a45",
        },
        accent: {
          400: "#ffc94a",
          500: "#ffb420",
          600: "#e89500",
        },
        ink: {
          900: "#0b1020",
          800: "#1a1f33",
          700: "#2a3043",
          500: "#535a72",
          300: "#a0a6bb",
          100: "#e6e8ef",
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
        soft: "0 10px 30px -10px rgba(15, 26, 69, 0.18)",
        ring: "0 0 0 4px rgba(56, 102, 245, 0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "hero-grad":
          "linear-gradient(135deg, #0f1a45 0%, #1d39ad 45%, #3866f5 100%)",
        "soft-grad":
          "linear-gradient(180deg, #f7f9ff 0%, #ffffff 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
