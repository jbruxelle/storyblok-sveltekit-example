const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false,
	content: ['./src/**/*.{js,ts,svelte}'],
	theme: {
		screens: {
			xs: '475px',
			...defaultTheme.screens
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2c274c',
					hover: '#3a3465',
					shadow: '#6157a8',
					focus: '#4f478a'
				},
				secondary: {
					DEFAULT: '#9b9c95',
					hover: '#a8a9a3',
					focus: '#76776f',
					shadow: '#c1c1bd'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [' @tailwindcss/aspect-ratio']
};
