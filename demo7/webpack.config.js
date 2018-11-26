var webpack = require('webpack')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new UglifyJsPlugin()  // UglifyJs Plugin 会缩小输出 (bundle.js) JS代码。
  ]
}
