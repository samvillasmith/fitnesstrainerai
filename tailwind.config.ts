import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-primary': '#BB86FC',
        'dark-secondary': '#03DAC6',
        'dark-error': '#CF6679',
        'dark-on-bg': '#FFFFFF',
        'dark-on-surface': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
