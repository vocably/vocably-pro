const path = require('path');
const getModules = require('./webpack/getModules.js');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { getEnvironmentVariables } = require('@vocably/webpack');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  entry: getModules('./src'),
  externals: {
    '@aws-sdk/client-cognito-identity-provider':
      '@aws-sdk/client-cognito-identity-provider',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  target: 'node',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [new DefinePlugin(getEnvironmentVariables().stringified)],
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
};
