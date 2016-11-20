const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app.ts',
  output : {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool : 'source-map',
  watch: true,
  module : {
    loaders: [
      {
        test: /\.tsx?$/, loader: 'ts-loader'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  devServer: {
    contentBase: './build',
    hot: true,
    stats: {
      chunks: false,
      colors: true
    }
  }
}
