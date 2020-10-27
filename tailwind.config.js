// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        enabled: process.env.TAILWIND === 'prod' ? true : false,
        content: ['./src/**/*.html', './src/**/*.tsx'],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')],
};
