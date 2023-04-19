/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['ESBuild','sans-serif','ui-sans-serif','system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'],
      'display': ['Poppins'],
      'body': ['"ESBuild"']
    },
    extend: {
      colors: {
        aqua: '#176bff',
        ocean: '#217ce5',
        forest: '#00ad6e',
        danger: '#fc595d',
        steel: {
          50: '#757677',
          100: '#202124',
          200: '#191a1d',
          300: '#111215',
        }
      },
      keyframes: {
        flash: {
          '0%': { opacity: '0.2' },
          '1%': { scale: '2' },
          '20%': { opacity: '1' },
          '21%': { scale: '1' },
          '100%': { opacity: '0.2' },
        },
        bump: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100%': { opacity: '0.2' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        flash: 'flash 0.8s infinite linear',
        bump: 'bump 1.4s infinite linear',
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
      fontFamily: {
        'poppins': ['ES Build'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
  ],
}