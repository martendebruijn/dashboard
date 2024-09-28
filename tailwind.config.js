/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './stories/**/*.{mdx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', '.dark'],
}