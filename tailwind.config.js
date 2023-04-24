/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    // themes: false,
    themes: [
      {
        mytheme: {
          primary: "#14532d",

          secondary: "#84cc16",

          accent: "#cb28ef",

          neutral: "#1C1929",

          "base-100": "#E3ECF3",

          info: "#9EC7F0", 

          success: "#24DBB4",

          warning: "#9B6C0D",

          error: "#FA6B7B",
        },
      },
      // "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
    ],
  },
};
