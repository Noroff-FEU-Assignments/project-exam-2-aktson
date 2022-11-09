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
        secondary: "#D4BD15",
        accent: "#0C96EB",
        dark: "#2C436E",
        light: "#ececec",
        lightGray: "#fafafa",
        yellow: "#E0D572",
        grey: "#6B6B6B",
      },
    },

  },
  plugins: [],
});