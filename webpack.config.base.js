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