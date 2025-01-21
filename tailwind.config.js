/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./client/components/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        larken: ['larken', 'serif'],
        inconsolata: ['inconsolata', 'san-serif'],
      },
      fontSize: {
        s: '1.5rem',
        l: '3rem',
        xl: '18rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
    },
  },
  plugins: [require('tailwindcss-animate')],
}
