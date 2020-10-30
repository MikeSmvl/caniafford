// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: {
		enabled: process.env.TAILWIND === 'prod' ? true : false,
		content: ['./src/**/*.html', './src/**/*.tsx'],

		// These options are passed through directly to PurgeCSS
		options: {
			whitelist: ['text-red-900', 'text-blue-900', 'text-green-900'],
		},
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
