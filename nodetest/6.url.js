// URL模块
var url = require('url');

/*
	URL地址：
		http://www.baidu.com/user/index.html?id=10&sex=nan#top

		http				超文本传输协议
		www.baidu.com		域名、主机地址
		/user/index.html 	服务器上的文件的路径
		?id=10&sex=nan		参数id(参数名)=10(参数值)& 用于连接多个参数
		#top				锚点
*/


/*
	Url {
	  protocol: 'http:',		//协议
	  slashes: true,
	  auth: null,				//权限
	  host: 'www.baidu.com',	//主机地址
	  port: null,				//端口号，服务器默认的端口号是80
	  hostname: 'www.baidu.com',//主机名
	  hash: '#top',				//hash 锚点
	  search: '?id=10&sex=nan',	//查询字符串（包括问号?）
	  query: 'id=10&sex=nan',	//只有查询的字符串
	  pathname: '/user/index.html', //路径和文件名
	  path: '/user/index.html?id=10&sex=nan', //路径和文件名和查询参数

	  //地址
	  href: 'http://www.baidu.com/user/index.html?id=10&sex
	=nan#top' 
	}

*/
//定义地址
var urlPath = 'http://www.baidu.com/user/index.html?id=10&sex=nan#top';
//url.parse 解析url地址，返回一个对象
//如果第二个参数传递为真，那么query选项由字符串转为对象obj
var urlObj = url.parse(urlPath,true);
console.log(urlObj);

//获取id的值
console.log(urlObj.query.id);

//parse() 将url地址字符串转为url对象
//format() 将url对象转为url地址字符串
var urlObj = {
	protocol : 'https',
	host : 'www.justbecoder.com',
	port : '3000',
	search : '?memeda=ok',
	pathname : '/user/demo.html'
};
var urlPath = url.format(urlObj);
console.log(urlPath);

//url.resolve() 相对当前的路径解析路径
var newUrl = url.resolve('http://www.baidu.com/one/two/three/','four');

//最终生成的url地址：http://www.baidu.com/one/two/three/four
console.log(newUrl);
