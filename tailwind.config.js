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
        'light-greyish' : '#b7ac9b',
        'blackishOpaque' : 'rgba(17,17,17,0.6)',
      },
      fontSize:{
        '1.5xl' : ['22px', '35px']
      },
      scale:{
        '98': '.98',
      },
      zIndex:{
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4',
      },
      transitionDuration:{
        '400' : '400ms'
      }
    },
  },
  plugins: [],
}
