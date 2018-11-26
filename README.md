## 用法

* 全局安装 webpack、webpack-dev-server、webpack-cli

```bash
$ npm i -g webpack webpack-dev-server webpack-cli
```

* 克隆

```bash
$ git cone 
```

* 安装依赖

```bash
$ cd webpack-demos
$ npm install
```

* 运行


```bash
$ cd demo1
$ npm run dev
```

## 什么是Webpack
* Webpack是为浏览器构建JavaScript模块脚本的前端工具。
* 它可以像Browserify一样使用，并做更多的事情。

```bash
$ browserify main.js > bundle.js
# be equivalent to
$ webpack main.js bundle.js
```
* Webpack需要一个名为webpack.config.js的配置文件，它是一个CommonJS模块

```javascript
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```
* 有了 webpack.config.js 配置文件后，可以在没有任何参数的情况下调用 webpack

```bash
$ webpack
```

* webpack相关命令行选项
	* webpack - 为development环境构建
	* webpack -p - 为production环境构建（压缩）
	* webpack --watch - 对于连续增量的构建
	* webpack -d - 包括source maps
	* webpack --colors - 让构建时输出信息更好看
* 可以在 package.json 中自定义 scripts 字段

```
// package.json
{
  // ...
  "scripts": {
    "dev": "webpack-dev-server --devtool eval --progress --colors",
    "deploy": "NODE_ENV=production webpack -p"
  },
  // ...
}
```

## demo
* Entry file
* Multiple entry files
* Babel-loader
* CSS-loader
* Image loader
* CSS Module
* UglifyJs Plugin
* HTML Webpack Plugin and Open Browser Webpack Plugin
* Environment flags
* Code splitting
* Code splitting with bundle-loader
* Common chunk
* Vendor chunk
* Exposing Global Variables
* React router

## 参考
* [中文文档](https://www.webpackjs.com)
* [demo](https://github.com/ruanyf/webpack-demos)
* [入门](https://segmentfault.com/a/1190000006178770)
* [webpack4升级完全指南](https://segmentfault.com/a/1190000014247030)