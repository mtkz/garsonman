module.exports = {
  content: [
    "./dist/pages/*.html",
    "./dist/*.html"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    },
    extend: {},
  },
  plugins: [],
}