const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'development',
  module: {
    rules: [
      ...base.module.rules,  // 加载 scss/less/stylus 文件，并将其代码转换成 css 代码，再将 css 代码转换成 JS 代码，再将 JS 代码转换成 style 标签。
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],  // 开发环境：速度更快，不需要生成文件；加载 css 文件。
      },
    ],
  },
};