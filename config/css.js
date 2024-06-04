const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";
const sLoader = devMode
    ? {
        loader: "style-loader",
        options: {}, // 新版无 sourceMap
    }
    : {
        loader: MiniCssExtractPlugin.loader,
        options: {
            // 这里可以指定一个 publicPath
            // 默认使用 webpackOptions.output中的publicPath
            publicPath: "../",
        },
    };
module.exports = function (type, modules = false) {
    const css = [
        sLoader,
        {
            loader: "css-loader",
            options: {
                sourceMap: devMode,
                modules
            },
        },
        { loader: "postcss-loader", options: { sourceMap: devMode } },
    ];
    if (type) {
        css.push({
            loader: `${type}-loader`,
            options: { sourceMap: devMode },
        });
    }
    return css;
};
