// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      /* --- FLOATING BLOB ANIMATIONS --- */
      keyframes: {
        float: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -20px) scale(1.05)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        float2: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-20px, 20px) scale(1.08)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        float2: "float2 7s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
