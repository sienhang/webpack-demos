var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery'], // 依赖的第三方库，不会经常变更的
  },
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',
        }
      },
    }
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     filename: 'vendor.js'
  //   })
  // ]
};
