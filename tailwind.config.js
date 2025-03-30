/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
export default {
  content: {
    files: ['./client/components/**/*.{js,ts,jsx,tsx}', './index.html'],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontSize: {
        hxs: '1rem',
        hs: '1.5rem',
        hm: '4rem',
        hl: '7rem',
        hxl: '17rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
      screens,
    },
  },
  plugins: [fluid, require('tailwindcss-animate')],
}
