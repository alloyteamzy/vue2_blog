 
## 项目本地启动说明文档

 
* 首先Clone或下载项目zip文件到本地。


![mahua](https://www.zygg.cc/img_cdn/1.jpg)

* 进到项目里，安装需要的依赖

![mahua](https://www.zygg.cc/img_cdn/2.jpg)

*  使用npm install命令来安装依赖

![mahua](https://www.zygg.cc/img_cdn/3.jpg)

*  安装完会报错，但是不影响项目启动和功能，可以忽略。

![mahua](https://www.zygg.cc/img_cdn/4.jpg)

*  然后输入命令npm run dev来启动项目，会自动在浏览器里打开页面。提示监听80端口。

![mahua](https://www.zygg.cc/img_cdn/5.jpg)

*  漂亮又文艺的主页就出来了。

![mahua](https://www.zygg.cc/img_cdn/index.jpg)

*  但是，发现功能是有问题的，点击按钮会报错。是因为我们没有起对应的服务。

![mahua](https://www.zygg.cc/img_cdn/7.jpg)

*  进到项目的server文件夹下，里面是对应API代码。

![mahua](https://www.zygg.cc/img_cdn/8.jpg)

*  然后执行node index.js，开启服务，但是发现会报错，缺少mysql模块

![mahua](https://www.zygg.cc/img_cdn/9.jpg)

*  用npm install --save-dev mysql来安装mysql模块，然后再执行node index.js，会显示监听3000端口，表示服务正常启动。  

![mahua](https://www.zygg.cc/img_cdn/10.jpg)

*  但是，发现还是报错，是因为我的数据库连接的是我的线上的正式数据库，这里密码不方便显示，所以被我和谐掉了，连接密码错误，所以会报错，只需要连接自己的数据库就好了。

![mahua](https://www.zygg.cc/img_cdn/11.jpg)

* 项目里db.js文件是数据库信息

```javascript
module.exports = {
    mysql: {
        host: 'zygg8007596.gotoftp2.com',
        user: 'zygg8007596',
        password: '******',
        database: 'zygg8007596',
        port: '3306'
    }
}
```
## 总结
刚用vue开发的时候，遇到了很多问题，也犯了很多错误，不过，现在而言，自己收获蛮多。自己的vue博客（留言板）已经开发完成。我想说的是，麻雀虽小，五脏俱全，虽然只是一个小应用，但它涵盖了许多知识点，包括前端，后端，数据库等一个网站的所必须的一些组成要素，对我来说，学习意义很大，愿共勉！（如果帮到了你，请不吝您的手，给颗star作为鼓励，谢谢。）
