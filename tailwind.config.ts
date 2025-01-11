import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "glow-pulse": "glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 25px rgba(231, 84, 0, 0.2), 0 0 50px rgba(231, 84, 0, 0.1)",
          },
          "50%": {
            textShadow:
              "0 0 35px rgba(231, 84, 0, 0.6), 0 0 75px rgba(231, 84, 0, 0.4)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      colors: {
        primary: "#E75400",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
