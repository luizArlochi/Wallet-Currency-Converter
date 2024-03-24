/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "black",
          secondary: "#14171c",
          tertiary: "#151030",
          "black-100": "#100d25",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        minHeight: {
          'screen': '100vh',
        },
        width: {
          'sidebar': '10rem',
        },
        backgroundImage: {
          "pattern": "url('src/assets/stock-1863880_1280.jpg')",
        },
        backdropBlur: {
          'custom': '10px',
        },
      },
    },
    plugins: [],
  };