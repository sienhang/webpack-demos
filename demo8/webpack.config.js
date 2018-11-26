var HtmlwebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlwebpackPlugin({  // 不需要手动新建index.html
      title: 'Webpack-demos8',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080' // 不需要手动打开浏览器
    })
  ]
};
