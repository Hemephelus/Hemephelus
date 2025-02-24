import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(300px, 1fr))",
        "fluid-sm": "repeat(auto-fit, minmax(250px, 1fr))",
        "fluid-lg": "repeat(auto-fit, minmax(350px, 1fr))",
        "fluid-table": "repeat(auto-fill, minmax(auto, 1fr))",
      },
      colors: {
        dark1: "var(--dark-1)",
        dark2: "var(--dark-2)",
        light1: "var(--light-1)",
        light2: "var(--light-2)",
        accent: "var(--accent)",
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)'],
        'instrument-serif': ['var(--font-instrument-serif)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
