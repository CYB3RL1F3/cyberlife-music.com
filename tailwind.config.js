/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        "max-md": { max: "767px" }
      },
      colors: {
        gray: {
          100: "#DEDEDE",
          200: "#CCCCCC",
          300: "#AAAAAA",
          400: "#999999",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111"
        },
        lightGray: "#999999",
        lightPink: "#F9C3C5"
      },
      width: {
        inherit: "inherit"
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
        },
        loading: {
          "0%": { transform: "rotate(0deg" },
          "100%": { transform: "rotate(360deg" }
        }
      },
      animation: {
        appear: "appear 300ms ease-in-out forwards",
        opacity: "opacity 300ms ease-in-out forwards",
        loading: "loading 150ms linear infinite"
      },
      backgroundImage: {
        main: 'url("http://res.cloudinary.com/hw2jydiif/image/upload/v1667476701/btby2qfnqpbpnnfpzdt5.webp")'
      },
      fontSize: {
        lg: "16pt",
        md: "12pt",
        sm: "10pt",
        xl: "20pt",
        xxl: "70pt"
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
