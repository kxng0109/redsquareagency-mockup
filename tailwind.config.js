/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blackish' : '#111',
        'whiteish' : '#fefefe',
        'redish' : '#e31e3c',
        'grey' : '#858585'
      },
      fontSize:{
        '1.5xl' : ['22px', '35px']
      },
      scale:{
        '98': '.98',
      }
    },
  },
  plugins: [],
}
