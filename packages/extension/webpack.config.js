const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const DotenvFlow = require('dotenv-flow-webpack');
const { WatchTimerPlugin, replaceDefinitions } = require('@vocably/webpack');
const { basename } = require('path');
const webpack = require('webpack');

const dotEnvPlugin = new DotenvFlow({
  system_vars: true,
});

const prodConfig = {
  mode: 'production',
  entry: {
    contentScript: './src/contentScript.ts',
    serviceWorker: './src/serviceWorker.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html?$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mjs'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/options.html',
      filename: 'options.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: '.', to: '.', context: 'assets' },
        {
          from: 'manifest.json.txt',
          to: 'manifest.json',
          context: 'src',
          transform(content) {
            return replaceDefinitions(
              content.toString(),
              dotEnvPlugin.definitions
            );
          },
        },
      ],
      options: {},
    }),
    dotEnvPlugin,
  ],
  performance: {
    hints: false,
  },
};

const devConfig = {
  devtool: 'inline-source-map',
  plugins: [new WatchTimerPlugin(basename(__dirname))],
};

module.exports = (env) => {
  switch (true) {
    case env.development:
      return merge(prodConfig, devConfig);
    case env.production:
      return prodConfig;
    default:
      throw new Error('No matching configuration was found!');
  }
};
