'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/app.js',
  output: {
    path: './dist',
    filename: 'scripts.js',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    }],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
};
