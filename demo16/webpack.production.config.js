// 生产阶段的构建
// 在生产阶段，可能还需要对打包的文件进行额外的处理，比如说优化，压缩，缓存以及分离CSS和JS。

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {

  // __dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
  entry:  __dirname + "/app/main.js", // 已多次提及的入口文件

  output: {
    path: __dirname + "/dist", // 打包后的文件存放的地方
    filename: "bundle-[hash].js" // 生产阶段：打包后输出文件的文件名，加入hash，解决缓存问题
  },

  // 生产阶段：不需要调试代码，设为false
  devtool: false, //注意修改了这里，这能大大压缩我们的打包代码

  // 本地服务器
  devServer: {
    // 默认 webpack-dev-server 会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
    contentBase: "./public", // 本地服务器所加载的页面所在的目录
    // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    historyApiFallback: true, // 不跳转
    // 设置为true，当源文件改变时会自动刷新页面
    inline: true, // 实时刷新,
    port: 9990, // 设置默认监听端口，如果省略，默认为 8080
    hot: true, // 热加载,
  },

  // Loaders
  // loaders 是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 生产阶段：分离CSS和JS文件，开发阶段使用"style-loader"
          },
          {
            loader: "css-loader",
            query: {
              modules: true, // 指定启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
            }
          },
          {
            loader: "postcss-loader", // 我们使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀
          },
        ]
      }
    ]
  },
  // 插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务
  // 插件并不直接操作单个文件，它直接对整个构建过程其作用
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    // 生产阶段不需要：热加载插件，
    // new webpack.HotModuleReplacementPlugin()
    // 这个插件的作用是依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html。这在每次生成的js文件名称不同时非常有用（比如添加了hash值）。
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
    }),
    // 生产环境，分离CSS和JS文件
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    // 输出文件添加了hash之后，会导致改变文件内容后重新打包时，文件名不同而内容越来越多，
    // clean-webpack-plugin 就在每次打包时如果文件不一样，则清除上次的hash打包文件
    new CleanWebpackPlugin('dist/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
  ],
}