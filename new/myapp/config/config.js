import { defineConfig } from 'umi';
import Router from './routerConfig'
export default defineConfig({
  define: {
    'process.env.apiUrl': '',
    'process.env.amapTextApi': '',
    'process.env.fileDownloadUrl':'',
    'process.env.fileUploadUrl':'',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  /*兼容ie11*/ 
  targets: {
    ie: 11,
  },
  /**配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。 */
  hash:true,
  /*tsconfig中path的作用差不多*/ 
  /*alias: {
    foo: '/tmp/a/b/foo',
  },*/
  /*路由*/ 
  routes:Router, 
/**快速刷新（Fast Refresh），开发时可以保持组件状态，同时编辑提供即时反馈。 */
  fastRefresh: {},
  /*相当于动态给head头中加入src*/ 
  // headScripts: [`alert(1);`, `https://a.com/b.js`],
  /*路由支持方式 hash  browser 和 memor*/
  history:{
    type:'hash'
  },
  /*配置主题，实际上是配 less 变量*/ 
  theme: {
    '@primary-color': '#1DA57A',
  },
  /*配置标题*/ 
  title: 'myApp',
  /*忽略Moment 的Locale文件 用于减少尺寸*/ 
  ignoreMomentLocale:true,
  /**配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件。 */
  inlineLimit:10000,
  lessLoader:{
  
  },
  cssLoader:{
    /*驼峰命名*/ 
    localsConvention: 'camelCase',
  },
  /*修改本地服务地址端口号*/ 
  devServer:{
    port:1888
  },
  /*配置代理能力*/ 
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  
});