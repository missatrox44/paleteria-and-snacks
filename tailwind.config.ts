import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--white)",
        'custom-blue': '#194BFD',
        'custom-purple': '#AD13FB',
        'neon-pink': '#FF00F5',
        'neon-turquoise': '#00FFE0',
        'neon-orange': '#FF9100',
        'neon-green': '#76FF03',
      },
    },
  },
  plugins: [],
} satisfies Config;
