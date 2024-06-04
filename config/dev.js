const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('./webpack.config');

module.exports = merge({}, common, {
    mode: process.env.NODE_ENV,
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true
    },
    output: {
        publicPath: '/'
    },
    resolve: {
        
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new ESLintPlugin({
            context: path.join(__dirname, "../src/"),
            cache: true
        }),
        new webpack.DefinePlugin({
            env: JSON.stringify(process.env.NODE_ENV)
        })
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: {
            index: '/index.html'
        },
        static: {
            directory: path.join(__dirname, '../dist')
        },
        port: 9001,
        open: true, // 自动打开浏览器
        hot: true, // 启用 webpack 的模块热替换特性
        // host: 'local-ip',
        host: '0.0.0.0',
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            },
        ]
    }
});
