//项目入口文件

//使用express搭建web应用
var express = require('express');

//创建应用实例
var app = express();

//创建模板引擎--第一种方式：
//设置ejs模板引擎
app.set('view engine','ejs');

/*
	//创建模板引擎，以.html结尾--第二种方式：
	app.engine('html',require('ejs').renderFile);
	
	//设置ejs模板引擎
	app.set('view engine','html');
*/


//模板存放目录
app.set('views','./views');

//引入路由模块
var index = require('./router/index');

//加载路由目录下的user路由模块
var user = require('./router/user');

//app.use()将指定开头的路由，交给指定的模块进行处理
app.use('/',index);

//用户相关模块，/user开头
app.use('/user',user);



//静态文件
//静态页面加载css路径为 /static/css/default.css
app.use('/static',express.static('public'));

//设置监听的端口和IP 80默认端口号
app.listen(80,'localhost',function() {
	console.log('服务器已经运行！');
})