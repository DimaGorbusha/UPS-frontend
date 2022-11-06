/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'squartiqa': ['Squartiqa4F'],
        'aeroport-medium': ['Aeroport Medium'],
        'aeroport-bold': ['Aeroport Bold'],
        'aeroport': ['Aeroport Regular'],
        'squartiqa-ultralight': ['Squartiqa4FUltraLight'],
      },
      colors: {
        bgInput: "#1E1E1E",
        darkRed: "#B42A40",
      },
      backgroundImage: {
        'red': "url('./img/patternRed.svg')",
        'gray': "url('./img/patternGray.svg')"
      }
      }
  },
  plugins: [],
}
