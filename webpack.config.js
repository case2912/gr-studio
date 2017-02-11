module.exports = [{
    entry: "./src/index.js",
    output: {
        filename: "./dist/bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: "vue-loader"
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.sort|css$/,
                loader: 'raw-loader',
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                },
            },
        ]
    }
}]
