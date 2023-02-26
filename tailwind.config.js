/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sung':['"Yeon Sung"','cursive'],
        'montserrat':['"Montserrat"','sans-serif'],
      }
    },
  },
  plugins: [],
}
