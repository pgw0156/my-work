#1. What is phantom.js？
## · Full Web stack no browser required
## · 可以运行于命令行的没有界面的游览器，可以在windows和linux下跑脚本服务！
## · 提供了处理文件I/O的操作，可以读写系统文件
## · PhantomJS官方地址及安装（略so easy啊）：http://phantomjs.org/   

#2. 来一个hello world
## // hello.js
var page = require('webpage').create();
phantom.outputEncoding="utf-8";
page.open("http://www.pangery.com/", function(status) {
   if ( status === "success" ) {
      console.log(page.title); 
   } else {
      console.log("Page failed to load."); 
   }
   phantom.exit(0);
});

然后在cmd里面执行：phantomjs hello.js

#3. 操作dom：
## · 使用page.evaluate函数，编写代码在回调函数中操作dom
## · 使用sendEvent或者initMouseEvent函数作为dom事件触发器
## · 使用page.onLoadStarted等函数来监听页面加载情况
## · 使用page.includeJs函数来引入js

#4. 抓取页面并截屏
## · // cut.js
var page = require('webpage').create();
page.open("http://www.pangery.com", function(status) {
   if ( status === "success" ) {
      page.render("pangery.png");
   } else {
      console.log("Page failed to load."); 
   }
   phantom.exit(0);
});

#5. 操作文件：
## // file.js
var filePath = '/test/file1.js'; //文件路径
//判断文件是否存在，是文件还是文件夹
if( fs.exists(filePath) && fs.isFile(filePath) ) {
       var ins = fs.open(filePath, 'r');//打开文件
        while(!ins.atEnd()) {//循环读取文件内容
           var buffer = ins.readLine();//一行行的读取
           console.log(buffer);
       }
}
// r - 读取文件; w - 写文件，回覆盖; a - 写文件，追加; rb - 读取二进制流; rw - 写入二进制流

#6. 然而phantomjs可以拿来做什么？
## · 非常适合用作js的单元测试环境
## · 定时任务监测页面是否加载正常
## · 测试页面加载时间及监测页面请求
## · 页面截图存储
## · 爬数据爬文本（当然有更多比这好的爬虫工具）
## · 等等等等

#7. 后续会贴上之前拿phantomjs做过的项目demo上来！待续...
