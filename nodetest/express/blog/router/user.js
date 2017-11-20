//引入express

var express = require('express');

//路由实例
var router = express.Router();

//挂载路由
router.get('/',function(req,res){
	res.send('<h3>个人中心首页</h3>');
});

router.get('/userInfo',function(req,res){
	res.send('<h3>用户信息</h3>');
});

//向外暴露模块
module.exports = router; 