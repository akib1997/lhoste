module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    // fontSize: {
    //   "4xl": "2.625rem",
    // },
    extend: {
      colors: {
        main: "#00064A",
        gra: "#696987",
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
