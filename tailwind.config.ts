import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				orange: '#F24E2D',
				peach: '#FED1B7',
				darkGreen: '#36A243',
			},
			fontFamily: {
				serif: ['"Libre Caslon Text"', ...defaultTheme.fontFamily.serif],
			}
		},
	},
	plugins: [],
}
export default config
