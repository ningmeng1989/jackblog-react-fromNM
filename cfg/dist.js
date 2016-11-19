'use strict';

let path = require('path');
let webpack = require('webpack');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');
let additionalPaths = [];
const defaultSrcPath = path.join(__dirname, '/../src');

let config = {
  entry: path.join(__dirname, '../src/index'),
  output: {
    path: 'dist/assets',
    filename: 'app.js',
    publicPath: 'assets/'
  },
  cache: false,
  // devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  additionalPaths: additionalPaths,
  // port:  8000,
  // debug: true,
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
