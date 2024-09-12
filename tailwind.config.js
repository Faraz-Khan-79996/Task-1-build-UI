/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E2368',  // A dark blue for primary elements
        secondary: '#828B9C', // A Lighter text color according to figma file
        secondary_dark:'#444957',//A darkser shade of text
        orange: '#E23744',    // A green accent color
        dark: '#1F2937',      // A dark gray for backgrounds
        light: '#3C509D',     // A light gray for backgrounds as per figma file
        error: '#EF4444',     // Red for error messages
        success: '#22C55E',   // Green for success messages
      },      
    },
  },
  plugins: [],
}

