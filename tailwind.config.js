/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2D4F6E',
          brown: '#7F4D1B',
          gold: '#F7E1A2',
          white: '#FFFFFF',
          black: '#000000',
          royal: '#2D4F6E',
          navy: '#2D4F6E',
          ivory: '#FFFFFF',
          charcoal: '#000000',
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
        'hero-gradient': 'linear-gradient(90deg, rgba(45,79,110,.98) 0%, rgba(45,79,110,.86) 45%, rgba(0,0,0,.2) 100%)',
      },
    },
  },
  plugins: [],
}
