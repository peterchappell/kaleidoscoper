/*eslint-env node*/

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const validate = require('webpack-validator')
const CustomValidationSchema = require('webpack-validator').Joi

const commonConfig = {
  context: path.join(__dirname, 'src'),
  entry: {
    styles: './styles/main.scss',
    scripts: './scripts/main.js',
    download: './scripts/download.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=/[name].[ext]'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader?name=/images/[name].[hash].[ext]'
      }
    ]
  },
  sassLoader: {
    outputStyle: 'compact'
  },
  plugins: [
    new ExtractTextPlugin('../public/main.css', {
        allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: 'images/**/*'
      },
      {
        from: 'favicon.ico'
      },
      {
        from: 'kaleidoscoper-logo.png'
      }
    ])
  ]
}

const prodConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
}

var config

if (process.env.npm_lifecycle_event === 'prod') {
  config = merge(commonConfig, prodConfig, {})
} else {
  config = commonConfig
}

const schemaExtension = CustomValidationSchema.object({
  sassLoader: CustomValidationSchema.any()
})

module.exports = validate(config, {schemaExtension: schemaExtension})
