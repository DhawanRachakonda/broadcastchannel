const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const commonPaths = require('./paths');

const PUBLIC_DOMAIN = 'localhost';
const THIS_SERVER_NAME = 'localhost';

const MiniCssPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
});

module.exports = {
  mode: 'development',
  entry: commonPaths.entryPath,
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:5]"
            }
          },
          {
            loader: '@americanexpress/purgecss-loader',
            options: {
              paths: [path.join(__dirname, 'src/**/*.{js,jsx}')],
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")()],
            }
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
    new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
    MiniCssPlugin,
    new Dotenv({
      path: './.env.dev', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false, // load '.env.defaults' as the default values if empty.
    }),
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 3003,
    public: PUBLIC_DOMAIN,
    proxy: [
      {
        context: ['/api/*'],
        target: {
          host: THIS_SERVER_NAME,
          protocol: 'http:',
          port: 8089,
        },
        secure: false,
        changeOrigin: false,
      },
    ],
  },
};
