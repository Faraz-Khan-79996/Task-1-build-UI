/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily :{
        primary : ['Open Sans' , 'sans serif']
      },

      colors: {
        primary: '#0E2368',  // A dark blue for primary elements according to figma file
        secondary: '#828B9C', // A Lighter text color according to figma file
        secondary_dark:'#444957',//A darkser shade of text according to figma file
        orange: '#E23744',    // A green accent color
        dark: '#1F2937',      // A dark gray for backgrounds according to figma file
        light: '#3C509D',     // A light gray for backgrounds as per figma file
        error: '#EF4444',     // Red for error messages
        success: '#22C55E',   // Green for success messages
      },      
    },
  },
  plugins: [],
}

