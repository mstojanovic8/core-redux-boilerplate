const TerserPlugin = require('terser-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const packageJSON = require('./package.json');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// public/favicon-32x32.png
const fbkrFavIconRelativePath = null;
const publicFolderRelativePath = null;
const fileName = packageJSON.name;
module.exports = (env, argv) => {
  if (fileName === 'redux-boilerplate'
    || publicFolderRelativePath === null
    || fbkrFavIconRelativePath === null) {
    throw new Error('Must set name,public folder relative path and favicon relative path');
  }
  const isProduction = argv.mode === 'production';

  const config = {
    entry: { [fileName]: './src/index.js' },
    output: {
      path: path.resolve(__dirname, publicFolderRelativePath),
      filename: '[name]/index.js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@fishingbooker/translations': path.resolve('.', 'node_modules',
          '@fishingbooker/translations'),
        'styled-components': path.resolve('.', 'node_modules', 'styled-components')
      }
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              envName: isProduction ? 'production' : 'development'
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            failOnWarning: isProduction,
            failOnError: isProduction
          }
        }
      ]
    },
    stats: {
      assets: true,
      colors: true,
      errors: true,
      errorDetails: true,
      hash: true
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          },
          extractComments: false
        })
      ]
    },
    performance: {
      hints: 'warning'
    },
    plugins: [
      new WebpackNotifierPlugin({
        title: fileName,
        alwaysNotify: true,
        contentImage: path.join(__dirname, fbkrFavIconRelativePath)
      })
      // , new BundleAnalyzerPlugin()
    ]
  };
  if (!isProduction) {
    config.devtool = 'source-map';
  }
  return config;
};
