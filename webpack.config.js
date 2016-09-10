var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/main.js',
        './src/less/styles.less'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!autoprefixer!less"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015','stage-0','react']
                }
            }
        ]
    },
    debug: true
};