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
        hs: '2rem',
        hm: '4rem',
        hl: '8rem',
        hxl: '18rem',

        ps: '1rem',
        pm: '1.2rem',
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

}
