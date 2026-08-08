import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './data/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    DEFAULT: 'rgb(var(--color-muted) / <alpha-value>)',
                    hover: 'rgb(var(--color-foreground) / <alpha-value>)',
                    highlight: 'rgb(var(--color-surface) / <alpha-value>)',
                    highlightHover: 'rgb(var(--color-surface-muted) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
                    normal: 'rgb(var(--color-foreground) / <alpha-value>)',
                    hot: colors.red[700],
                    hover: 'rgb(var(--color-surface-muted) / <alpha-value>)',
                    hotHover: colors.red[800],
                    hoverHover: 'rgb(var(--color-surface-strong) / <alpha-value>)',
                    border: 'rgb(var(--color-border) / <alpha-value>)',
                    text: 'rgb(var(--color-muted) / <alpha-value>)',
                    dark: 'rgb(var(--color-button) / <alpha-value>)',
                    darkHover: 'rgb(var(--color-button-hover) / <alpha-value>)',
                    onDark: 'rgb(var(--color-button-text) / <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            screens: {
                xxs: '323px',
                xs: '390px',
                mdb: '600px',
                mdp: '975px',
            },
        },
    },
    plugins: [],
};
