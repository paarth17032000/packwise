import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
				border: '#e2e8f0',
				input: '#e2e8f0',
				ring: '#9b87f5',
				background: '#ffffff',
				foreground: '#0f172a',
				primary: {
					DEFAULT: '#9b87f5',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#f1f5f9',
					foreground: '#1e293b'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#f8fafc'
				},
				muted: {
					DEFAULT: '#f1f5f9',
					foreground: '#64748b'
				},
				accent: {
					DEFAULT: '#e5deff',
					foreground: '#1e293b'
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#0f172a'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#0f172a'
				},
				brand: '#9b87f5',
				'brand-light': '#e5deff',
				'brand-dark': '#7e69ab',
				sidebar: {
					DEFAULT: '#fafafa',
					foreground: '#64748b',
					primary: '#1a202c',
					'primary-foreground': '#fafafa',
					accent: '#f5f5f6',
					'accent-foreground': '#1a202c',
					border: '#e2e8f0',
					ring: '#3b82f6'
				}
			},
			borderRadius: {
				lg: '0.75rem',
				md: 'calc(0.75rem - 2px)',
				sm: 'calc(0.75rem - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-up': 'slide-up 0.3s ease-out',
				'slide-down': 'slide-down 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
			}
		}
	},
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
