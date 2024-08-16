import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    DEFAULT: '#646464',
                    hover: '#202020',
                    highlight: '#F9F9F9',
                    highlightHover: '#F2F2F2',
                },
                secondary: {
                    DEFAULT: '#ffffff',
                    normal: '#1D1E24',
                    hot: colors.red[700],
                    hover: colors.neutral[100],
                    hotHover: colors.red[800],
                    hoverHover: colors.neutral[300],
                    border: colors.neutral[400],
                    text: colors.zinc[500],
                    dark: colors.zinc[900],
                    darkHover: colors.zinc[950],
                },
            },
            fontFamily: {
                plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            screens: {
                xxs: '323px',
                xs: '390px',
                mdp: '975px',
            },
        },
    },
    plugins: [],
};
