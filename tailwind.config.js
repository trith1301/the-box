/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      base: "0em",
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em",
    },
    extend: {
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
  ],
  plugins: [],
}
