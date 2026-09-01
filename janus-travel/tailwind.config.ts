import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Janus Travel — Snowy Yet Warm
        wine: "#B23850",
        ivory: "#E7E3D4",
        ink: "#29344A",
        gold: "#8590AA",
        sage: "#C4DBF6",
        blue: "#3B8BEB",
      },

      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Arial", "sans-serif"],
      },
    },
  },

  plugins: [],
} satisfies Config;
