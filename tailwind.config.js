module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/%]+/g) || [],
    },
  },
  plugins: [],
};
