const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"], // Menambahkan font family Roboto
    },
    fontWeight: {
      "roboto-300": "300",
      "roboto-400": "400", // font weight roboto
      "roboto-500": "500",
      "roboto-700": "700",
    },
    container: {
      center: true, // Center the Container
      padding: "1rem",
    },
    colors: {
      primary: {
        100: "#5EDA3E",
        200: "#4CD629",
        300: "#44C125",
        400: "#3DAC21", // Primary
        500: "#35961D",
        600: "#2D8019",
        700: "#266B15",
        800: "#1E5610",
      },
      secondary: {
        100: "#FFB84D",
        200: "#FFAD33",
        300: "#FFA31A",
        400: "#FF9900", // Secondary
        500: "#E68A00",
        600: "#CC7A00",
        700: "#B26B00",
        800: "#995C00",
        900: "#804D00",
      },
      tersier: {
        100: "#9ED4EB",
        200: "#88CAE7",
        300: "#73C1E3",
        400: "#5EB7DE",
        500: "#49AEDA", // Tersier
        600: "#34A5D6",
        700: "#2997C7",
        800: "#2487B2",
        900: "#20779D",
      },
      error: {
        100: "#F53D3D",
        200: "#F42424",
        300: "#F10C0C", // error
        400: "#DB0B0B",
        500: "#C20A0A",
      },
      neutral: {
        100: "#FBFBFB",
        200: "#F2F2F2",
        300: "#E7E4E4",
        400: "#616161", // neutral
        500: "#414141",
        600: "#241E1E",
      },
      success: {
        100: "#47E16A",
        200: "#31DD58",
        300: "#22D24B", // success
        400: "#1FBD43",
        500: "#1BA73B",
      },
    },
    extend: {
      scrollBehavior: ["smooth"], // Mengaktifkan scroll-behavior smooth
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
