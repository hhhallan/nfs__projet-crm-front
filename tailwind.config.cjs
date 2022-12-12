/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0b1124",
        secondary: "#21d4df"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  screens: {},
  plugins: [],
}
