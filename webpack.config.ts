import path from 'path';
import webpack from 'webpack';
let { AureliaPlugin } = require('aurelia-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const outDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const baseUrl = '/';
const production = false;
const title = 'Aurelia App';

const config = {
    mode: 'production',
    node: { fs: 'empty' },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [srcDir, 'node_modules'],
    },
    entry: {
        app: ['aurelia-bootstrapper'],
        vendor: ['bluebird'],
    },
    output: {
        path: outDir,
        publicPath: baseUrl,
        filename: production ? '[name].[chunkhash].bundle.js' : '[name].[hash].bundle.js',
        sourceMapFilename: production ? '[name].[chunkhash].bundle.map' : '[name].[hash].bundle.map',
        chunkFilename: production ? '[name].[chunkhash].chunk.js' : '[name].[hash].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            { test: /\.html$/i, loader: 'html-loader' },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
        ],
    },
    plugins: [new AureliaPlugin(),
    new HtmlWebpackPlugin({
        template: 'index.ejs',
        minify: production ? {
            removeComments: true,
            collapseWhitespace: true
        } : undefined,
        metadata: {
            // available in index.ejs //
            title, baseUrl
        },
    }),]
};

export default config;