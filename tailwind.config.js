// const colors = require('tailwindcss/colors')


module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.liquid"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          pink: "#E50A7B",
          whitetext: "#FBFBFB",
          whitecard: "#F6F6F6",
          grayBackground: "#202020",
        },
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
    fontFamily: {
      poppins: ["'Poppins', sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [

    require('@tailwindcss/aspect-ratio'),
  ],
};
