module.exports = {
    entry: './public/assets/js/entry.js',
    output: {
        path: __dirname,
        filename: './public/assets/js/bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders:[
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
            { test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};