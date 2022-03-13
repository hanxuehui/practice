import { defineConfig } from 'umi';
const CompressionWebpackPlugin = require('compression-webpack-plugin');
import Router from './routerConfig'
export default defineConfig({
  title: '华润医药商业',
  define: {
    'process.env.apiUrl': '',
    'process.env.amapTextApi': '',
    'process.env.fileDownloadUrl':'',
    'process.env.fileUploadUrl':'',
  },
  // dynamicImport: {
  //   loading: '@/Loading',
  // },
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  hash: true,
  antd: {},
  routes: Router,
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸。
  lessLoader: {
    javascriptEnabled: true,
  },
  targets: {
    ie: 11, // 配置需要兼容的浏览器最低版本
  },
  chainWebpack(config) {
    //过滤掉momnet的那些不使用的国际化文件
    config
      .plugin('replace')
      .use(require('webpack').ContextReplacementPlugin)
      .tap(() => {
        return [/moment[/\\]locale$/, /zh-cn/];
      });

    config.optimization.splitChunks({
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: true,
      minSize: 30000, //生成块的最小大小（以字节为单位）
      maxSize: 0,
      minChunks: 1, //拆分前必须共享模块的最小块数
      maxAsyncRequests: 10, //按需加载时最大并行请求数
      maxInitialRequests: 5, //入口点的最大并行请求数
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment)[\\/]/,
          priority: -10,
        },
        antdesigns: {
          name: 'antdesigns',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
          priority: -11,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    });
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'async',
          minSize: 10000,
          minChunks: 5,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test: /^.*node_modules[\\/](?!ag-grid-|lodash|wangeditor|react-virtualized|rc-select|rc-drawer|rc-time-picker|rc-tree|rc-table|rc-calendar|antd).*$/,
              chunks: 'all',
              priority: 10,
            },

            antd: {
              name: 'antd',
              test: /[\\/]node_modules[\\/]antd[\\/]/,
              chunks: 'all',
              priority: 9,
            },
          },
        },
      },
    });
    config.plugin('compression-webpack-plugin').use(
      new CompressionWebpackPlugin({
        // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
        algorithm: 'gzip', // 指定生成gzip格式
        test: new RegExp('\\.(js|css)$'), // 压缩 js 与 css
        threshold: 10240, //对超过10k的数据进行压缩
        minRatio: 0.8, // 压缩比例，值为0 ~ 1
      }),
    );
  },
  
})

