/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'xl' : '1440px',
        '2xl' : '2100px',
      },
      colors:{
        'blackish' : '#111',
        'whiteish' : '#fefefe',
        'redish' : '#e31e3c',
        'grey' : '#858585',
        'light-greyish' : '#b7ac9b'
      },
      fontSize:{
        '1.5xl' : ['22px', '35px']
      },
      scale:{
        '98': '.98',
      },
    },
  },
  plugins: [],
}
