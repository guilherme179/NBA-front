/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        navbar: {
          500: '#0d6efd',
          200: '#0d6efd8a',
        },
        navbarGray: {
          500: '#7891b7'
        },
        blueNBA: {
          500: '#6366f1',
        }
      },
      boxShadow: {
        '1x' : 'inset 0px 15px 0px -14px rgb(12 10 10 / 20%)',
        '0.5x' : '0 .5rem 1rem rgba(0,0,0,.20)!important',
      },
      spacing: {
        'sidebar': '83vh',
        'navbar' : '8vh',
      },
      fontFamily: {
        'roboto-mono': 'Roboto mono',
        'open-sans': 'Open Sans'  
      }
    },
  },
  plugins: [],
}
