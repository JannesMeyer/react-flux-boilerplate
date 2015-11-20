'use strict';

var webpack = require('webpack');
var path = require('path');
var absolutePath = path.join.bind(path, __dirname);

//////////////////////////
// Webpack configuration
//////////////////////////
var config = {
  cache: true,
  module: {
    loaders: [
      { test: /\.css$/,  loaders: ['style', 'css', 'autoprefixer'] },
      { test: /\.less$/, loaders: ['style', 'css', 'autoprefixer', 'less'] },
      { test: /\.js$/,   loader:  'babel', include: absolutePath('src') }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  // Plugins for production
  config.plugins = [
    new webpack.DefinePlugin({ __DEV__: false, 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.UglifyJsPlugin({ comments: / ^/, compress: { warnings: false }})
  ];
} else {
  // Plugins for development
  config.plugins = [
    new webpack.DefinePlugin({ __DEV__: true })
  ];
}

///////////////////////
// Client-side bundle
///////////////////////

var clientConfig = Object.assign({
  entry: './src/app.js',
  output: {
    path: './public/build/',
    filename: 'app.bundle.js'
  }
}, config);

///////////////////////
// Server-side bundle
///////////////////////

var serverConfig = Object.assign({
  entry: './src/server.js',
  output: {
    path: './build/',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z][a-z\d\.\-]*$/, // Don't bundle packages
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
}, config);

module.exports = [ clientConfig, serverConfig ];