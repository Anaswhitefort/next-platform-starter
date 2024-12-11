const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to bottom, theme('colors.black / 100%'), theme('colors.black / 50%')), url('/images/noise.png')",
      },
      colors: {
        neutral: colors.neutral,
        'dark-bg': '#333', // Dark background color
        'light-bg': '#fff', // Light background color
        'dark-text': '#fff', // Dark text color
        'light-text': '#333', // Light text color
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        jello: 'jello 2s ease-in-out 4s infinite', // Define the animation
      },
      keyframes: {
        jello: {
          'from, 11.1%, to': {
            transform: 'translate3d(0, 0, 0)',
          },
          '22.2%': {
            transform: 'skewX(0d.0eg) skewY(0.0deg)',
          },
          '33.3%': {
            transform: 'skewX(0.0deg) skewY(0.0deg)',
          },
          '44.4%': {
            transform: 'skewX(0.0deg) skewY(0.0deg)',
          },
          '55.5%': {
            transform: 'skewX(0.0deg) skewY(0.0deg)',
          },
          '66.6%': {
            transform: 'skewX(0.0deg) skewY(0.0deg)',
          },
          '77.7%': {
            transform: 'skewX(-50.0deg) skewY(0deg)',
          },
          '88.8%': {
            transform: 'skewX(0.0deg) skewY(0deg)',
          },
        },
      },
    },
  },

  daisyui: {
    themes: [
      {
        lofi: {
          ...require('daisyui/src/theming/themes')['lofi'],
          primary: '#2bdcd2',
          'primary-content': '#171717',
          secondary: '#016968',
          info: '#2bdcd2',
          'info-content': '#171717',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      // Custom utility classes
      addUtilities({
        '.bg-dark-bg': {
          backgroundColor: '#333',
        },
        '.text-light-text': {
          color: '#333',
        },
      });
    },
  ],
};
