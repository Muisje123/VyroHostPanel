const colors = require('tailwindcss/colors');

const gray = {
    50: 'hsl(220, 20%, 98%)',
    100: 'hsl(220, 18%, 95%)',
    200: 'hsl(220, 16%, 88%)',
    300: 'hsl(220, 14%, 75%)',
    400: 'hsl(220, 12%, 60%)',
    500: 'hsl(220, 10%, 45%)',
    600: 'hsl(220, 12%, 35%)',
    700: 'hsl(220, 15%, 25%)',
    800: 'hsl(220, 18%, 16%)',
    900: 'hsl(220, 20%, 10%)',
};

const vyroAI = {
    50: 'hsl(262, 100%, 97%)',
    100: 'hsl(262, 100%, 95%)',
    200: 'hsl(262, 100%, 90%)',
    300: 'hsl(262, 100%, 80%)',
    400: 'hsl(262, 95%, 70%)',
    500: 'hsl(262, 90%, 65%)',
    600: 'hsl(262, 85%, 60%)',
    700: 'hsl(262, 80%, 55%)',
    800: 'hsl(262, 75%, 50%)',
    900: 'hsl(262, 70%, 45%)',
};

const accent = {
    50: 'hsl(220, 100%, 97%)',
    100: 'hsl(220, 100%, 90%)',
    200: 'hsl(220, 100%, 80%)',
    300: 'hsl(220, 100%, 70%)',
    400: 'hsl(220, 95%, 65%)',
    500: 'hsl(220, 90%, 60%)',
    600: 'hsl(220, 85%, 55%)',
    700: 'hsl(220, 80%, 50%)',
    800: 'hsl(220, 75%, 45%)',
    900: 'hsl(220, 70%, 40%)',
};

module.exports = {
    darkMode: 'class',
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
        './resources/views/**/*.{blade.php,html}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"Inter"', '"Roboto"', 'system-ui', 'sans-serif'],
                sans: ['"Inter"', '"Roboto"', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', '"Source Code Pro"', 'SourceCodePro', 'monospace'],
            },
            colors: {
                black: 'hsl(220, 20%, 8%)',
                background: 'hsl(220, 20%, 8%)',
                foreground: 'hsl(0, 0%, 98%)',
                
                // VyroAI Brand Colors
                primary: vyroAI,
                vyroai: vyroAI,
                
                // Accent Blue
                accent: accent,
                
                // Gray & Neutral
                gray: gray,
                neutral: gray,
                
                // Cyan - IMPORTANT for Pterodactyl compatibility
                cyan: colors.cyan,
                
                // Standard Tailwind colors for compatibility
                red: colors.red,
                orange: colors.orange,
                yellow: colors.yellow,
                green: colors.green,
                emerald: colors.emerald,
                teal: colors.teal,
                blue: colors.blue,
                indigo: colors.indigo,
                violet: colors.violet,
                purple: colors.purple,
                pink: colors.pink,
                rose: colors.rose,
                amber: colors.amber,
                lime: colors.lime,
                
                // Semantic colors
                success: colors.green,
                warning: colors.amber,
                danger: colors.red,
                info: accent,
                white: colors.white,
                slate: colors.slate,
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
            backgroundImage: {
                'gradient-vyroai': 'linear-gradient(135deg, hsl(262 90% 65%) 0%, hsl(220 90% 60%) 100%)',
                'gradient-vyroai-dark': 'linear-gradient(135deg, hsl(262 60% 20%) 0%, hsl(220 60% 15%) 50%, hsl(220 60% 10%) 100%)',
            },
            boxShadow: {
                'glow': '0 0 60px hsla(262, 90%, 65%, 0.25)',
                'glow-lg': '0 0 80px hsla(262, 90%, 65%, 0.35)',
            },
            keyframes: {
                'fade-in': {
                    from: { opacity: '0', transform: 'translateY(10px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.3s ease-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
