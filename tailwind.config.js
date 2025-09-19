/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F8F8F8',
          100: '#F9ECC8',
          200: '#FBDF98',
          300: '#FCD367',
          400: '#FEC637',
          500: '#FFBA07',
          600: '#CC9709',
          700: '#9A740B',
          800: '#67520E',
          900: '#352F10',
          950: '#020C12',
        },
      },
      fontFamily: {
        sans: ['Asap', 'sans-serif'],
      },
    },
  },
  safelist: [
    'bg-primary-200',
    'bg-primary-500',
    'hover:bg-primary-200',
    {
      pattern: /(bg|text|border)-primary-\d{2,3}/,
    },
  ],
  plugins: [],
}
