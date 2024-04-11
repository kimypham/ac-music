/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
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

