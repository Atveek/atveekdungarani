/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        offside: ["Offside", "cursive"],
        inter: ["Inter", "sans-serif"],
        Aladin: ["Aladin", "cursive"],
        Pattaya: ["Pattaya", "sans-serif"],
      },
      dropShadow: {
        "3xl": "-17px 7px 43px rgba(160, 160, 160, 0.25)",
      },
    },
  },
  plugins: [],
};
