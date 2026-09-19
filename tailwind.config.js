/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: '#F8F7F1',
        black: '#2D4F6E',
        brand: {
          blue: '#2D4F6E',
          brown: '#2D4F6E',
          gold: '#F7E1A2',
          white: '#F8F7F1',
          black: '#2D4F6E',
          royal: '#2D4F6E',
          navy: '#2D4F6E',
          ivory: '#F8F7F1',
          charcoal: '#2D4F6E',
          gray: '#2D4F6E',
          silver: '#2D4F6E',
        },
      },
      fontFamily: {
        display: ['Jost', 'sans-serif'],
        sans: ['Jost', 'sans-serif'],
      },
      letterSpacing: { luxury: '0.22em' },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, rgba(45,79,110,.98) 0%, rgba(45,79,110,.86) 45%, rgba(45,79,110,.2) 100%)',
      },
    },
  },
  plugins: [],
}
