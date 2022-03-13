/**
 * 概念：
 * html是一个浏览器能打开的文档
 * 组成：
 * <!DOCTYPE html>----浏览器获知文档类型，兼容方式展示作用以防浏览器报错
 * <head>
 * <base href="http地址"/>
 * base作用是不让当前页面被保留
 * <base target="_blank"/>
 * <meta>
 * 用来定义浏览器识别的信息，客户端不显示，比如页面作者，页面多长时间刷新，支持文字类型
 * </meta>
 * <title>修改浏览器展示的标题</title>
 * </head>
 * 
 * <style/>---css样式调整页面的
 * <script/>----js用来操作dom逻辑
 * <body>
 *   dom节点------用来操作dom改变视图的
 * </body>
 * 
 * 
 * 行内元素：
 * a span img input
 * 空标签：
 * br hr img input link meta
 * 块元素
 * div ul ol h li p......
 * 
 * @import 和 link的区别：
 * RSS：是一种描述和同步网站内容的格式
 * link是html的标签，除了在xhtml中使用，还能用于定义RSS，定义链接属性，
 * 而@import是给css提供的,只能用于加载css;
 * link是在页面加载的同时会被一起加载，而@import是在页面加载完成之后才加载css
 * 
 * 
 * html5的新特性
 * 绘画canvas
 * 用于媒介回放video和audio
 * 本地缓存localStorage用于长期存储，不会随浏览器关闭而清除,sessionStorage用于浏览存储，随浏览器关闭而清除
 * 语义化更好的标签：header footer等
 * 
 * 
 * html语义化的理解
 * 1.用正确的标签做正确的事儿
 * 2.可让页面更结构化,结构清晰
 * 3.便于搜索引擎解析
 * 4.便于阅读和维护
 * 
 * html5的离线储存怎么使用，工作原理
 * 在用户网络断开的时候，用户端有一个.appcache缓存文件（缓存机制）,浏览器会读取这个文件渲染页面，等连上网络会自动更对比时间来修改.appcache文件
 * 没有网的时候会操作window.applicationCatche获取当前状态
 * 0---为缓存
 * 1---空闲状态
 * 2---检查中
 * 3---下载中
 * 4---已更新
 * 5---已失效
 * 
 * 浏览器是如何对html5的离线存储资源进行管理和加载的？
 * 1.在线的情况下，浏览器会发现html的head有manifest属性,他会请求manifest文件,如果是第一次访问,那么浏览器会根据manifest文件内容下载相应的资源并且进行离线存储,
 * 如果已经访问过了并且资源也进行了相应的存储，那么浏览器会使用离线的资源加载页面，浏览器会将新旧manifest文件进行对比，如果文件没有发生改变，就不做任何操作，如果
 * 文件改变了，那么就会重新下载资源并进行离线缓存
 * 2.离线的情况下，直接渲染离线资源
 * 
 * 
 *cookie  localStorage  sessionStorage区别
 * 
 * cookie和服务器来回传递  存储小  4k  设置cookie过期时间
 *
 * localStorage和sessionStorage储存大5M
 * localStorage存储时间久，需手动清除
 * sessionStorage存储时间随浏览器关闭而清除
 * 
 * 
 */