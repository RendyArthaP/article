module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cabin: ["Cabin", "sans-serif"]
      }
    },
    backgroundColor: theme => ({
      "orange": "#FE7902",
      "white": "#FFFFFF",
      "black": "#000000"
    }),
    textColor: {
      "orange": "#FE7902",
      "blue": "#0072B1",
      "white": "#FFFFFF",
      "black": "#000000",
      "grey": "#828282",
      "gray": "#333333",
      "grayText": "#808080"
    },
    borderColor: theme => ({
      "orange": "#FE7902",
      "white": "#FFFFFF",
      "black": "#000000",
      "grey": "#E0E0E0",
      "gray": "#808080"
    })
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    extend: {},
  },
  plugins: [],
}
