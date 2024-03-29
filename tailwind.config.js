/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)"
      }
    },
  },
  plugins: [
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            // maxWidth: '640px',
            padding: '.5rem'
          },
          '@screen md': {
            // maxWidth: '768px',
            padding: '1rem'

          },
          '@screen lg': {
            // maxWidth: '960px',
            padding: '1rem'
          },
          '@screen xl': {
            // maxWidth: '1232px',
          },
          '@screen 2xl': {
            // maxWidth: '1424px',
          },
          '@screen 3xl': {
            // maxWidth: '1792px',
            padding: '0 64px'
          },
        }
      })
    }
  ],
}