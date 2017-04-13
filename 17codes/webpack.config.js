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

/*
webpack-dev-middleware
内存中生成打包好的js文件，不用真正写到硬盘上。
*/




/*
entry节点对象的属性是别名，是与output中filename属性[name]关联的，因此想要生成什么样的路径，应该在entry的属性中配置，如下

entry: {
    index: './index.js',
    register: './register/register.js',
    "admin/student": './admin/student/student.js',
    "admin/teacher": './admin/teacher/teacher.js',
    vendor: ['jquery', 'moment']
  },
*/
/*
,
    resolve: { extensions: ['.js', '.css'] },//用到的后缀名全部不带
*/
module.exports = {
    entry: {
        lib: ['vue', 'vue-router'],//先加载lib（自己命名），生成（把vue，vuex打包成）lib.js。(没有引入vue，但是就可以生成lib，webpack自带vue吗？？)
        index: './static/src/js/index.js'//.js//有路径的入口文件（键自己命名，对应输出【output的输出[name]】,//和本文件的同级目录的入口文件，带上./）
    },
    output: {
        path: path.join(__dirname, '/static/dist/js/'),//此处需要绝对路径/ d:\MyProject\17codes\17codes\static\dist\ 不是/static/dist/（这个会在D盘根目录生成）
        filename: '[name].js'
        //生成在entry中有路径对应的键名
        /*
        ERROR in chunk app [entry]
        index.js
        Conflict: Multiple assets emit to the same filename index.js
        */
    },
    module: {
        loaders: [
            { test: /\.vue/, loader: 'vue-loader' }
        ]
    }
}
