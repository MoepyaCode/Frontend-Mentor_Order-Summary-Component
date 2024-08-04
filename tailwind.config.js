/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        blue: {
          'very-pale': 'hsl(225, 100%, 98%)',
          'bright': 'hsl(245, 75%, 52%)',
          'desaturated': 'hsl(224, 23%, 55%)',
          'dark': 'hsl(223, 47%, 23%)'
        },
        gray: {
          light: 'hsl(228, 100%, 99%)'
        }
      }
    },
  },
  plugins: [],
}