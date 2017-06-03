var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//const marked = require("marked")
//const renderer = new marked.Renderer()

module.exports = {
    //devtool: 'source-map',
    entry: ["./index.js"],

    output: {
        path: path.join(__dirname, "/dist/"),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: [".js"]
    },

    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.less$/,
           // exclude: /node_modules/,
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
              loader:"highlight-loader"
            },{
                loader: "markdown-loader",
                
            }]
        },{
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            }
        }],
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './index.html', //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body`
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap:false,
            compressor: {
                drop_debugger: true,
                warnings: false,
                drop_console: true
            }
        })*/
    ]
};
