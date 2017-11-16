//使用流式操作压缩文件

//加载模块
var fs = require('fs');

//加载压缩模块
var zlib = require('zlib');
//创建压缩方式
var gzip = zlib.createGzip();

//创建可读流
var rs = fs.createReadStream('./fs.js');

//创建可写流
var ws = fs.createWriteStream('./fs.demo.js.rar');

//使用流式操作
rs.pipe(gzip).pipe(ws);