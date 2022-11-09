/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#999999",
        lightPink: "#F9C3C5"
      },
      keyframes: {
        appear: {
          "0%": { transform: "translateX(50vw)" },
          "80%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(0)" }
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        appear: "appear 300ms ease-in-out forwards",
        opacity: "opacity 300ms ease-in-out forwards"
      },
      backgroundImage: {
        main: 'url("http://res.cloudinary.com/hw2jydiif/image/upload/v1667476701/btby2qfnqpbpnnfpzdt5.webp")'
      },
      fontSize: {
        lg: "16pt",
        md: "12pt",
        sm: "10pt"
      },
      fontFamily: {
        "myriad-pro": "myriad-pro"
      }
    }
  },
  plugins: [
    require("tailwindcss-owl"),
    require("tailwindcss-animation-delay"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true })
  ]
};
