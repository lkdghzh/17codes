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
�ڴ������ɴ���õ�js�ļ�����������д��Ӳ���ϡ�
*/




/*
entry�ڵ����������Ǳ���������output��filename����[name]�����ģ������Ҫ����ʲô����·����Ӧ����entry�����������ã�����

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
    resolve: { extensions: ['.js', '.css'] },//�õ��ĺ�׺��ȫ������
*/
module.exports = {
    entry: {
        lib: ['vue', 'vue-router'],//�ȼ���lib���Լ������������ɣ���vue��vuex����ɣ�lib.js��(û������vue�����ǾͿ�������lib��webpack�Դ�vue�𣿣�)
        index: './static/src/js/index.js'//.js//��·��������ļ������Լ���������Ӧ�����output�����[name]��,//�ͱ��ļ���ͬ��Ŀ¼������ļ�������./��
    },
    output: {
        path: path.join(__dirname, '/static/dist/js/'),//�˴���Ҫ����·��/ d:\MyProject\17codes\17codes\static\dist\ ����/static/dist/���������D�̸�Ŀ¼���ɣ�
        filename: '[name].js'
        //������entry����·����Ӧ�ļ���
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
