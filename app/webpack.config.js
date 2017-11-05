const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.jsx',
    },
    output: {
        filename: './public/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
            {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('src/main.css', {
            allChunks: true
        })
    ]
}