/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'sm-max': { max: '639px' },
                'md-max': { max: '767px' },
                'lg-max': { max: '1023px' },
            },
        },
        colors: {
            white: '#FFFFFF',
            black: '#000000',
            gray: {
                300: '##D9D9D9',
            },
            stone: {
                800: '#231F20',
            },
            green: {
                100: '#E8F5E2',
                400: '#9BC588',
                600: '#608A4D',
                800: '#6C7667',
            },
        },
    },
    plugins: [],
}
