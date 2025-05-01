/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // Custom glow shadow
        glow: '0 0 15px rgba(255, 255, 255, 0.8)',
      },
      keyframes: {

        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)' },
          '50%': { boxShadow: '0 0 25px rgba(255, 255, 255, 1)' },
        },
        path: {
          "80%": {
            transform: "scale(0.3)",
            borderRadius: "100%",
          },
          "90%": {
            transform: "scale(1.2)",
          },
          "95%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        traversed: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#9333eabf",
            borderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#4f46e5bf",
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#3b82f6bf",
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#22d3ee",
          },
        },
        wall: {
          "0%": {
            transform: "scale(0.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        traversed: "traversed 0.5s cubic-bezier(0, 0, 0.2, 1)",
        path: "path 1.5s cubic-bezier(0, 0, 0.2, 1)",
        wall: "wall 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      colors: {
        // Optional: Define a custom color if needed
        silver: '#C0C0C0',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
