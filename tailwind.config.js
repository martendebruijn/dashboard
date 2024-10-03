/** @type {import('tailwindcss').Config} */
import { colors } from './src/theme/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './stories/**/*.{mdx,tsx}'
  ],
  theme: {
    colors: {
      ...colors
    }
  },
  plugins: [],
  darkMode: ['class', '.dark'],
}
