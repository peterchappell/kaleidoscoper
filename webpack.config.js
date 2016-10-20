var path = require("path")
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  //context: path.join(__dirname, 'src'),
  entry: {
    //styles: './src/styles/main.scss'//,
    scripts: './src/scripts/main.js',
    download: './src/scripts/download.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: "public"
  },
  module: {
    loaders: [
      // TODO: Re-enable this for a prod build?
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract('css!sass')
      // },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
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
      }
    ])
  ]
}
