/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      screens: {
        "mx-14": { max: "1430px" },
        "mx-13": { max: "1330px" },
        "mw-xl": { max: "1279px" },
        "mw-12": { max: "1200px" },
        "mw-11": { max: "1100px" },
        // => @media (max-width: 1279px) { ... }
        "mw-lg": { max: "1024px" },
        "mw-9": { max: "900px" },
        // => @media (max-width: 1023px) { ... }
        "mw-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }
        "mw-sm1": { max: "690px" },
        "mw-sm2": { min: "691px" },
        "mw-sm": { max: "639px" },
        "mw-sm4": { max: "500px" },
        "mw-sm5": { max: "450px" },
        "mw-sm3": { max: "400px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
