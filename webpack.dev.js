const webpack = require("webpack");
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
    results: "./src/js/results.js",
    about: "./src/js/about.js",
    vendorCSS: "./src/js/vendorCSS.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      inject: true,
      chunks: ["vendorCSS", "index"],
      chunksSortMode: "manual",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/about.html",
      inject: true,
      chunks: ["vendorCSS", "about"],
      chunksSortMode: "manual",
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/results.html",
      inject: true,
      chunks: ["vendorCSS", "results"],
      chunksSortMode: "manual",
      filename: "results.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true,
            },
          },
          // "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
});
