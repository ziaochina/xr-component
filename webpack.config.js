var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var packCSS = new ExtractTextPlugin('./style.min.css');

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

plugins.push(packCSS)


plugins.push(new CopyWebpackPlugin([{
    context: './src/assets',
    from: '**/*',
    to: 'assets'
}]))

module.exports = {
    entry: ["./src/index.js","./src/assets/style/index.less"],

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
            test: /\.(less|css)$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                use: [{ loader: 'css-loader', options: { minimize: false } }, 'less-loader'],
                fallback: 'style-loader',
            }),
        }, {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                }
            }
        }],
    },
    plugins: plugins
};
