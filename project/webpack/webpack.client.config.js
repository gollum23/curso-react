const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './source/client.jsx',
  output: {
    filename: 'app.js',
    path: './built/statics',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' }),
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  plugins: [
    new ExtractTextPlugin('../statics/styles.css'),
  ],
};
