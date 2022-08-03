const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackWatchPlugin = require('webpack-watch-files-plugin').default;
const { environment } = require('./environment');
const { alternatives } = require('./alternatives');
const glob = require('glob');

const pagesDir = `./src/pages`;
const handlebarsExtension = `handlebars`;
const pagesPattern = `**/*${handlebarsExtension}`;

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s?[ac]ss$/i,
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
                helperDirs: [`${__dirname}/src/handlebars-helpers`],
                partialDirs: [`${__dirname}/src/partials`],
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
      chunkFilename: env.production ? '[name].[contenthash].js' : '[name].js',
      filename: env.production ? '[name].[contenthash].js' : '[name].js',
      assetModuleFilename: env.production
        ? '[name].[contenthash][ext][query]'
        : '[name].[ext][query]',
    },
    plugins: [
      ...glob.sync(pagesPattern, { cwd: pagesDir }).map(
        (handlebarsPage) =>
          new HtmlWebpackPlugin({
            template: `${pagesDir}/${handlebarsPage}`,
            filename: handlebarsPage.replace(handlebarsExtension, 'html'),
            inject: true,
            favicon: './src/favicon.ico',
            environment,
            alternatives,
          })
      ),
      new MiniCssExtractPlugin({
        filename: env.production ? '[name].[contenthash].css' : '[name].css',
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/assets', to: 'assets' }],
      }),
      new WebpackWatchPlugin({
        files: [
          `${pagesDir}/${pagesPattern}`,
          './environment.js',
          './alternatives.js',
        ],
      }),
    ],
    devServer: {
      port: 8050,
      hot: false,
      liveReload: true,
    },
  };
};
