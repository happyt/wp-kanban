var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: [path.resolve(ROOT_PATH, 'app/main')],
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                // test for both js and jsx
                test: /\.jsx?$/,

                // use babel loader with Stage 1 features
                loader: 'babel?stage=1',

                // operate only on our app directory
                include: path.resolve(ROOT_PATH, 'app')
            },
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Kanban app'
        })
    ]

};

// we'll extend these later and use merge then
if(TARGET === 'build') {
    module.exports = common;
}

if(TARGET === 'dev') {
    module.exports = common;
}