/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Akaya: ["Akaya Kanadaka", "cursive"],
        offside: ["Offside", "cursive"],
        inter: ["Inter", "sans-serif"],
        Galada: ["Galada", "cursive"],
        Patua: ["Patua One", "cursive"],
        Tauri: ["Tauri", "sans-serif"],
        Aladin: ["Aladin", "cursive"],
        Original: ["Original Surfer", "cursive"],
        Pattaya: ["Pattaya", "sans-serif"],
      },
      dropShadow: {
        "3xl": "-17px 7px 43px rgba(160, 160, 160, 0.25)",
      },
    },
  },
  plugins: [],
};
