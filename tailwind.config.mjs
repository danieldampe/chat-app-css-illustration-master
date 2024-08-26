/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      minWidth: {
        mobile: 375,
        desktop: 1440
      },
      colors: {
        primary: {
          'pale-violet': 'hsl(276, 100%, 81%)',
          'moderate-violet': 'hsl(276, 55%, 52%)',
          'dark-violet': 'hsl(271, 15%, 43%)',
          blue: 'hsl(206, 6%, 79%)',
          'desaturated-violet': 'hsl(271, 36%, 24%)',
          'grayish-violet': 'hsl(270, 7%, 64%)'
        },
        secondary: {
          white: 'hsl(0, 0%, 100%)',
          'light-violet': 'hsl(270, 20%, 96%)',
          'dark-violet': 'hsl(271, 36%, 24%)',
          magenta: 'hsl(289, 100%, 72%)'
        },
        gradient: {
          magenta: 'hsl(293, 100%, 63%)',
          violet: 'hsl(264, 100%, 61%)'
        }
      },
      fontFamily: {
        rubik: '"Rubik", sans-serif' /* 400, 500, 700 */
      }
    }
  },
  plugins: []
}
