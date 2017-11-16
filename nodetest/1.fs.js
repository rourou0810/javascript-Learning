/*
	1.Buffer
		缓冲区，专门和计算机的二进制数据进行交流!
		创建、一些基本的操作

	2.fs File System 文件系统模块
		// 和目录相关的
		fs.mkdir()		创建
		fs.rmdir()		删除
		fs.readdir()	读取

		// 和文件相关的
		fs.readFile()	读取
		fs.writeFile()	向文件中写入数据（默认是覆盖写）
			设置专门的写入模式 a，变成追加写
		fs.appendFile()	追加写入数据
		fs.unlink()		删除文件

		// 对文件字节级别的操作

		// 打开一个文件
		fs.open('pathfile','打开文件的方式',function(err,fd) {
			// fd 打开的文件标记

			// 读取
			fs.read(fd);

			// 向打开的文件中写入数据
			fs.write(fd);

			//操作完毕要关闭打开的资源
			fs.close(fd);
		})

		// fs.stat()	获取文件状态
*/

/*
	// fs.rename() 重命名(重命名，移动剪切文件)
	//将文件memeda.txt重命名为demo.txt;
	fs.rename('./memeda.txt','./demo.txt',function(err) {
		console.log(err);
	});
	//移动剪切文件
	fs.rename('./memeda.txt','./demo/memeda.txt',function(err) {
		console.log(err);
	});
*/

//fs.access()	判断文件是否存在
fs.access('./memeda.txt',function(err) {
	// err.code	是错误信息标记
	console.log(err);
	if(err.code == 'ENOENT') {
		console.log('文件路径不存在...');
	}
})