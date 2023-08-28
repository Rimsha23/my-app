/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js"
],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      backdropContrast: {
        25: '.25',
      }
    },
  },
  plugins: [],
}

