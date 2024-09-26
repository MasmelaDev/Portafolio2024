/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      dropShadow: {
        'neon': '0 0 8px rgb(16 185 129)',
      },
      boxShadow: {
        'neon': '0 0 10px rgb(16 185 129)',
      },
      screens: {
        'xs': '350px',
      },
    },
  },
  plugins: [],
}