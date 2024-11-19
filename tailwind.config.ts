import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.scss"
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
        'neon-blue': '#007BFF',
        'card-gr-top': '#0F0F0F',
        'card-gr-middle': '#242424',
        'card-gr-bottom': '#222222',
      },
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    // },
  },
  plugins: [],
} satisfies Config;
