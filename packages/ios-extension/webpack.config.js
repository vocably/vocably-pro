const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {
  WatchTimerPlugin,
  replaceDefinitions,
  getEnvironmentVariables,
} = require('@vocably/webpack');
const { basename } = require('path');
const webpack = require('webpack');

const environmentVariables = getEnvironmentVariables();

const prodConfig = {
  mode: 'production',
  entry: {
    'content-script': './src/content-script.ts',
    'service-worker': './src/service-worker.ts',
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
              environmentVariables.definitions
            );
          },
        },
      ],
      options: {},
    }),
    new webpack.DefinePlugin(environmentVariables.stringified),
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
