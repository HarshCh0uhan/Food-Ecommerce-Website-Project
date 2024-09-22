/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '3px 0px 20px 0px #c0c0c0',
      },
    },
  },
  plugins: [],
}

