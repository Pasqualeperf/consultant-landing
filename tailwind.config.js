module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'consultant-puple-light': '#9b9bca',
        'consultant-purple': '#696A86',
        'consultant-black-green': '#626780',
        'consultant-normal-gray': '#9D9D9D',
      }
    },
    fontFamily: {
      'display' : 'DM Serif Display',
      'body': 'Poppins',
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
