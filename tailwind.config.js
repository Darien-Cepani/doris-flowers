/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Doris Flowers — soft lavender / lilac palette (matches the brand boxes)
        brand: {
          dark: '#322A45',      // deep plum ink / body text
          night: '#1E1733',     // deepest backgrounds (loader, hero, footer)
          gold: '#B79BDD',      // signature accent (soft lavender)
          deep: '#6F4E97',      // deeper purple for text & hairlines on white
          champagne: '#F3EEFA', // soft lilac-white section background
          red: '#9B4FB0',       // highlight / notification accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
