/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        LIGHTEBONYCLAY: "#2b3743",
        DARKEBONYCLAY: "#202d36",
        LIGHTDARKBLUE: "hsl(200, 15%, 8%)",
        DARKGREY: "hsl(0, 0%, 52%)",
        VERYLIGHTGRAY: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
