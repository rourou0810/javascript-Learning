//该文件是一个路由模块

//加载express
var express = require('express');

//创建路由
var router = express.Router();

//在router身上设置对应的路由和对应的处理方法
router.get('/',function(req,res){
	//res.send('我是路由模块--设置的首页');

	//定义一个用户对象信息
	var user = {
		username:'王小二',
		sex:'男',
		like:'打王者荣耀'
	}
	//响应模板，并分配数据
	res.render('index',{title:'么么哒',user:user});
});

router.get('/list',function(req,res){
	res.send('我是路由模块--设置的列表页');

});

//向外暴露模块
module.exports = router;