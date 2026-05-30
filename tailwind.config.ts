import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        telegram: {
          50: "#eff9ff",
          100: "#dff3ff",
          200: "#b8e8ff",
          300: "#80d8ff",
          500: "#2aabee",
          600: "#229ed9",
          700: "#147fba",
          800: "#0f6698"
        },
        ink: "#102033"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 32, 51, 0.10)",
        card: "0 14px 40px rgba(16, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
