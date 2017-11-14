const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: 'index.html',
  inject: 'body',
})

const scopedNameTemplate = '[name]__[local]___[hash:base64:5]'

const getBabelPlugins = (env, options) => {
  const plugins = [
    'transform-object-rest-spread',
    'syntax-dynamic-import',
    'dynamic-import-webpack',
    'syntax-trailing-function-commas',
    'transform-async-to-generator',
    ['react-css-modules', {
      filetypes: {
        '.scss': 'postcss-scss',
      },
      exclude: '\.verbatim\.s?css$',
      generateScopedName: scopedNameTemplate,
      webpackHotModuleReloading: true,
    }],
  ]
  if (env === 'dev') {
    return plugins.concat('react-hot-loader/babel')
  }
  return plugins
}

const getSCSSLoaders = (env, options) => {
  const SCSSLoaders = [{
    loader: 'css-loader',
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [autoprefixer],
    },
  }, {
    loader: 'sass-loader',
    options: {
      data: '$is-screener: ' + (options.isScreener ? 'true' : 'false') + ';',
    },
  }]

  if (options.module) {
    SCSSLoaders[0].options = {
      modules: true,
      camelCase: true,
      localIdentName: scopedNameTemplate,
    }
  }
  if (env === 'production') {
    return ExtractTextPlugin.extract({ fallback: 'style-loader', use: SCSSLoaders })
  } else {
    return [{loader: 'style-loader'}, ...SCSSLoaders]
  }
}

const getRules = (env, options) => [{
  test: /\.jsx?$/,
  exclude: [/node_modules/],
  use: [{
    loader: 'babel-loader',
    options: {
      babelrc: false,
      presets: [['es2015', { modules: false }], 'react', 'flow'],
      plugins: getBabelPlugins(env, options),
    },
  }],
}, {
  // Use the `.img.svg`-extension when using an SVG in an `<img>`-tag
  test: /\.img\.svg$/,
  use: [{
    loader: 'svg-url-loader',
    options: {
      stripdeclarations: true,
      noquotes: true,
    },
  }],
}, {
  // Use the normal `.svg`-extension when using an SVG inside CSS, i.e. `url(...)`
  test: /\.svg$/,
  exclude: /\.img\.svg$/,
  use: [{
    loader: 'svg-url-loader',
    options: {
      stripdeclarations: true,
    },
  }],
}, {
  test: /(components|pages|layouts)\/.*\.scss$/,
  exclude: /\.verbatim\.scss$/,
  use: getSCSSLoaders(env, Object.assign({}, options, { module: true })),
}, {
  test: /styles\/styles.scss/,
  use: getSCSSLoaders(env, options),
}, {
  test: /\.verbatim\.s?css$/,
  use: getSCSSLoaders(env, options),
}, {
  test: /node_modules\/.+\.s?css$/,
  use: getSCSSLoaders(env, options),
}, {
  test: /\.(ttf|eot|woff|woff2)$/,
  loader: 'file-loader',
  options: {
    name: 'fonts/[name].[ext]',
  },
}]

const getConfig = (env, options) => {
  if (!options) {
    options = {}
  }

  return {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: getRules(env, options),
    },
    // plugins: [HtmlWebpackPluginConfig],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ],
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
}

module.exports = getConfig
