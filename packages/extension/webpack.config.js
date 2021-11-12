const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const prodConfig = {
  mode: 'production',
  entry: {
    contentScript: './src/contentScript.ts',
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
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/options.html',
      filename: 'options.html',
    }),
    new CopyPlugin({
      patterns: [{ from: '.', to: '.', context: 'assets' }],
      options: {},
    }),
  ],
};

const devConfig = {
  devtool: 'source-map',
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
