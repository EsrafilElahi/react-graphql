/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "300px" },
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#4D61FC",
      "blue-light": "#8AABFF",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "xs-only",
        "@media screen and (max-width: theme('screens.md'))"
      ); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
};
