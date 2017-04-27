//var express = require('path')
//var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
//var extractTextPlugin = require('extract-text-webpack-plugin');

// console.log(path.resolve(__dirname,'/s'))//d:\s
// console.log(path.resolve(__dirname,'/s/'))//d:\s
// console.log(path.join(__dirname, '/static/dist/'))//d:\MyProject\17codes\17codes\static\dist\
// console.log(path.resolve('/s'))//d:\s

module.exports = {
    entry: {
        lib: ['vue', 'vue-router'],//先加载lib（自己命名），生成（把vue，vuex打包成）lib.js。(没有引入vue，但是就可以生成lib，webpack自带vue吗？？)
        app: './static/index.js'//.js//有路径的入口文件（键自己命名，对应输出【output的输出[name]】,//和本文件的同级目录的入口文件，带上./）
    },
    output: {
        path: path.join(__dirname, '/static/dist/js/'),//此处需要绝对路径/ d:\MyProject\17codes\17codes\static\dist\ 不是/static/dist/（这个会在D盘根目录生成）
        publicPath: '/static/dist/js/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.vue/, loader: 'vue-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },//css-loader  如果确定样式表中没有url（）路径和字体，可以用raw-loader
            { test: /\.(woff2?|eot|ttf|otf|woff|svg)(\?.*)?$/, loader: 'url-loader' },//?limit=50000&name=[path][name].[ext]
            //{ test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=[name].[hash].[ext]' },
            { test: /\.js/, loader: 'babel-loader' },

        ]
    },
    resolve: { extensions: ['.js', '.css'] },//用到的后缀名全部不带
    plugins: [
        //new extractTextPlugin('')
    ]
}