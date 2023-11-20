/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans'],
      Raleway: ['Raleway', 'sans'],
    },
    extend: {
      colors: {
        'codedragi-pink': '#FF48B0',
        'codedragi-blue': '#66D9ED',
        'codedragi-gray':'#101826',
      }
    },
  },
  plugins: [],
}

