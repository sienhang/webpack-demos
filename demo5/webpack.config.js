module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules:[
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, //字节  如果图片小于8192字节，则转成data url(url-loader)，否则转成普通url(file-loader)
            }
          }
        ]
      }
    ]
  }
}
