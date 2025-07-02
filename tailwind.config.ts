
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Extended professional color palette
				slate: {
					50: 'hsl(210 40% 98%)',
					100: 'hsl(210 40% 96%)',
					200: 'hsl(214 32% 91%)',
					300: 'hsl(213 27% 84%)',
					400: 'hsl(215 20% 65%)',
					500: 'hsl(215 16% 47%)',
					600: 'hsl(215 19% 35%)',
					700: 'hsl(215 25% 27%)',
					800: 'hsl(217 33% 17%)',
					900: 'hsl(222 84% 5%)',
					950: 'hsl(229 84% 2%)',
				},
				neutral: {
					50: 'hsl(0 0% 98%)',
					100: 'hsl(0 0% 96%)',
					200: 'hsl(0 0% 90%)',
					300: 'hsl(0 0% 83%)',
					400: 'hsl(0 0% 64%)',
					500: 'hsl(0 0% 45%)',
					600: 'hsl(0 0% 32%)',
					700: 'hsl(0 0% 25%)',
					800: 'hsl(0 0% 15%)',
					900: 'hsl(0 0% 9%)',
					950: 'hsl(0 0% 4%)',
				},
				zinc: {
					50: 'hsl(0 0% 98%)',
					100: 'hsl(240 5% 96%)',
					200: 'hsl(240 6% 90%)',
					300: 'hsl(240 5% 84%)',
					400: 'hsl(240 5% 65%)',
					500: 'hsl(240 4% 46%)',
					600: 'hsl(240 5% 34%)',
					700: 'hsl(240 5% 26%)',
					800: 'hsl(240 4% 16%)',
					900: 'hsl(240 6% 10%)',
					950: 'hsl(240 10% 4%)',
				},
				stone: {
					50: 'hsl(60 9% 98%)',
					100: 'hsl(60 9% 96%)',
					200: 'hsl(60 5% 90%)',
					300: 'hsl(24 6% 83%)',
					400: 'hsl(24 5% 64%)',
					500: 'hsl(25 5% 45%)',
					600: 'hsl(33 5% 32%)',
					700: 'hsl(30 6% 25%)',
					800: 'hsl(12 6% 15%)',
					900: 'hsl(24 10% 10%)',
					950: 'hsl(20 14% 4%)',
				},
				// Subtle accent colors
				blue: {
					50: 'hsl(214 100% 97%)',
					100: 'hsl(214 95% 93%)',
					200: 'hsl(213 97% 87%)',
					300: 'hsl(212 96% 78%)',
					400: 'hsl(213 94% 68%)',
					500: 'hsl(217 91% 60%)',
					600: 'hsl(221 83% 53%)',
					700: 'hsl(224 76% 48%)',
					800: 'hsl(226 71% 40%)',
					900: 'hsl(224 64% 33%)',
					950: 'hsl(226 55% 21%)',
				},
				indigo: {
					50: 'hsl(226 100% 97%)',
					100: 'hsl(226 100% 94%)',
					200: 'hsl(228 96% 89%)',
					300: 'hsl(230 94% 82%)',
					400: 'hsl(234 89% 74%)',
					500: 'hsl(239 84% 67%)',
					600: 'hsl(243 75% 59%)',
					700: 'hsl(245 58% 51%)',
					800: 'hsl(244 55% 41%)',
					900: 'hsl(242 47% 34%)',
					950: 'hsl(244 47% 20%)',
				},
				workflow: {
					50: 'hsl(0 0% 98%)',
					100: 'hsl(0 0% 96%)',
					200: 'hsl(0 0% 88%)',
					300: 'hsl(0 0% 80%)',
					400: 'hsl(0 0% 64%)',
					500: 'hsl(0 0% 45%)',
					600: 'hsl(0 0% 32%)',
					700: 'hsl(0 0% 25%)',
					800: 'hsl(0 0% 15%)',
					900: 'hsl(0 0% 9%)',
					950: 'hsl(0 0% 4%)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'glow': 'glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
