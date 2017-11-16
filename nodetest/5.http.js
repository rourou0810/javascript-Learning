//使用http模块创建web服务器

//1.加载模块
var http = require('http');
var fs = require('fs');

//2.创建web服务器
var server = http.createServer(function(req,res) {
	/*
		req  请求 require
		res  响应 response
	*/

	//  /favicon.ico 特殊请求，请求收藏夹图标的
	//  过滤收藏夹图标请求
	if(req.url == '/favicon.ico'){
		return;
	}

	// req.method 请求的方式
	console.log(req.method);

	// req.url请求的url地址
	console.log(req.url);

	if(req.url == '/') {
		//设置数据响应
		res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
		//res.write('<h3>这是一个web服务器</h3>');

		// 读取index.html文件
		fs.readFile('./index.html',function(err,data) {
			res.write(data);

			//设置数据响应结束
			res.end();
		});
	}else if(req.url == '/tupian.jpg') {
		fs.readFile('./tupian.jpg',function(err,data) {
			res.write(data);
			res.end();
		})
	}
	

});

server.listen(8080,'localhost',function() {
	console.log('服务器已经运行');
});