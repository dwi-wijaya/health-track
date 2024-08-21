/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        container: 'var(--container-color)',
        stroke: 'var(--stroke-color)',
        primary: 'var(--primary-color)',
        title: 'var(--title-color)',
        text: 'var(--text-color)',
        subtext: 'var(--text-secondary)',
      },
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}