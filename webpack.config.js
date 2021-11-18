const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};