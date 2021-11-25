const { basename } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WatchTimerPlugin } = require('@vocably/webpack');

module.exports = {
  mode: 'development',
  entry: './public/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /src\/.+\.html/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
    }),
    new WatchTimerPlugin(basename(__dirname)),
  ],
  devServer: {
    port: 8020,
  },
};
