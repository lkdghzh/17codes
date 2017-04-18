// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var config = require('./dev.webpack.config')
var proxy = require('http-proxy-middleware')

// 创建一个express实例
var app = express()

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

// 注册中间件
app.use(devMiddleware);

//hot reload
app.use(require("webpack-hot-middleware")(compiler));

//请求代理
app.use(proxy('/api', {
    target: {
        host: 'localhost',
        protocol: 'http:',
        port: 5050
    },
    logLevel: 'debug'
}));

// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8888')
})