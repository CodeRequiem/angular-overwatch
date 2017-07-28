var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
        // { test: /\.html$/, loader: "html-loader" },
        { test: /\.(html|jpg|png)$/, loader: "file-loader?name=[name].[ext]" },
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    },
    devtool: "#inline-source-map",
	watch: true
}
