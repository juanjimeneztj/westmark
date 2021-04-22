const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        }
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CssMinimizerPlugin(),
    ],
};