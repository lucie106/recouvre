import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        papier: "#F6F2EA",
        encre: "#1B1B18",
        sapin: { DEFAULT: "#14532D", fonce: "#0E3D21" },
        brique: "#B83A12",
        trait: "#DDD6C8",
        sourdine: "#5E5A50",
      },
      fontFamily: {
        titre: ["var(--font-titre)", "Georgia", "serif"],
        texte: ["var(--font-texte)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
