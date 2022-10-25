const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// path - удобная работа с путями

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // Указывает на папку с исходниками
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './analytics.js',
  },
  output: {
    // filename: '[name].bundle.js',
    filename: '[name].[contenthash].js',
    // ctrl + shift + r можно не делать
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // Дословно - если встретишь в js файлах импорт css то применить use
      },
    ],
  },
};
