/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title': '#1B31A8',
        'border': '#E9EEF2',
        'result': '#0079FF',
      },
      backgroundColor: {
        'desktop': '#F4F8FA',
      },
      width: {
        'card-desktop': '560px',
        'card-mobile': '360px',
        'title-desktop': '584px',
        'title-mobile': '328px',
      },
      height: {
        'card-desktop': '511px',
        'card-mobile': '586px',
        'title-desktop': '24px',
        'title-mobile': '22px',
      },
      fontFamily: {
        'title-font': 'Work Sans, sans-serif',
      }
    },
  },
  plugins: [],
}

