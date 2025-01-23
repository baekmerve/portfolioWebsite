/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        borderMove: "border_move 8s ease-in-out infinite 1s",
        colorChange: "colorChange 8s infinite ease-in-out 1s",
      },
      keyframes: {
        colorChange: {
          "0%, 100%": {
            background: "#ff7eb3",
            boxShadow: "5px -10px 20px rgba(255, 126, 179, 0.6)",
            transform: "translate(0, 0)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            background: "#00ffff",
            boxShadow: "-10px 15px 30px rgba(0, 255, 255, 0.7)",
            transform: "translate(15px, 20px)",
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
        },

        border_move: {
          "0%, 100%": {
            borderWidth: "4px",
            borderColor: "rgba(0, 255, 255, 0.8)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            boxShadow: "0 0 15px 2px rgba(0, 255, 255, 0.6)",
            transform: "translate(0px, 0px)",
          },
          "50%": {
            borderWidth: "8px",
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            transform: "translate(10px, 15px)",
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
