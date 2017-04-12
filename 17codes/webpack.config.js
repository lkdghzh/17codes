//var express = require('path')
//var HtmlWebpackPlugin = require('html-webpack-plugin');
// ,
//     resolve: { extentions: ['js', 'css'] }

var path = require('path');
//// console.log(__dirname)//d:\MyProject\17codes\17codes.
//// console.log(__dirname+'/s')//d:\MyProject\17codes\17codes/s
//// console.log(path.join(__dirname,'/s'))//d:\MyProject\17codes\17codes\s
console.log(path.resolve(__dirname,'/s'))//d:\s
console.log(path.resolve(__dirname,'/s/'))//d:\s
console.log(path.join(__dirname, '/static/dist/'))//d:\MyProject\17codes\17codes\static\dist\
// console.log(path.resolve('/s'))//d:\s

module.exports = {
    entry: {
        lib: ['vue', 'vuex'],//先加载lib（自己命名），生成（把vue，vuex打包成）lib.js
        index: './static/src/js/index'//.js//有路径的入口文件（键自己命名，对应输出【output的输出[name]】,//和本文件的同级目录的入口文件，带上./）
    },
    output: {
        path: path.join(__dirname, '/static/dist/'),//此处需要绝对路径/ d:\MyProject\17codes\17codes\static\dist\ 不是/static/dist/（这个会在D盘根目录生成）
        filename: '[name].js'//生成在entry中有路径对应的键名
    },
    resolve: { extensions: ['.js', '.css'] },//用到的后缀名全部不带
}
