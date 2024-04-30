import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md960: "960px",
      },
      backgroundColor: {
        secondary: "var(--color-apd-secondary-text)",
      },
      colors: {
        header: "rgb(var(--color-apd-header))",
        secondaryText: "var(--color-apd-secondary-text)",
      },
    },
  },
  plugins: [],
};
export default config;
