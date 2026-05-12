import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        voggix: {
          blue: "#2563EB",
          violet: "#8B5CF6",
          pink: "#EC4899",
          navy: "#0F172A",
          black: "#071124",
          cloud: "#F8FAFC",
          cyan: "#22D3EE",
          ink: "#111827",
          muted: "#64748B",
          border: "#E2E8F0"
        }
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.10)",
        glow: "0 24px 80px rgba(37, 99, 235, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
