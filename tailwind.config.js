/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#4CB5F9',
        'azul-escuro': '#385185'
      },
      
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },

      backgroundImage: {
        'image': 'url("/src/img/home-phones.png")'
      }
    },
  },
  plugins: [],  
}

