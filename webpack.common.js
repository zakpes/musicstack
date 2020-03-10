let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                // use: ["html-loader?interpolate=require!../page-index/index.html"]
                use: {
                    loader: "html-loader",
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.(otf|woff|ttf|eot)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "fonts"
                    }
                }
            }
        ]
    }
};