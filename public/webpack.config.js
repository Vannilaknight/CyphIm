module.exports = {
    entry: "./assets/js/entry.js",
    output: {
        path: __dirname,
        filename: "./assets/js/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};