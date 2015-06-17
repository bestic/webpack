var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        'vendor': [
            "angular",
            "oclazyload",
            "angular-animate",
            "angular-aria",
            "angular-material",
            "angular-ui-router",
            "ui-router-extras",

            "angular-material/angular-material.css"
        ],
        'console': ['./js/console.js']
    },

    output: {
        'path': './build',
        'filename': 'console.js',
        'pathinfo': true
    },

    devtool: 'source-map',

    module: {
        noParse: ["angular", "oclazyload", "angular-animate", "angular-aria", "angular-material", "angular-ui-router", "ui-router-extras"],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
            },
            {
                test: /(\.woff|\.eot|\.ttf|\.svg)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.html$/,
                loader: 'html'
//                loader: 'raw'
            },
            {
                test: /\.png$/,
                loader: 'url'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('[name].css')
    ]



}