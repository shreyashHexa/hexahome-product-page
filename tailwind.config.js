/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        torange: "#FFC107",
        hblue:"#000B20",
        lgray:"#E5EAF3",
      },
    },
  },
  plugins: [],
};
