var webpack = require("webpack");
var path = require("path");

var plugins = [
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
];


if (process.env.COMPRESS) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}


module.exports = {
        entry: ["./src/index.js"],

        output: {
            path: path.join(__dirname, "/dist/"),
            library: "XRComponent",
            libraryTarget: "umd"
        },

        resolve: {
            extensions: [".js"]
        },

        externals: {
            "react": "React",
            "react-dom": "ReactDom",
        },

        module: {
            rules: [{
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }, {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.md$/,
                use: [{
                    loader: "html-loader"
                }, {
                    loader: "highlight-loader"
                }, {
                    loader: "markdown-loader",

                }]
            }],
        },
    },

    plugins: plugins
};
