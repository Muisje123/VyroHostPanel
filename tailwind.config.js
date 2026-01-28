const pterodactylConfig = require('./pterodactyl.tailwind.config'); // or wherever it is
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
        ...pterodactylConfig.content,
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            ...pterodactylConfig.theme?.extend,
            fontFamily: {
                ...(pterodactylConfig.theme?.extend?.fontFamily || {}),
                header: ['"Inter"', '"Roboto"', 'system-ui', 'sans-serif'],
                sans: ['"Inter"', '"Roboto"', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', '"Source Code Pro"', 'SourceCodePro', 'monospace'],
            },
            colors: {
                ...(pterodactylConfig.theme?.extend?.colors || {}),
                black: 'hsl(220, 20%, 8%)',
                background: 'hsl(220, 20%, 8%)',
                foreground: 'hsl(0, 0%, 98%)',
                primary: vyroAI,
                vyroai: vyroAI,
                accent: accent,
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
                success: colors.green,
                warning: colors.amber,
                danger: colors.red,
                info: accent,
            },
            // ... rest of your extensions
        },
    },
    plugins: [
        ...(pterodactylConfig.plugins || []),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
}
