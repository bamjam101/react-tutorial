/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0ab6ab",
        "brand-black": "#151515",
        "brand-white": "#ffffff",
      },
      backgroundColor: {
        "brand-blue": "#0ab6ab",
        "brand-black": "#151515",
        "brand-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
