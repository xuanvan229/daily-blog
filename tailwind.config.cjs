/** @type {import('tailwindcss').Config} */
var defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans"].concat(defaultTheme.fontFamily.sans),
        title: ["Noto Sans", "Familjen Grotesk"].concat(defaultTheme.fontFamily.sans),
      },
    },
  },
  plugins: [],
};
