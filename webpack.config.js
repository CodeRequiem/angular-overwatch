var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractLESS = new ExtractTextPlugin('bundle.css');

module.exports = {
    entry: './src/app/app.module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/img',
                to: 'img/',
            },
        ]),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            { test: /\.(html|jpg|png)$/, loader: 'file-loader?name=[name].[ext]' },
            // { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/i, use: extractLESS.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })},
        ],
    },
    plugins: [
        extractLESS,
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    },
    devtool: "#inline-source-map",
	watch: true
}
