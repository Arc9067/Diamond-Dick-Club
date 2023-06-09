/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#84B026",
        secondary: "#217373",
        accent: "#161F30",
      },
      fontFamily: {
        Mattb: ["Mattb", "sans-serif"],
      },
    },
  },
  plugins: [],
};
