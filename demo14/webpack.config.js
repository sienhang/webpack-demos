module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
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
  // 如果我们想引用一个库，但是又不想让webpack打包，并且又不影响我们在程序中以CMD、AMD或者window/global全局等方式进行使用，那就可以通过配置externals。这个功能主要是用在创建一个库的时候用的，但是也可以在我们项目开发中充分使用。
  externals: {
    // data1111  ->> require('data1111')
    // 'data'  ->> window.data

    data1111: 'data',
    // react: 'React',
    // 'react-dom': 'ReactDOM',
  }
};
