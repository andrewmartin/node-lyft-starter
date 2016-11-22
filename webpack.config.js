/* eslint-disable no-irregular-whitespace */

const path = require('path');

module.exports = {
    entry: './assets/scripts/main.jsx',
    output: {
    path: `${__dirname}/public/js/`,
    filename: 'bundle.js',
  },
    module: {
        loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
    },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.json'],
    alias: {
      scripts: path.join(__dirname, '/assets/scripts'),
      components: path.join(__dirname, '/assets/scripts/components'),
      reducers: path.join(__dirname, '/assets/scripts/redux/reducers'),
      actions: path.join(__dirname, '/assets/scripts/redux/actions'),
    },
  },
};
