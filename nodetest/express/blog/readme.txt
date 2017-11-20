blog项目

项目结构：
|- app.js			项目的入口文件
|- node_module		包
|- router			路由模块
	|- index.js			只负责处理路由 -- 匹配 / 开头
	|- user.js			只负责处理和用户模块相关的路由 -- /user开头


------------------------------------
MVCR：
	C 	Controller	控制器
	V 	View 		视图
	M 	Model 		模型，操作数据库
	R 	Router 		路由，只负责路由的中转操作


------------------------------------
ejs模板语法：
