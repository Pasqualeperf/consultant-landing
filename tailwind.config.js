module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'consultant-red': '#fd5540',
        'consultant-red-dark': '#e64d3a',
        'consultant-light-blue': '#00c3d0',
        'consultant-light-blue-dark': '#008891',
        'consultant-light-blue-bold': '#00b1bd',
        'consultant-yellow': '#f5c150',
        'consultant-yellow-dark': '#dfaf49',
        'consultant-gray': '#434a54',
        'consultant-gray-dark': '#353a41',
        'consultant-light-gray': '#b5babf',
        'consultant-light-gray-dak': '#9aa0ab',
        'consultant-bg': '#f8f8f2',
        'consultant-puple-light': '#9b9bca',
        'consultant-purple': '#696A86',
        'consultant-black-green': '#626780',
        'consultant-normal-gray': '#9D9D9D',
      }
    },
    fontFamily: {
      'display' : 'Signika',
      'body': 'Montserrat',
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
