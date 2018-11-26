var webpack = require('webpack');


module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
    ]
  },
  // 新，本例子中，main1.jsx 打到 bundle1.js中，main2.jsx 打到 bundle2.js中，react、react-dom打到common.js中
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'all',
          name: 'common',
        },
      },
    }
  }
  // 旧
  // plugins: [
  //   // 当多个脚本具有公共块时，可以使用CommonsChunkPlugin将公共部分提取到单独的文件中，这对于浏览器缓存和节省带宽非常有用。
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: "commons",
  //     // (the commons chunk name)
  //     filename: "commons.js",
  //     // (the filename of the commons chunk)
  //   })
  // ]
}
