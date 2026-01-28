const colors = require('tailwindcss/colors');

// VyroAI App-Matching Color Palette
const gray = {
    50: 'hsl(220, 20%, 98%)',
    100: 'hsl(220, 18%, 95%)',
    200: 'hsl(220, 16%, 88%)',
    300: 'hsl(220, 14%, 75%)',
    400: 'hsl(220, 12%, 60%)',
    500: 'hsl(220, 10%, 45%)',
    600: 'hsl(220, 12%, 35%)',
    700: 'hsl(220, 15%, 25%)',
    800: 'hsl(220, 18%, 16%)',  // Sidebar/Cards
    900: 'hsl(220, 20%, 10%)',  // Main background - Very dark like app
};

// VyroAI Bright Purple (matching the app)
const vyroAI = {
    50: 'hsl(262, 100%, 97%)',
    100: 'hsl(262, 100%, 95%)',
    200: 'hsl(262, 100%, 90%)',
    300: 'hsl(262, 100%, 80%)',
    400: 'hsl(262, 95%, 70%)',
    500: 'hsl(262, 90%, 65%)',  // Brighter main brand color
    600: 'hsl(262, 85%, 60%)',
    700: 'hsl(262, 80%, 55%)',
    800: 'hsl(262, 75%, 50%)',
    900: 'hsl(262, 70%, 45%)',
};

// VyroAI Accent Blue (brighter to match app)
const accent = {
    50: 'hsl(220, 100%, 97%)',
    100: 'hsl(220, 100%, 90%)',
    200: 'hsl(220, 100%, 80%)',
    300: 'hsl(220, 100%, 70%)',
    400: 'hsl(220, 95%, 65%)',
    500: 'hsl(220, 90%, 60%)',  // Brighter accent
    600: 'hsl(220, 85%, 55%)',
    700: 'hsl(220, 80%, 50%)',
    800: 'hsl(220, 75%, 45%)',
    900: 'hsl(220, 70%, 40%)',
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
                black: 'hsl(220, 20%, 8%)',  // Very dark like app
                background: 'hsl(220, 20%, 8%)',
                foreground: 'hsl(0, 0%, 98%)',
                
                // VyroAI Brand Colors (brighter)
                primary: vyroAI,
                vyroai: vyroAI,
                
                // Accent Blue (brighter)
                accent: accent,
                
                // Grays (darker)
                gray: gray,
                neutral: gray,
                
                // Keep cyan for compatibility
                cyan: colors.cyan,
                
                // Semantic colors
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
                'gradient-vyroai': 'linear-gradient(135deg, hsl(262 90% 65%) 0%, hsl(220 90% 60%) 100%)',
                'gradient-vyroai-dark': 'linear-gradient(135deg, hsl(262 60% 20%) 0%, hsl(220 60% 15%) 50%, hsl(220 60% 10%) 100%)',
                'gradient-hero': 'linear-gradient(135deg, hsl(262 90% 65%) 0%, hsl(220 90% 60%) 100%)',
            },
            boxShadow: {
                'glow': '0 0 60px hsla(262, 90%, 65%, 0.25)',
                'glow-lg': '0 0 80px hsla(262, 90%, 65%, 0.35)',
                'card': '0 4px 24px hsla(0, 0%, 0%, 0.5)',
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
