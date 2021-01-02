const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const outputPath = path.resolve(__dirname, './dist');
const options = {
    static: outputPath
};
const title = "Title";

module.exports = {
    mode: "development",
    entry: [
        './index.js',
        'webpack-plugin-serve/client'
    ],
    output: {
        path: outputPath,
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /\/node_modules\//,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: title,
            hash: true,
            template: "./src/index.ejs"
        }),
        new Serve(options)
    ],
    watch: true
};
