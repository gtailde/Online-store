const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
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
            {
                test: /\.(webp)$/i,
                use: 'webp-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: {
        dropdown: path.resolve(__dirname, './src/components/js/dropdown.js'),
        dualSlider: path.resolve(__dirname, './src/components/js/dual-slider.js'),
        Search: path.resolve(__dirname, './app/search.ts'),
        cards: path.resolve(__dirname, './app/cards.ts'),
        loader: path.resolve(__dirname, './app/loader.ts'),
        listener: path.resolve(__dirname, './app/listener.ts'),
        getElement: path.resolve(__dirname, './app/getElement.ts'),
        productCart: path.resolve(__dirname, './app/product-cart.ts'),
        basketSet: path.resolve(__dirname, './app/basket-set.ts'),
        filter: path.resolve(__dirname, './src/components/ts/filter.ts'),
        searchCard: path.resolve(__dirname, './src/components/ts/searchCard.ts'),
        sort: path.resolve(__dirname, './src/components/ts/sortValue.ts'),
        filter: path.resolve(__dirname, './src/components/ts/filter.ts')
        Search: path.resolve(__dirname, './app/search.ts'),
        cards: path.resolve(__dirname, './app/cards.ts'),
        loader: path.resolve(__dirname, './app/loader.ts'),
        listener: path.resolve(__dirname, './app/listener.ts'),
        getElement: path.resolve(__dirname, './app/getElement.ts'),
        productCart: path.resolve(__dirname, './app/product-cart.ts'),
        basketSet: path.resolve(__dirname, './app/basket-set.ts')
    },
    output: {
        path: path.resolve(__dirname, './src/mainapp'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new ImageminWebpWebpackPlugin(),
        new CleanWebpackPlugin()
    ]



}
