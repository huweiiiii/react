const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge({}, common, {
    // mode: process.env.NODE_ENV,
    output: {
        publicPath: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            env: JSON.stringify('test'),
            'process.env': JSON.stringify(process.env),
        })
    ],
    devtool: 'source-map'
});
