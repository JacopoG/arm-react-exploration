/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['GrenzeGotisch', 'serif'],
      sans: ['Vollkorn', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

module.exports = config
