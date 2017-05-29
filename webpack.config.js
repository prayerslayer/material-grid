const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'fake-output.js',
    },
    plugins: [
        new ExtractPlugin('grid.css'),
        new HtmlWebpackPlugin({ template: 'src/test.ejs' }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractPlugin.extract({
                    use: 'css-loader?minimize=true!sass-loader',
                }),
            },
        ],
    },
};
