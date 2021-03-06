const path = require('path')

module.exports = ['cjs', 'esm'].map(format => ({
  target: 'web',
  mode: 'none',
  entry: path.join(__dirname, `index.${format}.js`),
  output: {
    path: __dirname,
    filename: `bundle.${format}.js`
  },
  stats: 'none'
}))
