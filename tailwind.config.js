const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode:  'class',
     
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.black / 100%'), theme('colors.black / 50%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral,
                'dark-bg': '#333', // Dark background color
                'light-bg': '#fff', // Light background color
                'dark-text': '#fff', // Dark text color
                'light-text': '#333' // Light text color
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
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
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
