const colors = require('tailwindcss/colors');

const darkGray = {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#252935',
    800: '#171c26',
    900: '#0d1117',
};

module.exports = {
    darkMode: 'class',
    content: ['./resources/scripts/**/*.{js,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                header: ['"Inter"', 'system-ui', 'sans-serif'],
                sans: ['"Inter"', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                black: '#0a0e14',
                blue: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                gray: darkGray,
                neutral: darkGray,
                cyan: colors.cyan,
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.700', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
