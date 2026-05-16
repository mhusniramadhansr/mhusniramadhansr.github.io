/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
				'fade-in-up-loop': 'fadeInUp 0.7s ease-out forwards, float 4.5s ease-in-out 1s infinite',
				'slide-in-right': 'slideInRight 0.8s ease-out forwards',
				'underline-expand': 'underlineExpand 0.8s ease-out forwards',
				'float-slow': 'float 4s ease-in-out infinite',
				'bounce-slow': 'bounce 2.5s infinite',
				'glow-pulse': 'glowPulse 3.5s ease-in-out infinite',
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
				pulseSoft: {
					'0%, 100%': {
						transform: 'scale(1)',
					},
					'50%': {
						transform: 'scale(1.02)',
					},
				},
				glowPulse: {
					'0%, 100%': {
						boxShadow: '0 0 0px rgba(168, 85, 247, 0)',
					},
					'50%': {
						boxShadow: '0 0 20px rgba(168, 85, 247, 0.22)',
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
