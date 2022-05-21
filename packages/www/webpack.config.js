const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackWatchPlugin = require('webpack-watch-files-plugin').default;
const { environment } = require('./environment');
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
                helperDirs: [`${__dirname}/handlebars-helpers`],
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
      chunkFilename: '[name].[contenthash].js',
      filename: '[name].[contenthash].js',
      assetModuleFilename: '[name].[contenthash][ext][query]',
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
          })
      ),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/assets', to: 'assets' }],
      }),
      new WebpackWatchPlugin({
        files: [`${pagesDir}/${pagesPattern}`, './environment.js'],
      }),
    ],
    devServer: {
      port: 8050,
      hot: false,
      liveReload: true,
    },
  };
};
