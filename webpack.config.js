const path = require('path')
const srcDir = path.resolve(__dirname, 'src')
const publicDir = path.resolve(__dirname, 'public')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  context: srcDir,
  devtool: 'inline-source-map',
  entry: {
    index: './index.js'
  },
  output: {
    path: publicDir,
    filename: '[name].js'
  },
  devServer: {
    contentBase: publicDir,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 3000,
    openPage: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'resolve-url-loader',
            'postcss-loader?sourceMap',
            'sass-loader?sourceMap'
          ],
          publicPath: './'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        include: /\.pug/,
        use: [ {loader: 'raw-loader'}, { loader: 'pug-html-loader',
          options: {
            data: {mainNavData: require('./src/data/main-nav.json')}
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html'),
      title: 'Custom template'
    })
  ]
}
