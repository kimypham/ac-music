/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            keyframes: {
                'spin-right': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(180deg)' },
                },
                'spin-left': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(-180deg)' },
                }
            },
            animation: {
                'spin-right': 'spin-right 600ms ease-in-out',
                'spin-left': 'spin-left 600ms ease-in-out'
            }
        },

        fontFamily: {
            'main': ['Nunito', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
            'open-sans': ['Open Sans', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
        },

        colors: {

            // for light mode
            'lm-white': '#FFF9F5',
            'lm-bg-green': '#529D7D',
            'lm-text-brown': '#7A6649',
            'lm-text-blue': '#00A5EB',

            // for dark mode
            'dm-white': '#B2D8D6',
            'dm-bg-dark-green': '#081D22',
            'dm-bg-green': '#0E2931',
            'dm-text-green': '#48C5AF',






            // OLD COLOURS
            'shadow': '187ABE',

            // for light mode
            'lm-bg-light-blue': '#D5EDFF',
            'lm-bg-blue': '#85BFF5',
            'lm-white': '#FFFFFF',
            'lm-text-dark-blue': '#187ABE',
            'lm-text-blue': '#3AB8FF',
            'lm-hover': '#d3efff',

            // for dark mode
            'dm-bg-dark-blue': '#020F23',
            'dm-bg-blue': '#093157',
            'dm-black': '#070E18',
            'dm-text-light-blue': '#92CAF0',
            'dm-text-blue': '#187ABE'
        }
    },
    plugins: [],
}

