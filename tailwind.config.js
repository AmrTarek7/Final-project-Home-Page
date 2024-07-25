/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        // padding: {
        //   DEFAULT: "1rem",
        //   sm: "2rem",
        //   lg: "4rem",
        //   xl: "5rem",
        //   "2xl": "6rem",
        // },
      },
      fontFamily: {
        lora: ['"Lora", serif'],
        Rosario: ['"Rosario", sans-serif'],
      },
      color: {
        
        
      }
    },
  },
  plugins: [flowbite.plugin()],
};
