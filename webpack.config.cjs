/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

// load JS and JSX files through Babel
const babelLoader = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
      },
      // By default this is true, setting to false means
      // we don't have to specify the extension for .mjs
      // files or packages where package.json type is module.
      resolve: {
        fullySpecified: false,
      },
    },
  ],
};

const resolve = {
  extensions: ['.js', '.jsx'],
};

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/server.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'server.cjs',
  },
  module: babelLoader,
  plugins: [
    new webpack.DefinePlugin({
      PORT: process.env.PORT || 3001,
    }),
  ],
  resolve,
};

const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: './src/client/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/static',
    filename: 'client.js',
  },
  module: babelLoader,
  plugins: [
    new htmlWebpackPlugin({
      template: `${__dirname}/src/client/index.html`,
    }),
  ],
};

module.exports = [serverConfig, clientConfig];
