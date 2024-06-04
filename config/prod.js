const webpack = require('webpack');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config');

module.exports = merge({}, common, {
    mode: process.env.NODE_ENV,
    output: {
        publicPath: './'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            ignoreOrder: true
            // chunkFilename: "[id].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            env: JSON.stringify(process.env.NODE_ENV)
        })
    ],
    // 生成多个js文件
    optimization: {
        // 会将Webpack在浏览器端运行时需要的代码单独抽离到一个文件
        runtimeChunk: 'single',
        // usedExports: true,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minSize: 30000,
                    minChunks: 1,
                    chunks: 'initial',
                    // 该配置项是设置处理的优先级，数值越大越优先处理
                    priority: 1
                },
                react: {
                    test: /[\\/]react[\\/]/,
                    name: 'react',
                    minSize: 30000,
                    minChunks: 1,
                    chunks: 'initial',
                    priority: 10
                },
                'react-dom': {
                    test: /[\\/]react-dom[\\/]/,
                    name: 'react-dom',
                    minSize: 30000,
                    minChunks: 1,
                    chunks: 'initial',
                    priority: 10
                },
                // 其他不是node_modules中的模块，如果有被引用不少于2次，那么也提取出来
                default: {
                    minChunks: 2,
                    priority: -20,
                    // 如果当前代码块包含的模块已经存在，那么不在生成重复的块
                    reuseExistingChunk: true
                }
            }
        }
    }
});
