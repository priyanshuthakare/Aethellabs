/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./index.html",
        "app/**/*.{ts,tsx}",
        "components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Blue - #472FFF
                aethel: {
                    50: '#f0f0ff',
                    100: '#e4e1ff',
                    200: '#cdc8ff',
                    300: '#aba0ff',
                    400: '#8570ff',
                    500: '#472FFF',  // Primary
                    600: '#3a24d9',
                    700: '#2f1bb3',
                    800: '#271894',
                    900: '#040959',  // Secondary/Dark
                    950: '#020536',
                },
                // Navy Blue - #040959
                navy: {
                    50: '#e8e9f7',
                    100: '#c5c7eb',
                    200: '#9ea2de',
                    300: '#777dd1',
                    400: '#5a61c7',
                    500: '#3d45bd',
                    600: '#2a2b93',
                    700: '#1a1a6d',
                    800: '#0c0d47',
                    900: '#040959',  // Secondary
                    950: '#020536',
                },
                // CSS Variable Colors
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
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                'lg': 'var(--radius)',
                'md': 'calc(var(--radius) - 2px)',
                'sm': 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji'
                ]
            },
            fontSize: {
                '4.5xl': ['2.5rem', { lineHeight: '1.1' }],
                '5.5xl': ['3.5rem', { lineHeight: '1.1' }],
                '6.5xl': ['4rem', { lineHeight: '1.05' }],
                '7xl': ['4.5rem', { lineHeight: '1.05' }],
                '8xl': ['6rem', { lineHeight: '1' }],
            },
            boxShadow: {
                'glow': '0 0 60px 20px rgba(71, 47, 255, 0.15)',
                'glow-sm': '0 0 30px 10px rgba(71, 47, 255, 0.1)',
                'glow-lg': '0 0 80px 30px rgba(71, 47, 255, 0.2)',
                'aethel': '0 10px 40px -10px rgba(71, 47, 255, 0.4)',
                'aethel-lg': '0 20px 60px -15px rgba(71, 47, 255, 0.5)',
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 10px 40px -15px rgba(0, 0, 0, 0.1)',
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
                    from: { opacity: '0', transform: 'translateY(-10px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-in-right': {
                    from: { opacity: '0', transform: 'translateX(30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px 5px rgba(71, 47, 255, 0.2)' },
                    '50%': { boxShadow: '0 0 40px 10px rgba(71, 47, 255, 0.4)' }
                },
                'scale-in': {
                    from: { opacity: '0', transform: 'scale(0.95)' },
                    to: { opacity: '1', transform: 'scale(1)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out forwards',
                'fade-up': 'fade-up 0.6s ease-out forwards',
                'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'scale-in': 'scale-in 0.3s ease-out forwards',
            },
            backgroundImage: {
                'aethel-gradient': 'linear-gradient(135deg, #472FFF 0%, #040959 100%)',
                'aethel-gradient-reverse': 'linear-gradient(135deg, #040959 0%, #472FFF 100%)',
                'aethel-gradient-soft': 'linear-gradient(135deg, #5a45ff 0%, #472FFF 100%)',
                'blue-glow': 'radial-gradient(circle at center, rgba(71, 47, 255, 0.15) 0%, transparent 70%)',
                'section-glow': 'linear-gradient(180deg, transparent 0%, rgba(71, 47, 255, 0.05) 50%, transparent 100%)',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
            }
        },
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1200px',
                '2xl': '1400px'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
    darkMode: ["class"],
};
