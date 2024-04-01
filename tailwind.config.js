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
        spacing: {
          "sp1": "var(--sp1)",
          "sp2": "var(--sp2)",
          "sp3": "var(--sp3)",
          "sp4": "var(--sp4)",
          "sp5": "var(--sp5)",
          "sp6": "var(--sp6)",
          "sp7": "var(--sp7)",
          "sp8": "var(--sp8)",
          "sp9": "var(--s9)",
          "sp10": "var(--s10)",
          "sp11": "var(--s11)",
          "sp12": "var(--s12)",
          "sp13": "var(--sp13)",
          "sp14": "var(--sp14)",
          "sp15": "var(--sp15)",
          "sp16": "var(--sp16)",
          "sp17": "var(--sp17)",
          "sp18": "var(--sp18)",
        },
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
            padding: "0 1.5rem",
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