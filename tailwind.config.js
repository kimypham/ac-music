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
                },
                'sway-left': {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(-210%)' },
                    '100%': { transform: 'translateX(0%)' }
                },
                'sway-right': {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(210%)' },
                    '100%': { transform: 'translateX(0%)' }
                },
                'travel-right': {
                    '0%': { transform: 'translateX(0%)', left: -150 },
                    '100%': { transform: 'translateX(120%)' }
                },
                'cloud-1': {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(180%)' },
                    '100%': { transform: 'translateX(0%)' }
                },
                'cloud-1': {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(180%)' },
                    '100%': { transform: 'translateX(0%)' }
                },
            },
            animation: {
                'spin-right': 'spin-right 600ms ease-in-out',
                'spin-left': 'spin-left 600ms ease-in-out',
                'sway-left': 'sway-left 1s infinite',
                'sway-right': 'sway-right 1s infinite',
                'cloud-1': 'cloud-1 60s infinite',
                'cloud-2': 'cloud-2 1s infinite'
            }

            // @keyframes bounce {
            //     0 %, 100 % {
            //         transform: translateY(-25 %);
            //         animation- timing - function: cubic- bezier(0.8, 0, 1, 1);
            // }
            // 50 % {
            //     transform: translateY(0);
            //     animation- timing - function: cubic- bezier(0, 0, 0.2, 1);
            //   }
            // }
        },

        fontFamily: {
            'main': ['Nunito', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
        },

        colors: {
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

