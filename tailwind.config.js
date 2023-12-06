/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#002244',
        'red': '#D21F3C',
        'whiite': '#EDEADE',
        'mybg':'linear-gradient(to right, #212A3E , #394867)',
      },
    },
  },
  plugins: [],
}

