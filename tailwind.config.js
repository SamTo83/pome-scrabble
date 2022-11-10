// const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*/*.js"],
  theme: {
    fontFamily: {
      // 'Manrope': 'Marope',
      'Nanum': 'Nanum Pen Script'
    },
    extend: {
      backgroundImage: {
        'hero-pattern' : "url('/images/background.PNG')"
      },
    colors: {
      'purple': '#8C30F5',
      'light-purple': '#F3F2FF',
      'tile': '#ffe3c1',
      },
    },
  },
  plugins: [
  ],
}
