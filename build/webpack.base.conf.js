const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  target: 'node',
  context: resolve('src'),
  entry: './module.ts',
  optimization: {
    minimize: false,
    removeAvailableModules: true,
    removeEmptyChunks: false,
    mergeDuplicateChunks: false,
    providedExports: false,
    usedExports: false,
    sideEffects: false,
    concatenateModules: false,
    namedModules: true,
    minimize: false
  },
  output: {
    filename: "module.js",
    path: resolve('dist'),
    libraryTarget: "amd",
    pathinfo: true
  },
  externals: [
    // remove the line below if you don't want to use buildin versions
    'jquery', 'lodash', 'moment', 'angular',
    function(context, request, callback) {
      var prefix = 'grafana/';
      if (request.indexOf(prefix) === 0) {
        return callback(null, request.substr(prefix.length));
      }
      callback();
    }
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: 'plugin.json' },
      { from: 'README.md' },
      { from: 'partials/*' },
      { from: 'img/*' },
      { from: 'libs/*' },
    ])                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  ],
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loaders: [
          "ts-loader"
        ],
        exclude: /node_modules/,
      }
    ]
  }
}
