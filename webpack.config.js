'use strict';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const uglifyJsConfig = {
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
    },
    output: {
        comments: false
    },
    sourceMap: true
};
const entry = {
    app: r('./app/app.js'), // angularJS application entry point
    vendor: ['angular'] // application specific vendors
};
const copyFontAwesomeFonts = {
    from: r('node_modules/font-awesome/fonts'),
    to: r('src/assets/vendor/font-awesome/fonts'),
    flatten: true,
    force: true
};
const copyBootstrapJs = {
    from: r('node_modules/bootstrap/dist/js/*.js'),
    to: r('src/assets/vendor/bootstrap/js/'),
    force: true,
    flatten: true
};
const copyTetherJs = {
    from: r('node_modules/tether/dist/js/*.js'),
    to: r('src/assets/vendor/tether/js/'),
    force: true,
    flatten: true
};
const copyJquery = {
    from: r('node_modules/jquery/dist/jquery*'),
    to: r('src/assets/vendor/jquery/js/'),
    flatten: true,
    force: true
};
const copyImagerJs = {
    from: r('node_modules/imager.js/dist/*.js'),
    to: r('src/assets/vendor/imager/js/'),
    force: true,
    flatten: true
};
const config = {
    entry: entry,
    output: {
        path: r('./src/assets/app/'), // output folder for the bundles (it's actually inside folder that is watched by Jekyll)
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    devtool: "inline-source-map", // is used to create js maps
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader' // we use Babel in order to transpile sources (see .babelrc to check used environments)
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(uglifyJsConfig),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}), // this plugin merge all vendors into the vendor bundle
        new CopyWebpackPlugin([copyBootstrapJs, copyJquery, copyFontAwesomeFonts, copyTetherJs, copyImagerJs])
    ]
};
module.exports = config;

function r(relativePath) {
    return path.resolve(__dirname, relativePath);
}