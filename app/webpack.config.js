const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react'],
          plugins: [
            'transform-object-rest-spread',
            'syntax-dynamic-import',
            'dynamic-import-webpack',
            'syntax-trailing-function-commas',
            'transform-async-to-generator',
          ],
        },
      }],
    }],
  },
  // plugins: [HtmlWebpackPluginConfig],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    port: 8080,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    disableHostCheck: true,   // That solved it
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
}
