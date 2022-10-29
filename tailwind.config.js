/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7ED3E0",
        secondary: "#88A6E0",
        accent: "#E09FBE",
        dark: "#3B4861",
        light: "#FFFFFF",
        yellow: "#E0D572",
        grey: "#6B6B6B",

      }
    },

  },
  plugins: [],
});