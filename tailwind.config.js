/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      screens: {
        ph: { max: "500px" },
        // => @media (max-width: 500px)  { ... }
        mb: { max: "400px" },
        // => @media (max-width: 400px)  { ... }
      },
      colors: {
        primary: { 200: "#0b752c", 100: "#549e6b" },
        secondary: { 200: "#fa8348", 100: "#faae48" },
      },
      backgroundImage: {
        "hero-bg": "url('./images/blob-scene-haikei.svg')",
        "alcohol-bg": "url('./images/alcohol-1297932_1280.png')",
        "products-bg": "url('./images/wave-haikei-2.svg')",
        "location-bg": "url('./images/cafe-1869656_1920.jpg')",
        "fruit1-bg": "url('./images/drawing-1442406_640.png')",
        "fruit2-bg": "url('./images/fruit-1876159_640.png')",
        "fruit3-bg": "url('./images/pear-1876160_640.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
