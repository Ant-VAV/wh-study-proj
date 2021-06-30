const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV ?? 'development',
    entry: './src/index.tsx',
    output: {
        filename: './dist/index_bundle.js'
    },
    devServer: {
        hot: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(j|t)sx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(png|woff|woff2|eot|jpg)$/i,
            exclude: /node_modules/,
            use: ['file-loader']
        }, {
            test: /\.html$/i,
            exclude: /node_modules/,
            loader: 'html-loader',
        }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
}
