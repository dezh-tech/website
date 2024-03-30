/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // prefix: "",
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
    fontFamily: {
      Neue: 'Neue Machina'
    },
    screens: {
      'sm': '0px',
      'md': '768px',
      'lg': "1024px",
      'xl': "1366px",
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
            // minWidth: '0',
            padding: "0 1rem",
          },
          "@screen md": {
            // minWidth: '768px',
            padding: "0 1rem",
          },
          "@screen lg": {
            // minWidth: '1024px',
            padding: "0 2rem",
          },
          "@screen xl": {
            // minWidth: '1366px',
            padding: "0 2rem",
          },
          "@screen 2xl": {
            // minWidth: '1536px',
            padding: "0 64px",
          },
          "@screen 3xl": {
            // minWidth: '1920px',
            padding: "0 64px",
          },
        },
      });
    },
  ],
}