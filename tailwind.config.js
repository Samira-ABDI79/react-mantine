/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        gray: '#757575',
        gray1:'#f1f1f1',
        gray2:'#616161',
        gray3:'#9e9e9e',
        green:'#009688'
      
        },
    },
  },
  plugins: [],
};
