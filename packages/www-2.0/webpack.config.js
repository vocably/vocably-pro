const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackWatchPlugin = require('webpack-watch-files-plugin').default;
const { environment } = require('./environment');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.handlebars$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              helperDirs: `${__dirname}/handlebars-helpers`,
            },
          },
        ],
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/, type: 'asset/resource' },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png', '.svg'],
  },
  devtool: 'source-map',
  output: {
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name].[contenthash][ext][query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.handlebars',
      inject: true,
      favicon: './src/favicon.ico',
      environment,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
    new WebpackWatchPlugin({
      files: ['./environment.js'],
    }),
  ],
  devServer: {
    port: 8050,
    hot: false,
    liveReload: true,
  },
};
