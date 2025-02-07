/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-red-black': 'linear-gradient(45deg, red, black)',
      },
      fontFamily: { sans: ['Raleway', 'sans-serif'], }, sans: ['Roboto', 'sans-serif']
      
    },
  },
  plugins: [],
}

