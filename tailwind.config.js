/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        secondary: "#EFEBE9",
        brightBlue: "#007BFF",
        cyan: "#17C3B2",
        red: "#DC4492",
        yellow: "#FDCC49",
        brown: "#3E3E3E",
        paper: "#FFF9F4",
        darkGrey: "#757575",
        orange: "#E97451",
      },

      fontFamily: {
        jost: ["Jost", "serif"],
        caveat: ["Caveat", "serif"],
      },

      animation: {
        colorChange: "colorChange 15s infinite ease-in-out 1s",
      },
      keyframes: {
        colorChange: {
          "0%, 100%": {
            background: "#ff7eb3", // Pink
            boxShadow: "-15px 10px 20px rgba(255, 126, 179, 0.6)",
            transform: "translate(0, 0)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "20%": {
            background: "#b772f7", // Purple
            boxShadow: "15px -10px 20px rgba(183, 114, 247, 0.6)",
            transform: "translate(10px, -20px)",
            borderRadius: "70% 30% 50% 50% / 60% 40% 40% 60%",
          },

          "40%": {
            background: "#ffcc00", // Yellow
            boxShadow: "-15px -10px 20px rgba(255, 204, 0, 0.6)",
            transform: "translate(-20px, 15px)",
            borderRadius: "50% 50% 40% 60% / 40% 50% 60% 50%",
          },
          "60%": {
            background: "#00ffff", // Cyan
            boxShadow: "10px -15px 30px rgba(0, 255, 255, 0.7)",
            transform: "translate(15px, 20px)",
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "80%": {
            background: "#f77272", // Lime Green
            boxShadow: "-15px -20px 25px rgba(247, 114, 114, 0.7)",
            transform: "translate(-10px, 5px)",
            borderRadius: "40% 60% 50% 50% / 50% 50% 60% 40%",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },

  plugins: [require("tailwindcss-animate")],
};
