'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
    new ExtractPlugin('bundle-[hash].css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  }
}
