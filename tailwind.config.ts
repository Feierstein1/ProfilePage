// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vaporwave_light_blue: "#93ceff",
        vaporwave_blue: "#01cdfe",
        vaporwave_dark_blue: "#015e7e",

        vaporwave_dark_pink: "#df3ea6",
        vaporwave_pink: "#d660ad",
        vaporwave_light_pink: "#f389ce",

        vaporwave_light_purple: "#ac5cf1",
        vaporwave_purple: "#714499",
        vaporwave_dark_purple: "#481c70",

        vaporwave_light_cyan: "#5cf8bc",
        vaporwave_cyan: "#1cdf94",
        vaporwave_dark_cyan: "#125e43",

        vaporwave_light_yellow: "#dfda7e",
        vaporwave_yellow: "#d4d04e",
        vaporwave_dark_yellow: "#b9ac18",

        vaporwave_white: "#ffffff",
        vaporwave_light_grey: "#acacac",
        vaporwave_grey: "#818181",
        vaporwave_dark_grey: "#3f3f3f",
        vaporwave_darker_grey: "#333333",
        vaporwave_black: "#000000",
      },
      textColor: {
        title1: "var(--title-1)",
        title2: "var(--title-2)",
        title3: "var(--title-3)",
        title4: "var(--title-4)",
        textDefault: "var(--text-default)",
        bodyText1: "var(--body-text-1)",
        bodyText2: "var(--body-text-2)",
        buttonBg: "var(--button-bg)",
        buttonHoverBg: "var(--button-hover-bg)",
        buttonText: "var(--button-text)",
        buttonHoverText: "var(--button-hover-text)",
      },
      backgroundColor: {
        buttonBg: "var(--button-bg)",
        buttonHoverBg: "var(--button-hover-bg)",
      },
      backgroundImage: {
        'city': "url('/city-background.jpg')"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        saira: ['Saira Stencil One', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
