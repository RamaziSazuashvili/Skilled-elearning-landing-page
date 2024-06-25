/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray_c: "#83869A",
        orange_c: "#FF6F48",
        pink_c: "#F02AA6",
        darkblue_c: "#13183F",
      },

      width: {
        94: "343px",
      },
    },
  },
  plugins: [],
}

