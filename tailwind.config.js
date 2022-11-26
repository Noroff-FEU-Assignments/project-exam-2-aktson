/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#00bcd4",
        secondary: "#0C96EB",
        accent: "#D4BD15",
        dark: "#2C436E",
        light: "#ececec",
        lightGray: "#fafafa",
        yellow: "#E0D572",
        grey: "#4D4D4D",
      },
    },

  },
  plugins: [],
});