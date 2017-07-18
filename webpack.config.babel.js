import { resolve } from 'path';
import { getIfUtils } from 'webpack-config-utils';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import lost from 'lost';
import uniqueSelectors from 'postcss-unique-selectors';
import dedupe from 'postcss-discard-duplicates';
import precss from 'precss';
import pseudoClassEnter from 'postcss-pseudo-class-enter';
import position from 'postcss-position';
import pixrem from 'pixrem';
import size from 'postcss-size';
import quantityQueries from 'postcss-quantity-queries';
import colorFunction from 'postcss-color-function';
import autoprefixer from 'autoprefixer';
import reporter from 'postcss-reporter';

const { extract } = ExtractTextPlugin;
const postcssPlugins = [uniqueSelectors, dedupe, precss, pseudoClassEnter, position, pixrem, size, quantityQueries, colorFunction, autoprefixer, reporter, lost];

export default (env) => {
    const { ifProd, ifNotProd } = getIfUtils(env);
    const settings = {
        context: resolve('src'),
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            path: resolve('public'),
            publicPath: '/public/',
            pathinfo: ifNotProd(),
        },
        devServer: {
            overlay: {
                // warnings: ifNotProd(),
                errors: ifNotProd(),
            },
            historyApiFallback: {
                index: 'index.html',
            },
        },
        devtool: ifProd('source-map', 'eval'),
        module: {
            rules: [
                { test: /\.js$/, use: ifProd(['babel-loader'], ['babel-loader', 'eslint-loader']), exclude: /node_modules/ },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.scss$/,
                    use: ifProd(
                        extract({
                            fallback: 'style-loader',
                            use: ['css-loader', 'sass-loader', { loader: 'postcss-loader', options: { plugins: () => postcssPlugins } }],
                        }),
                        ['style-loader', 'css-loader', 'postcss-loader', { loader: 'postcss-loader', options: { plugins: () => postcssPlugins } }, 'sass-loader'],
                    ),
                },
                { test: /\.(ttf|eot|woff|woff2|svg)$/, loader: 'file-loader' },
            ],

        },
        plugins: [
            new ExtractTextPlugin('style.css'),
        ],
    };

    if (env.debug) {
        console.log(config);
        debugger;
    }

    return settings;
};
