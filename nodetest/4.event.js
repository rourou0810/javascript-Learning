//Node.js基于事件

/*
	在DOM节点中：
		绑定：	click
		触发：  鼠标单击元素

	Node.js中：
		绑定事件
		触发事件
*/

//加载事件模块
var events = require('events');

//实例化创建一个事件监听对象
var em = new events.EventEmitter();
console.log(em);

//监听事件
em.on('memeda',function() {
	console.log('aaa');
});

em.on('change',function(str1,str2) {
	console.log('change '+str1+' to '+str2);
});

//触发事件
em.emit('memeda');
em.emit('change','abc','hello');

//监听click事件
//使用on对某个事件进行多次监听，进行多次处理
em.on('click',function() {
	console.log('我是第一个监听单击的...');
});

em.on('click',function() {
	console.log('我是第二个监听单击的...');
});

em.emit('click');

function sayHello() {
	console.log('hello');
}

function sayBye() {
	console.log('byebye');
}

//监听hi事件，once指 只监听触发一次
//em.on('hi',sayHello);
em.once('hi',sayHello);

em.emit('hi');
//once 第二次监听不到
//em.emit('hi');

//移除监听器
em.removeListener('hi',sayHello);

//hi事件已被移除，不再触发
em.emit('hi');