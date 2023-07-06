/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Gotham SSm A, sans-serif"],
    },
    colors: {
      white: "#f4f4f4",
      black: "#171a20",
      gray: "#393c41",
    },
    extend: {
      colors: {
        transparent: "transparent",
      },
      opacity: {
        65: ".65",
      },
    },
  },
  plugins: [],
};
