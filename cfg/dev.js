'use strict';

let path = require('path');
let webpack = require('webpack');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');
const defaultSrcPath = path.join(__dirname, '/../src');
let additionalPaths = [];

let config = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + 8000,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: false,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  additionalPaths: additionalPaths,
  port: 8000,
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: 8000,
    publicPath: '/assets/',
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSrcPath}/actions/`,
      components: `${defaultSrcPath}/components/`,
      sources: `${defaultSrcPath}/sources/`,
      stores: `${defaultSrcPath}/stores/`,
      styles: `${defaultSrcPath}/styles/`,
      config: `${defaultSrcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: defaultSrcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version","firefox 15"]}'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version","firefox 15"]}!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version","firefox 15"]}!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version","firefox 15"]}!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version","firefox 15"]}!stylus-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(mp4|ogg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [].concat(
          additionalPaths,
          [ path.join(__dirname, '/../src') ]
        )
      }
    ]
  }
};

module.exports = config;
