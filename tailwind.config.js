/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        bodyColor: "#FFEEC28C", // Custom color for body background
        sectionBg: "#FD706A", // Custom color for sections
        cardBg: "#FFFFFF",
        descriptionBg: "#FD706A",
        footerBg: "#f0fdf4",
      },
      
    },
  },
  plugins: [],
};
