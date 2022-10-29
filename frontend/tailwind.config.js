/** @type {import('tailwindcss').Config} */
module.exports = {

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  content: [
    './src/components/**/*.js',
    './pages/**/*.js',
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer'),
  ],
}
