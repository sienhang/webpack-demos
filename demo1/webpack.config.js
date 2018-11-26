module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  // mode: development 启用以下插件
  // plugins: [
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
  // ]

  // mode: production 启用以下插件
  // plugins: [
  //   new UglifyJsPlugin(/* ... */),
  //   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
  //   new webpack.optimize.ModuleConcatenationPlugin(),
  //   new webpack.NoEmitOnErrorsPlugin()
  // ]
}
