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
        hxs: '1.5rem',
        hs: '3rem',
        hm: '6rem',
        hl: '8rem',
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
      screens,
    },
  },
  plugins: [fluid, require('tailwindcss-animate')],
}
