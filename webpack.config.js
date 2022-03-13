const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],  // 开发环境：速度更快，不需要生成文件
      },
    ],
  },
};