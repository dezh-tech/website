/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    }
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)"
      }
    },
    fontFamily: "Neue Machina Inktrap",
    screens: {
      'sm': {
        'min': '360px',
        'max': '767px'
      },
      'md': {
        'min': '768px',
        'max': '1023px'
      },
      // sm: "360px",
      // md: "768px",
      lg: "1024px",
      xl: "1366px",
      '2xl': "1536px",
      '3xl': "1920px",
    },
  },
  plugins: [
    function ({
      addComponents
    }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            // maxWidth: '640px',
            padding: "0 1rem",
          },
          "@screen md": {
            // maxWidth: '768px',
            padding: "0 1rem",
          },
          "@screen lg": {
            // maxWidth: '1024px',
            padding: "0 2rem",
          },
          "@screen xl": {
            // maxWidth: '1536px',
            padding: "0 2rem",
          },
          "@screen 2xl": {
            // maxWidth: '1424px',
            padding: "0 64px",
          },
          "@screen 3xl": {
            // maxWidth: '1792px',
            padding: "0 64px",
          },
        },
      });
    },
  ],
}