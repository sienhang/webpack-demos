var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({ // 定义常量
  __DEV__: process.env.DEBUG || false,
  __DEV1__: JSON.stringify(process.env.DEBUG || 'false'),
  __DEV2__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
});

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [devFlagPlugin]
};
