
let path = require('path');
let webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        'app/first': path.resolve(__dirname, './app/first.js'),
        'app/function': path.resolve(__dirname, './app/function.js')
    },
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: "[name].bundle.js"
    },
    module: {
        rules: [

        ]
    }
};