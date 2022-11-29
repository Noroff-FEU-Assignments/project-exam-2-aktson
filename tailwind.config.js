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
        accent: "#0097a7",
        dark: "#104673",
        light: "#ececec",
        lightGray: "#fafafa",
        yellow: "#E0D572",
        grey: "#4D4D4D",
      },
    },

  },
  plugins: [],
});