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
      "gray": "#808080",
      "greyBorder": "#F2F2F2"
    }),
    boxShadow: {
      'orange': '0px 0px 50px rgba(254, 121, 2, 0.5)'
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    extend: {},
  },
  plugins: [],
}
