/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
        limelight : ["Limelight", "cursive"],
        licorice : ["Licorice", "cursive"],
      },
    },
  },
  plugins: [],
};
