/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F4845F',
          hover: '#e5734e',
          light: '#FDE8DF',
          glow: 'rgba(244, 132, 95, 0.2)',
        },
        bg: '#FAFAF8',
        surface: {
          DEFAULT: '#F2F1EF',
          2: '#EAEAE7',
        },
        text: '#1C1C1E',
        muted: '#8A8A8E',
        border: 'rgba(28, 28, 30, 0.08)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(28,28,30,0.06)',
        'md': '0 8px 24px rgba(28,28,30,0.08)',
        'lg': '0 20px 60px rgba(28,28,30,0.10)',
        'glow': '0 4px 20px rgba(244, 132, 95, 0.2)',
        'glow-hover': '0 8px 30px rgba(244, 132, 95, 0.2)',
      },
      transitionProperty: {
        'default': 'all',
      },
      transitionDuration: {
        'default': '300ms',
        'fast': '150ms',
        'slow': '600ms',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
