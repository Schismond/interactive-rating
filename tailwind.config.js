
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'DarkBlue': '#141519',
        'LightGrey':'#959EAC',
        'grey3':'#1f2630',
        'grey':'#262f38'
      },
      backgroundImage: {
        'star': "url('/images/icon-star.svg')",
        'thank': "url('/images/illustration-thank-you.svg')",
      }
    },
    fontFamily: {
      'Overpass': 'Overpass , Arial, sans-serif',
    },
  },
  plugins: [],
}