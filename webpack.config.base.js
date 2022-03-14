const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg|svg)$/,
        use: ['file-loader',],
      },  // 会自动添加 hash；本质是把文件变成文件路径
      {
        test: /\.styl$/i,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass'),
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '写代码啦',
      template: 'src/assets/index.html'
    }),
  ],
  output: {
    filename: 'index.[contenthash].js'
  },
};