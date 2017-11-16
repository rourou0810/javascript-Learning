//引入http模块
var http = require('http');
var fs = require('fs');

//创建web服务器
http.createServer(function(req,res) {
	//过滤收藏夹图标
	if(req.url == '/favicon.ico'){
		return;
	}

	//获取用户请求的url地址
	console.log(req.url);

	if(req.url == '/index' || req.url == '/'){
		//读取首页
		//设置响应的数据头部
		res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

		//设置响应的数据
		fs.readFile('./index.html',function(err,data){
			if(!err){
				res.write(data);

				//响应结束
				res.end();
			}
		});
	}else if(req.url == '/list') {
		//响应商品列表页
		fs.readFile('./list.html',function(err,data){
			if(!err){
				res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
				res.write(data);
				res.end();
			}
		})
	}else{
		console.log(req.url);
	}
}).listen(8080,'localhost');