module.exports = {
  theme: {
    extend: {
      animation: {
        'galaxy-spin': 'galaxy-spin 20s linear infinite',
      },
      keyframes: {
        'galaxy-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }, // Clockwise rotation
        },
      },
    },
  },
  plugins: [],
};
