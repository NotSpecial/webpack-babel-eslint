const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

// Start with dev config
const config = require('./webpack.config.js');

// Remove development server and code map
config.devServer = undefined;
config.devtool = '';

// Add optimization plugins
config.plugins = [
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
];

module.exports = config;
