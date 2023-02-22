/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        DARKBLUE: "hsl(209, 23%, 22%)",
        VERYDARKBLUE: "hsl(207, 26%, 17%)",
        LIGHTDARKBLUE: "hsl(200, 15%, 8%)",
        DARKGREY: "hsl(0, 0%, 52%)",
        VERYLIGHTGRAY: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
