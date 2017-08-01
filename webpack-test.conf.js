const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractLESS = new ExtractTextPlugin('bundle.css');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
         test: /\.(html|jpg|png)$/,
         loader: [
             'file-loader?name=[name].[ext]'
         ]
     },
     {
         test: /\.less$/i,
         use: extractLESS.extract({
             fallback: 'style-loader',
             use: ['css-loader', 'less-loader']
         })
     },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {},
      debug: true
    }),
    extractLESS,
  ],
  devtool: 'source-map'
};
