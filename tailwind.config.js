/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './stories/**/*.{mdx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "dark-slate": "#020617",
      }
    },
  },
  plugins: [],
  darkMode: ['class', '.dark'],
}