/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'cursive', 'font-sans'],
        'slack': ['Slackside One', 'cursive', 'font-sans'],
        'tail': ['Yellowtail', 'cursive', 'font-sans'],
      }
    },
  },
  plugins: [require("daisyui")],
}