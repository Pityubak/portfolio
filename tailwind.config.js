const defaultTheme = require("tailwindcss/defaultTheme")
const path = require("path")

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
    options: {
      safelist: ["/^bg-pattern/"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        50: "12.5rem",
        100: "25rem",
        150: "37.5rem",
        136: "34.5rem",
      },

      maxHeight: {
        "max-h-120": "30rem",
      },
      backgroundColor: theme => ({
        ...theme("colors"),

        pine: "#157A6E",
        
        badge: "#2B2B2B",
        prl3: "#D3D5D4",
        active: "#6F4983",
        base: "#474747",
      }),

      zIndex: {
        "-1": "-1",
        100: "100",
        150: "150",
      },
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        blg: "1400px",
        ...defaultTheme.screens,
      },
      flex: {
        split: " 0 0 21%",
      },
      translate: {
        125: "125%",
        "-125": "-125%",
      },
      textColor: theme => ({
        badge: "#2B2B2B",
        pine: "#157A6E",
        icon: "#6A4C93",
        prl3: "#D3D5D4",
        active: "#6F4983",
        hover: "#F3FFB6",
        pineDark:"#0F574F",
      }),
      backgroundImage: theme => ({
        shiny: "url(/bg-shiny.svg)", 
        pattern3: "url(/bg-pattern3.svg)", 
        pattern4: "url(/bg-pattern4.svg)",
  
       }),
    },
  },
  variants: {
    extend: {
      textColor: ["disabled"],
      width: ["hover"],
      backgroundImage: ["hover", "focus"],
      backgroundColor: ["hover", "active"],
    },
  },
  plugins: [],
}
