const autoprefixer = require('autoprefixer');
const cssnsno = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    cssnsno({preset: 'default'})
  ]
}