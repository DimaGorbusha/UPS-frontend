/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'squartiqal ': ['Squartiqa4F'],
        'aeroport-medium': ['Aeropot Medium'],
        'aeroport-bold': ['Aeropot Bold'],
      },
    },
  },
  plugins: [],
}
