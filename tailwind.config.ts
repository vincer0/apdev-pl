import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        apdRed: "var(--color-apd-red)",
        apdSecondaryBg: "var(--apd-secondary-bg)",
      },
      colors: {
        header: "rgb(var(--color-apd-header))",
        apdRed: "var(--apd-red)",
      },
    },
  },
  plugins: [],
};
export default config;
