// queryString 解析查询字符串的模块

var queryString = 'id=10&sex=nan';
//url地址上的 ?id=10&sex=nan

//引入模块
var qs = require('querystring');

//qs.parse()
//{id : '10', sex : 'nan'}
console.log(qs.parse(queryString));

//定义包含参数的对象
var paramObj = {
	id : 10,
	sex : 'nan',
	level : 2
};

//将包含参数的对象序列化成字符串格式
var newQueryString = qs.stringify(paramObj);
// id=10&sex=nan&level=2
console.log(newQueryString);

//转码 escape()、解码 unescape()
// 原有字符串
var str = 'admin这是一个字符串';

//转码
var newStr = qs.escape(str);
// admin%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2
console.log(newStr);

//解码
var oldStr = qs.unescape(newStr);
//admin这是一个字符串
console.log(oldStr);
