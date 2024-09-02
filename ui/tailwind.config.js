/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#48293F",
      secondary: "#E8543E",
      white: "#fff",
      lightgray: "#EFEFEF",
      gray: "#919191",
      transparent: "transparent"
    }
  },
  plugins: [],
}

