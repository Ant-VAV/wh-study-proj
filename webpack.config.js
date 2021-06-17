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
        }]
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
