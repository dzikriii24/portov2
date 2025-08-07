/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': {
            'background-position': '100%'
          },
          '100%': {
            'background-position': '-100%'
          },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        gradient: 'gradient 8s linear infinite'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

