module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colorOne: "#00064A",
        colorTwo: "#696987",
        colorThree: "#240D85",
        colorFour: "#240D85",
        colorFive: "#F4F4FF",
        colorSix: "#393951",
        colorSeven: "#000218",
      },
      opacity: {
        15: "0.15",
      },
      fontSize: {
        "4xl": "42px",
        xl: "22px",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
