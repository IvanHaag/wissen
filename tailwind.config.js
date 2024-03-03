/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E4F2FB',
          100: '#C9E6F8',
          200: '#93CDF1',
          300: '#5DB4EA',
          400: '#279BE3',
          500: '#187AB7',
          600: '#136090',
          700: '#0E486C',
          800: '#093048',
          900: '#051824',
          950: '#020C12',
        },
      },
      height: {
        header: '50px',
      },
      width: {
        sidebar: '200px',
      },
      padding: {
        header: '70px',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
      },
    },
  },
  plugins: [],
}

