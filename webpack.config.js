const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require('fs');
const path = require('path');

const babelrc = JSON.parse(fs.readFileSync(path.resolve('.babelrc'), 'utf8'));
const extractSass = new ExtractTextPlugin({
    filename: "bundle.css"
});

const config = {
    entry: [
        './app/index.js'
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
            ]
        },
            {
                test: /\.(jpg|png|svg)$/,
                loaders: ['file-loader', 'image-webpack']

            },
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'

                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0',  'react',
                            'stage-2'],
                        plugins: [
                            "transform-decorators-legacy",
                            "transform-class-properties",
                            "transform-es2015-destructuring"
                        ]
                    }
                }]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.sass', '.png'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        extractSass,
        new webpack.ProvidePlugin({
            _: 'lodash',
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })

    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }

}
if (process.env.NODE_ENV === 'production') {
    config.devtool = "cheap-module-source-map"
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1,
            moveToParents: true

        })
    )

} else {
    config.devtool = "cheap-module-eval-source-map"
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
        new ExtractTextPlugin({ disable: true })
    )
}

module.exports = config
