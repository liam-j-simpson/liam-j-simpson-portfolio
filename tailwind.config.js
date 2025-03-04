/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./client/components/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontSize: {
        hs: '1.25rem',
        hm: '2rem',
        hl: '2.5rem',
        hxl: '18rem',

        ps: '1rem',
        pm: '1.25rem',
        pl: '1.5rem',
        pxl: '3rem',
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
