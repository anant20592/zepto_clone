/*
webpack is a static module bundler for modern JavaScript applications. 
When webpack processes your application, it internally builds a dependency graph from 
one or more entry points and then combines every module your project needs into one or 
more bundles, which are static assets to serve your content from.

When webpack processes your application, it internally builds a dependency graph
from one or more entry points and then combines every module your project needs 
into one or more bundles, which are static assets to serve your content from.

//Core concepts
entry,output, loaders,plugins,mode,browser compatibility

entry - By default its value is ./src/index.js
indicates which module webpack should use to begin building out its internal dependency graph

output - tells webpack where to emit the bundles it creates and how to name these files. 
It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other 
generated file.

loaders - have two properties in your webpack configuration:

The test property identifies which file or files should be transformed.
The use property indicates which loader should be used to do the transforming.

plugins- 
While loaders are used to transform certain types of modules, 
plugins can be leveraged to perform a wider range of tasks like bundle optimization, 
asset management and injection of environment variables.

*/


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: 'http://localhost:8085'
    },
    devServer : {
        port: 8085,
        historyApiFallback: true,
        allowedHosts: [
            'localhost'
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        modules: [__dirname, "src","node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules:  [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader")
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                  }
            },
            {
                test: /\.(svg|jpg|png|gif|webp|)$/,
                type: 'asset/resource'
              },
              {
                test: /\.(woff(2)?|eot|ttf|otf|svg|webp|)$/,
                type: 'asset/inline'
              },
            {
                test: /\.(scss|css)?$/,
                use: ["style-loader",
                {
                    loader: require.resolve("css-loader")
                },
                {
                    loader: require.resolve("sass-loader")
                }
                ]
            }
        ]
    }
}