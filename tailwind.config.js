/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/components/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        larken: ['larken', 'serif'],
        inconsolata: ['inconsolata', 'san-serif'],
      },
      fontSize: {
        s: '1.2rem',
        l: '5rem',
        xl: '18rem',
      },
    },
  },
  plugins: [],
}
