const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    entry: {
        index: "./src/page-index/index.js",
        results: "./src/page-results/results.js",
        vendorCSS: "./src/js/vendorCSS.js"
    },
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page-index/index.html",
            inject: true,
            chunks: ["vendorCSS", "vendor", "index"],
            chunksSortMode: "manual",
            excludeAssets: [/vendorCSS.*.js/],
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/page-results/results.html",
            inject: true,
            chunks: ["vendorCSS", "vendor", "results"],
            chunksSortMode: "manual",
            excludeAssets: [/vendorCSS.*.js/],
            filename: "results.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackExcludeAssetsPlugin(),
        new FaviconsWebpackPlugin({
            logo: "./src/img/icons/favicon.svg",
            publicPath: "imgs",
            outputPath: "imgs/favicons",
            prefix: "favicons/"
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /^vendorCSS\.[a-z|A-Z|0-9]+\.css$/
            }),
            new TerserPlugin({
                include: /^vendor\.[a-z|A-Z|0-9\.]+\.js$/
            })
        ],
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
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
                                outputStyle: 'expanded',
                                minimize: false
                            },
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
});