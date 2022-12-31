const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const EslitPlugin = require('')
module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'src/assets'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: {
        dropdown: path.resolve(__dirname, './src/components/js/dropdown.js'),
        dualSlider: path.resolve(__dirname, './src/components/js/dual-slider.js'),
        Search: path.resolve(__dirname, './src/components/js/search.js')
    },
    output: {
        path: path.resolve(__dirname, './src/mainapp'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]



}