'use strict'

const webpack = require('webpack')

const env = require('./lib/env')
const paths = require('./lib/paths')

const processEnvPlugin = new webpack.DefinePlugin({
  'env': {
    'SOCKET_URL': `"${env.SOCKET_URL}"`
  }
})

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin()

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/
      , exclude: /node_modules/
      , loaders: [
          'babel-loader?presets[]=es2015,presets[]=react'
        ]
      }
    , {test: /\.json$/, loader: 'json'}
    , {test: /\.sass$/, loaders: ['style', 'css', 'sass']}
    , {test: /\.(ttf|svg|png|jpg)$/, loader: 'url-loader'}
    ]
  }
, resolve: {
    root: [
      paths.FRONTEND
    , paths.I18N
    , paths.LIB
    ]
  }
, entry: {
    base: './frontend/Base.jsx'
  }
, output: {
    path: './dist'
  , filename: '[name].bundle.js'
  }
, plugins: [
    processEnvPlugin
  , uglifyPlugin
  ]
}
