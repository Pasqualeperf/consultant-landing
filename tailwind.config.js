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
        'consultant-special-gray': '#C4C4C4',
      },
      boxShadow: {
        'blue': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(191, 191, 236, 0.72)',
      },
      spacing: {
        'hero': '46rem',
       }
    },
    fontFamily: {
      'display' : 'DM Serif Display',
      'pt': 'PT Serif',
      'body': 'Poppins',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
