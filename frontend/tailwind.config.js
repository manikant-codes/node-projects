const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#d500f9",
        "primary-light": "#e040fb",
        "primary-lighter": "#ea80fc",
        "primary-dark": "#9500ae",
        accent: "#ff9800",
        "accent-light": "#ffa726",
        "accent-lighter": "#ffb74d",
        "accent-dark": "#b26a00",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
