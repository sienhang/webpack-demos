module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};
