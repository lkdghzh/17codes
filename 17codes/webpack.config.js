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
        lib: ['vue', 'vuex'],//�ȼ���lib���Լ������������ɣ���vue��vuex����ɣ�lib.js
        index: './static/src/js/index'//.js//��·��������ļ������Լ���������Ӧ�����output�����[name]��,//�ͱ��ļ���ͬ��Ŀ¼������ļ�������./��
    },
    output: {
        path: path.join(__dirname, '/static/dist/'),//�˴���Ҫ����·��/ d:\MyProject\17codes\17codes\static\dist\ ����/static/dist/���������D�̸�Ŀ¼���ɣ�
        filename: '[name].js'//������entry����·����Ӧ�ļ���
    },
    resolve: { extensions: ['.js', '.css'] },//�õ��ĺ�׺��ȫ������
}
