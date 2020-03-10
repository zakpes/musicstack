const webpack = require("webpack");
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    entry: {
        index: "./src/page-index/index.js",
        test: "./src/page-test/test.js",
        results: "./src/page-results/results.js",
        vendorCSS: "./src/js/vendorCSS.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page-index/index.html",
            inject: true,
            chunks: ["vendorCSS", "index"],
            chunksSortMode: "manual",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/page-test/test.html",
            inject: true,
            chunks: ["vendorCSS", "test"],
            chunksSortMode: "manual",
            filename: "test.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/page-results/results.html",
            inject: true,
            chunks: ["vendorCSS", "results"],
            chunksSortMode: "manual",
            filename: "results.html"
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    // "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map"
});