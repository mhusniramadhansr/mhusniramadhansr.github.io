/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out forwards, float 3s ease-in-out infinite',
				'slide-in-right': 'slideInRight 0.8s ease-out forwards',
				'underline-expand': 'underlineExpand 0.8s ease-out forwards',
			},
			keyframes: {
				fadeInUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(-8px)',
					},
				},
				slideInRight: {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				underlineExpand: {
					'0%': {
						width: '0%',
					},
					'100%': {
						width: '100%',
					},
				},
			},
		},
	},
	darkMode: "class",
	plugins: [],
}
