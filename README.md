## Why Learn and Use Vue
>
>1.Development trend
>
>
Recently the past few years of the front circle, because the stage is generally brilliant, from MVC to MVVM, you just sing me play. Backbone, AngularJS has become yesterday's yellow, reactjs flourishing, while another more lightweight vue development momentum more fierce, known both the advantages of angularjs and reactjs both.
>
>
>2.What can Vue do
>
>
Mobile Internet demand has been much higher than the pc-side, especially the hybrid H5 applications, but the performance problem has been pain points. If you use SPA (which is commonly known as Single Page Web Application), SPA restricts all activities to a Web page and loads the corresponding HTML, JavaScript, and CSS only when the Web page is initialized. Once the page is loaded, the SPA will not reload or jump the page for the user's operation. No page switch, there is no white screen block, you can greatly improve the performance of H5, close to the original smooth experience.
>
>
Continue to see vue has been more than two months, and in March the use of vue2.0 developed a simple blog, in the use of vue human advantages at the same time, also encountered a lot of pit, a lot of problems, I share the experience Problems and solutions


## Vue2_blog
>
> vue2,vuex,vue-cli,axios,webpack,express,mysql 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 (Local start)
npm run dev

# build for production with minification （Generates a static file for packaging the upload server）
npm run build
```
:clap::clap::clap::clap::clap:Look here: if it is just a beginner's small partner, do not know how to project clone to the local, how to run locally, here wrote a detailed documentation, and I hope to help you  [Documentation](https://github.com/alloyteamzy/vue2_blog/blob/master/instruction.md):clap::clap::clap::clap::clap:
## The main function of the realization
>
1.User login
>
2.User registration
>
3.User published text
>
4.User comments text
>
5.User leave word

## Construct
>
>Use vue-cli to build the initialization project, very convenient, used to generate the project template.

## vuex 
>
>Vue is used as a communication between components, of course, if the page is simple enough, you can also use other methods to communicate (value), but also the use of other methods to communicate, Such as props and so on.
## axios
>
>To tell the truth, the project began to use vue-resource, behind the unified use axios (Vue author recommended), both for the client and server communications, that is, as ajax request.

## webpack
>
>Webpack is a module loader and packaging tool, it can put a variety of resources, such as JS (including JSX), coffee, style (including less / sass), pictures, etc. as a module to use and deal with. For example, we vue component development, will use ". Vue" file, this file will not be resolved by the browser, so the need to use webpack to "format" them, so that they can be translated into a browser file format. Also, there, with webpack, you can be happy to use es6 syntax it!

## express & mysql
>
>The so-called "system", how can only a simple static page? Here is the express (express is based on the Node.js platform development framework) and mysql to prepare the data storage of the back-end api, for the user information stored in the database and read.
## pm2
>
>Pm2 is a process manager with a load balancing function for the Node application and ensures that the process is always alive and 0 seconds of overloading. In fact, its main role is nodejs cluster. According to my understanding, popular will, its role is that the local development environment, you have to open node services, to achieve certain functions (such as listening to a port), will be in the console implementation of "node app.js" (such as This file is called app!), The corresponding node service will be opened, but as long as you close the console window, he did not correspond to the service process, and every time the service had to "console -> node app. Js ". In the production environment, it is very troublesome, it will use the pm2, only need to implement a "pm2 start app.js". Ok, once and for all, the console window with you how to open and close, the corresponding service process is always running in the back.
>
## Project preview
>
[Vue_blog(Only fit the mobile side)](https://www.zygg.cc)
>
>
## To sum up
>
>Just when the development of vue, encountered a lot of problems, but also made a lot of mistakes, but now, their own harvest quite many. Own vue blog (message board) has been developed to complete. I want to say is that the sparrow is small, fully equipped, although only a small application, but it covers a lot of knowledge points, including front-end, back-end, database and other sites must be some of the elements, for me, Learning great meaning, willing to encourage each other!

## 为什么学习并使用Vue
>
>1.发展趋势
>
>
最近这几年的前端圈子，由于戏台一般精彩纷呈，从 MVC 到 MVVM，你刚唱罢我登场。 backbone，AngularJS 已成昨日黄花，reactjs 如日中天，同时另一更轻量的 vue 发展势头更猛，号称兼具了 angularjs 和 reactjs 的两者优点。
>
>
>2.Vue能干吗
>
>
移动端的上网需求已经远高于pc端，特别是 hybrid 方式的H5应用中，但是性能问题一直是痛点。 如果使用 SPA（就是俗称的单页应用（Single Page Web Application）），SPA它将所有的活动局限于一个Web页面中，仅在该Web页面初始化时加载相应的HTML、JavaScript 和 CSS。一旦页面加载完成了，SPA不会因为用户的操作而进行页面的重新加载或跳转。没有页面切换，就没有白屏阻塞，可以大大提高 H5 的性能，达到接近原生的流畅体验。
>
>
陆续续看vue已经二个多月了，3月份使用vue2.0开发了一个简单的博客，在用vue人性化优势的同时，的也遇到过很多坑，很多问题，分享一下我遇到的问题和解决办法


## Vue2_blog
>
> vue2,vuex,vue-cli,axios,webpack,express,mysql 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 (本地启动)
npm run dev

# build for production with minification （生成静态文件，用于打包上传服务器）
npm run build
```
:clap::clap::clap::clap::clap:看这里：如果是刚入门的小伙伴，不知道把项目clone到本地后怎么在本地跑起来，这里写了个详细的说明文档，希望能帮助到你们  [说明文档](https://github.com/alloyteamzy/vue2_blog/blob/master/instruction.md):clap::clap::clap::clap::clap:

## 主要实现的功能
>
1.用户登录
>
2.用户注册
>
3.用户发帖
>
4.用户评论帖
>
5.用户留言

## 构建
>
>使用vue-cli来构建初始化项目，非常方便，相当于生成项目模板这样子。

## vuex 
>
>vue就我个人理解，是数据驱动，实现页面组件化开发，更好管理和维护，vuex是用作组件间的通信，当然了如果页面够简单，也可以使用其他方法进行通信（传值），比如props等。

## axios
>
>说实话，项目前期我还用的是vue-resource，后面才统一改用axios（尤大大本人都力推的），二者都是用于客户端和服务端通信的，也就是用作ajax请求的。

## webpack
>
>webpack是一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。比如，我们vue组件化开发，会用 ".vue" 文件，这种文件不会被浏览器所解析，所以需要用webpack来 "格式化" 他们，让他们变为浏览器可以解析的文件格式。还有，还有，用webpack，你就可以愉快的使用es6的语法啦！

## express & mysql
>
>所谓一个"系统"，怎么只能是简单的静态页面？在这里用了express（express 是一个基于 Node.js 平台的开发框架）和mysql来进行编写数据存储的后端api，用于用户信息在数据库里存储和读取。
## pm2
>
>pm2 是一个带有负载均衡功能的Node应用的进程管理器,并保证进程永远都活着，0秒的重载。其实它主要作用就是 nodejs 集群。按照我的理解，通俗的将，它的作用就是，本地开发环境，你要开启node服务，实现某些功能(比如监听某个端口)，就会在控制台执行"node app.js"(比如这个文件叫app吧！)，对应的node服务就会开启了，但是你只要一关闭这个控制台窗口，他就没有对应的服务进程了，每次起服务都得"控制台 -> node app.js"。在生产环境来说，很麻烦，这会就用到了pm2，只需要执行一次"pm2 start app.js"。ok，一劳永逸，控制台窗口随你怎么自由开启关闭，对应的服务进程永远在后面运行着。
>
## 项目预览
>
[Vue_blog(只适配了移动端)](https://www.zygg.cc)
>
>
## 总结
>
>刚用vue开发的时候，遇到了很多问题，也犯了很多错误，不过，现在而言，自己收获蛮多。自己的vue博客（留言板）已经开发完成。我想说的是，麻雀虽小，五脏俱全，虽然只是一个小应用，但它涵盖了许多知识点，包括前端，后端，数据库等一个网站的所必须的一些组成要素，对我来说，学习意义很大，愿共勉！
## 随意打赏
![Image text](https://www.zygg.cc/wechat_pay.jpg)
