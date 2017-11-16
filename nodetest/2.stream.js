//	流式操作（专门针对大文件）

// 加载模块
var fs = require('fs');

// 使用fs.readFile()直接读取大文件
var file = './Xshell5.exe';

/*
	// 读取
	fs.readFile(file,function(err,data) {
		// console.log(err);
		// console.log(data);

		fs.writeFile('./shell.exe',data,function(err){
			console.log(err);
		})
	})
*/


// 创建可读流
var readStream = fs.createReadStream(file);

//设计数据传输
var data = '';

//数据传输事件，data数据传输事件，每一次读取都读取一部分
readStream.on('data',function(chunk) {
	//console.log(chunk);

	//每次读取时，拼接数据流
	data += chunk;
});

//事件end表示数据读取完毕
readStream.on('end',function() {
	console.log('数据读取完毕了...');

	//data 就是最终的数据
});

//事件error 在读取的过程中发生错误信息
readStream.on('error',function() {
	console.log('数据读取有误，请重新尝试！')
});

//创建可写流
var writeStream = fs.createWriteStream('./memeda.txt');

//data是最终的数据
var data = '这是一个字符串';
writeStream.write(data);

//手动标记数据写入完毕
writeStream.end();


writeStream.on('finish',function() {
	console.log('数据正在写入完毕');
})
writeStream.on('error',function() {
	console.log('数据写入失败，请重新尝试...');
})

//使用流式操作复制大文件
//创建可读流
var rs = fs.createReadStream(file);
var ws = fs.createWriteStream('./memeda.exe');

//ws可写流，监听事件
ws.on('finish',function() {
	console.log('数据已经写入完毕...');
})

//管道方法pipe()
rs.pipe(ws);

