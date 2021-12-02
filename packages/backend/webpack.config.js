const path = require('path');
const getModules = require('./webpack/getModules.js');
const DotenvFlow = require('dotenv-flow-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  entry: getModules('./src/lambdas'),
  externals: {
    'aws-sdk': 'aws-sdk',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  target: 'node',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [
    new DotenvFlow(),
    new CopyPlugin({
      patterns: [{ from: 'google-key.json', to: 'google-key.json' }],
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
};
