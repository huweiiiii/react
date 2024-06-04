
const path = require("path");
const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { join } = path;
const cssHandle = require("./css.js");

console.log(process.env.NODE_ENV);
module.exports = {
  entry: [
    join(__dirname, "../src/index.tsx")
  ],
  output: {
    path: join(__dirname, "../dist"),
    filename: "js/[contenthash:8].[name].js",
    chunkFilename: "js/[contenthash:8].[name].chunk.js",
    assetModuleFilename: "img/[contenthash:8][name][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.m?[tj]sx?$/,
            use: ["babel-loader"],
            exclude: /node_modules/,
          },
          {
            test: /\.module.css$/,
            use: cssHandle("", true),
          },
          {
            test: /\.css$/,
            use: cssHandle(""),
          },
          {
            test: /\.styl(us)?$/,
            use: cssHandle("stylus"),
            exclude: /node_modules/,
          },
          {
            test: /\.module.s[ac]ss$/i,
            use: cssHandle("sass", true),
            exclude: /node_modules/,
          },
          {
            test: /\.s[ac]ss$/i,
            use: cssHandle("sass"),
            exclude: /node_modules/
          },
          {
            test: /\.less$/i,
            use: cssHandle("less"),
            exclude: /node_modules/,
          },
          {
            test: /\.(jpg|jpe?g|gif|png)$/,
            type: "asset",
            exclude: /node_modules/,
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
          },
          {
            test: /\.(woff2|ttf)$/,
            type: "asset/resource",
            exclude: /node_modules/,
          },
          {
            test: /\.svg/,
            type: "asset/inline",
            exclude: /node_modules/,
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: join(__dirname, "../public/index.html"),
      favicon: join(__dirname, "../public/favicon.ico"),
    }),
  ],
  resolve: {
    extensions: [".ts",".tsx",".vue",".js",".jsx",".json",".wasm"],
    alias: {
      "@": join(__dirname, "../src"),
    }
  }
};
