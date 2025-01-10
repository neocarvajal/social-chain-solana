import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
          foreground: "#FFFFFF",
        },
        dapp: {
          background: "#121212",
          card: "#1E1E1E",
          border: "#2D2D2D",
          text: "#FFFFFF",
          textSecondary: "#A3A3A3",
        },
        solana: {
          purple: "#9945FF",
          green: "#14F195",
          blue: "#00C2FF",
          pink: "#FF3B9A",
        },
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slideUp: "slideUp 0.3s ease-out",
        fadeIn: "fadeIn 0.3s ease-out",
        rotate360: "rotate360 1s linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;