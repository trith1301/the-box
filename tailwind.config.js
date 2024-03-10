/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ["Work Sans Variable", "sans-serif"],
      },
      colors: {
        primary: "#2947a9",
        secondary: "#f9995d",
      },
      animation: {
        "fade-in": "fade-in .4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  safelist: [
    "block",
    "hidden",
    "flex",
    "font-bold",
    "text-primary",
    "text-[#c2c7d6]",
    "before:block",
    "before:content-['']",
    "before:mr-[18px]",
    "before:w-[4px]",
    "before:h-full",
    "before:bg-primary",
    "cursor-not-allowed",
  ],
  plugins: [],
}
