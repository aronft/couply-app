/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            minWidth: {
                7: '1.75rem',
            },
            spacing: {
                'full-w': '[calc((100%-100vw)/2)]',
            },
            minHeight: {
                7: '1.75rem',
            },
            screens: {
                'sm-max': { max: '639px' },
                'md-max': { max: '767px' },
                'lg-max': { max: '1023px' },
            },
            borderRadius: {
                '5xl': '2.78125rem',
            },
            boxShadow: {
                sm: '4px 4px 0px 0px rgba(0, 0, 0, 0.06)',
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
                300: '#C6DBBD',
                400: '#9BC588',
                500: '#779469',
                600: '#608A4D',
                800: '#6C7667',
            },
        },
        fontFamily: {
            sans: ['Nunito Sans', 'sans-serif'],
        },
        keyframes: {
            'bottom-to-top': {
                '0%': { transform: 'translateY(100%)', opacity: 0 },
                '100%': { transform: 'translateY(0%)', opacity: 1 },
            },
        },
        animation: {
            'bottom-to-top': 'bottom-to-top 1000ms ease-in-out',
        },
    },
    plugins: [],
}
