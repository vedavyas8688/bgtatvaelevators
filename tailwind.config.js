/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: '#F8F7F1',
        black: '#0F2B45',
        brand: {
          blue: '#0F2B45',
          brown: '#0F2B45',
          gold: '#EB9B34',
          white: '#F8F7F1',
          black: '#0F2B45',
          royal: '#0F2B45',
          navy: '#0F2B45',
          ivory: '#F8F7F1',
          charcoal: '#0F2B45',
          gray: '#0F2B45',
          silver: '#0F2B45',
        },
      },
      fontFamily: {
        display: ['Josefin Sans', 'sans-serif'],
        sans: ['Josefin Sans', 'sans-serif'],
      },
      letterSpacing: { luxury: '0.22em' },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, rgba(15,43,69,.98) 0%, rgba(15,43,69,.86) 45%, rgba(15,43,69,.2) 100%)',
      },
    },
  },
  plugins: [],
}
