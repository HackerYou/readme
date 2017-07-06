import { resolve } from 'path';
import { getIfUtils } from 'webpack-config-utils';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import lost from 'lost';
import webpack from 'webpack';

const { extract } = ExtractTextPlugin;

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
                { test: /\.css$/, use: ['style-loader'] },
                { test: /\.scss$/,
                    use: ifProd(
                        extract({
                            fallback: 'style-loader',
                            use: ['css-loader', 'sass-loader', { loader: 'postcss-loader', options: { plugins: 'lost' } }],
                        }),
                        ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                    ),
                },
                { test: /\.(ttf|eot|woff|woff2|svg)$/, loader: 'file-loader' },
            ],

        },
        plugins: [
            new ExtractTextPlugin('style.css'),
            // new webpack.LoaderOptionsPlugin({
            //     options: {
            //         postcss: [
            //             lost(),
            //         ],
            //     },
            // }),
        ],
    };

    if (env.debug) {
        console.log(config);
        debugger;
    }

    return settings;
};
