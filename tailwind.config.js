/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        Spectral: ["Spectral", "serif"],
      },
    },
  },
  plugins: [],
};

/*
font-family: 'Karla', sans-serif;
font-family: 'Spectral', serif;

*/
