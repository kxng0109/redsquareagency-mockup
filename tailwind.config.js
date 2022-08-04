/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blackish' : '#111',
        'whiteish' : '#fefefe',
        'red' : '#e31e3c',
        'grey' : '#858585'
      }
    },
  },
  plugins: [],
}
