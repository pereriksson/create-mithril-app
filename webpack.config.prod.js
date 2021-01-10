const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './dist');
const options = {
    static: outputPath
};
const title = "Title";

module.exports = {
    mode: "production",
    entry: [
        './index.js'
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
                        loader: 'file-loader'
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
        })
    ]
};
