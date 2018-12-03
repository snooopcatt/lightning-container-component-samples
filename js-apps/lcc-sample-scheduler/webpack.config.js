const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = [{
    mode: 'development',
    entry: './webpack.entry.js',
    output: {
        path: path.resolve(__dirname, '../../force-app/main/default/staticresources/lcc_sample_scheduler'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        })
    ]
}];

module.exports = config;
