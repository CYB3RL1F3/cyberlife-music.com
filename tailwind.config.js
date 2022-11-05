/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#999999"
      },
      backgroundImage: {
        main: 'url("http://res.cloudinary.com/hw2jydiif/image/upload/v1667476701/btby2qfnqpbpnnfpzdt5.webp")'
      },
      fontSize: {
        lg: "16pt",
        sm: "10pt"
      },
      fontFamily: {
        "myriad-pro": "myriad-pro"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })]
};
