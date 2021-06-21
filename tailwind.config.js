module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'consultant-purple-light': '#9b9bca',
        'consultant-purple': '#696A86',
        'consultant-black-green': '#626780',
        'consultant-normal-gray': '#9D9D9D',
        'consultant-bg': '#C8C8C8',
        'consultant-link': '#717784',
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
