const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.spec\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};