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
        primary: "#03a9f4",
        secondary: "#0288d1",
        accent: "#D4BD15",
        dark: "#104673",
        light: "#ececec",
        lightGray: "#fafafa",
        grey: "#4D4D4D",
      },
    },

  },
  plugins: [],
});