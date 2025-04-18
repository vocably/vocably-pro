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
    'play-audio': './src/play-audio.ts',
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
    new webpack.BannerPlugin(
      [
        'Hello to whoever is reading this! I think you are cool 🤜🤛',
        '',
        `I did not obfuscate the code to help you better understand it.`,
        `However, I don't know how to disable minification of web components (StencilJS).`,
        `Sorry, I didn't look too hard!`,
        `The code of the entire project is available at:`,
        `https://github.com/vocably/language-learning-tool`,
        '',
      ].join('\n')
    ),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '../extension-popup/dist',
          to: 'popup',
        },
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
        { from: 'play-audio.html', to: 'play-audio.html', context: 'src' },
      ],
      options: {},
    }),
    new webpack.DefinePlugin(environmentVariables.stringified),
  ],
  performance: {
    hints: false,
  },
  devtool: 'inline-source-map',
  optimization: {
    minimize: false,
  },
};

const devConfig = {
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
