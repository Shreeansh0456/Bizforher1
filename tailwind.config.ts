
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
					DEFAULT: '#db8a6c',
					light: '#e4a08a',
					dark: '#c97b5d',
					foreground: '#faf5ef'
				},
				secondary: {
					DEFAULT: '#1c2939',
					light: '#293a52',
					dark: '#111927',
					foreground: '#faf5ef'
				},
				accent: {
					DEFAULT: '#d9cfcd',
					gold: '#db8a6c'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#d9cfcd',
					foreground: '#1c2939'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Bolt design palette
				'rose-dark': '#4A3535',
				'rose-mid': '#6B5858',
				'rose-light': '#B89090',
				'blush': '#F7B3BC',
				'cream': '#F3EDE7',
				'sage': '#B8C3BD',
				'slate-blue': '#C4CEDF',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
				serif: ['"Playfair Display"', 'Georgia', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"drift": {
					"0%, 100%": { transform: "translate(0, 0) scale(1)" },
					"33%": { transform: "translate(30px, -20px) scale(1.05)" },
					"66%": { transform: "translate(-20px, 15px) scale(0.97)" },
				},
				"float-slow": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-18px)" },
				},
				"float-delay": {
					"0%, 100%": { transform: "translateY(0) rotate(0deg)" },
					"50%": { transform: "translateY(-12px) rotate(3deg)" },
				},
				"marquee": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
				"timeline-pulse": {
					"0%, 100%": { boxShadow: "0 0 0 0 rgba(247, 179, 188, 0.4)" },
					"50%": { boxShadow: "0 0 0 8px rgba(247, 179, 188, 0)" },
				},
				"line-sweep": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(200%)" },
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-in-right": {
					"0%": { opacity: "0", transform: "translateX(-20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"pulse-glow": {
					"0%, 100%": { boxShadow: "0 0 0 rgba(139, 92, 246, 0)" },
					"50%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }
				},
				"typing": {
					"0%": { width: "0%" },
					"100%": { width: "100%" }
				},
				"blink": {
					"0%, 100%": { borderColor: "transparent" },
					"50%": { borderColor: "#8B5CF6" }
				},
				"bounce-in": {
					"0%": { transform: "scale(0.8)", opacity: "0" },
					"70%": { transform: "scale(1.05)", opacity: "1" },
					"100%": { transform: "scale(1)", opacity: "1" }
				}
			},
			animation: {
				"drift": "drift 18s ease-in-out infinite",
				"float-slow": "float-slow 6s ease-in-out infinite",
				"float-delay": "float-delay 8s ease-in-out infinite 1.5s",
				"marquee": "marquee 28s linear infinite",
				"timeline-pulse": "timeline-pulse 2.5s ease-in-out infinite",
				"line-sweep": "line-sweep 2.5s ease-in-out infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
				"fade-in-right": "fade-in-right 0.5s ease-out",
				"scale-in": "scale-in 0.5s ease-out",
				"float": "float 3s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s infinite",
				"typing": "typing 3.5s steps(40, end), blink .75s step-end infinite",
				"bounce-in": "bounce-in 0.6s ease-out"
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(to bottom right, #8B5CF6, #A78BFA)",
				'card-gradient': "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
				'cta-gradient': "linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)"
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
