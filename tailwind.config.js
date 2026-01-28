const colors = require('tailwindcss/colors');

// VyroAI Dark Theme Color Palette
const gray = {
    50: 'hsl(250, 30%, 96%)',
    100: 'hsl(250, 25%, 91%)',
    200: 'hsl(250, 20%, 82%)',
    300: 'hsl(250, 15%, 65%)',
    400: 'hsl(250, 15%, 55%)',
    500: 'hsl(250, 15%, 45%)',
    600: 'hsl(250, 20%, 35%)',
    700: 'hsl(250, 25%, 25%)',
    800: 'hsl(250, 25%, 15%)',
    900: 'hsl(250, 30%, 10%)',
};

// VyroAI Purple/Violet Primary Color
const vyroAI = {
    50: 'hsl(262, 83%, 95%)',
    100: 'hsl(262, 83%, 90%)',
    200: 'hsl(262, 83%, 80%)',
    300: 'hsl(262, 83%, 70%)',
    400: 'hsl(262, 83%, 65%)',
    500: 'hsl(262, 83%, 58%)', // Main brand color
    600: 'hsl(262, 83%, 50%)',
    700: 'hsl(262, 83%, 45%)',
    800: 'hsl(262, 83%, 40%)',
    900: 'hsl(262, 83%, 35%)',
};

// VyroAI Accent Blue
const accent = {
    50: 'hsl(220, 90%, 95%)',
    100: 'hsl(220, 90%, 85%)',
    200: 'hsl(220, 90%, 75%)',
    300: 'hsl(220, 90%, 65%)',
    400: 'hsl(220, 90%, 60%)',
    500: 'hsl(220, 90%, 56%)', // Accent color
    600: 'hsl(220, 90%, 50%)',
    700: 'hsl(220, 90%, 45%)',
    800: 'hsl(220, 90%, 40%)',
    900: 'hsl(220, 90%, 35%)',
};

module.exports = {
    darkMode: 'class',
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['Inter', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                black: 'hsl(250, 30%, 6%)',
                background: 'hsl(250, 30%, 6%)',
                foreground: 'hsl(0, 0%, 95%)',
                
                // VyroAI Brand Colors
                primary: vyroAI,
                vyroai: vyroAI,
                
                // Accent Blue
                accent: accent,
                
                // Grays
                gray: gray,
                neutral: gray,
                
                // Keep cyan for compatibility
                cyan: colors.cyan,
                
                // Semantic colors with VyroAI theme
                success: colors.green,
                warning: colors.amber,
                danger: colors.red,
                info: accent,
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.gray.700', 'currentColor'),
            }),
            borderRadius: {
                lg: '0.75rem',
                md: 'calc(0.75rem - 2px)',
                sm: 'calc(0.75rem - 4px)',
            },
            backgroundImage: {
                'gradient-vyroai': 'linear-gradient(135deg, hsl(262 83% 58%) 0%, hsl(220 90% 56%) 100%)',
                'gradient-vyroai-dark': 'linear-gradient(135deg, hsl(262 50% 12%) 0%, hsl(220 50% 10%) 50%, hsl(250 50% 8%) 100%)',
            },
            boxShadow: {
                'glow': '0 0 60px hsla(262, 83%, 58%, 0.15)',
                'glow-lg': '0 0 80px hsla(262, 83%, 58%, 0.2)',
                'card': '0 4px 24px hsla(0, 0%, 0%, 0.3)',
            },
            keyframes: {
                'fade-in': {
                    from: { opacity: '0', transform: 'translateY(10px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.3s ease-out',
                'slide-up': 'slide-up 0.4s ease-out',
                'shimmer': 'shimmer 2s ease-in-out infinite',
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
