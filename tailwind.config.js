/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  content: [],
  theme: {
    container: {
      center: true,
    },
    
    extend: {},
  },
  plugins: [require('daisyui')],
}

