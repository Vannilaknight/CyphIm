var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './public/assets/js/entry.js',
    output: {
        path: __dirname,
        filename: './public/assets/js/bundle.js'
    },
    module: {
        loaders:[
            { test: /\.js[x]?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};