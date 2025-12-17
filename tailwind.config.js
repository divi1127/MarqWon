// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      /* --- KEYFRAMES --- */
      keyframes: {
        /* Floating blobs */
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

        /* Horizontal marquee (logos scroll) */
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      /* --- ANIMATIONS --- */
      animation: {
        float: "float 6s ease-in-out infinite",
        float2: "float2 7s ease-in-out infinite",

        /* Logo scroll animation */
        marquee: "marquee 30s linear infinite",
      },
    },
  },

  plugins: [],
};
