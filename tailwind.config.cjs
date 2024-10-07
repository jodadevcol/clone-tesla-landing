/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Universal-Sans-Text', ...defaultTheme.fontFamily.sans],
      display: ['Universal-Sans-Display', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#f4f4f4',
        black: '#171a20',
        gray: '#393c41',
        blue: {
          400: '#3368ff',
          300: '#3e6ae1',
          200: '#3457b1'
        }
      },
      opacity: {
        65: '.65'
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4
      },
      spacing: {
        '1vh': '4vh',
        '2vh': '8vh',
        '3vh': '12vh',
        '4vh': '16vh'
      },
      boxShadow: {
        link: '0 2px 0 -1px currentColor',
        'link-hover': '0 3px 0 -1px currentColor'
      },
      fontSize: {
        '3xl': '1.75rem'
      },
      transitionTimingFunction: {
        bezier: 'cubic-bezier(0.5,0,0,0.75)'
      },
      transitionDuration: {
        330: '330ms'
      }
    }
  },
  plugins: []
}
