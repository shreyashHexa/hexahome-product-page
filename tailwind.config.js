module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glory: ['Glory', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        torange: "#FFC107",
        hblue:"#000B20",
        lgray:"#E5EAF3",
        tblue:"#002E83",
        fbg:"#151C22",
        gradient: "linear-gradient(90deg, #D8E3FF 0%, rgba(255, 255, 255, 0) 131.99%, #29252E 272.14%)",

      },
    },
  },
  plugins: [],
};
