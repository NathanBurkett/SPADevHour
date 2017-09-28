var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    entry: {
        app: path.resolve(__dirname, 'src/index.jsx'),
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] }
                }
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(
        [
            '*.js',
            '*.js.map',
        ], {
            root: path.resolve(__dirname, 'docs'),
            exclude: [],
            verbose: true,
            dry: false
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'docs')
    }
};

module.exports = config;
