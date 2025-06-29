// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        savate: ['var(--font-savate)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
