import { defineConfig } from 'dumi';

const __DEV__ = process.env.NODE_ENV === 'development';
export default defineConfig({
  base: '/tools',
  publicPath: __DEV__ ? '/' : '//season.js.org/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // ssr: {},
  locales: [['zh-CN', '中文']],
  title: 'seasonjs/tools',
  mode: 'site',
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/seasonjs/tools' },
    { title: '更新日志', path: 'https://github.com/seasonjs/tools/releases' },
  ],
  logo: 'https://raw.githubusercontent.com/seasonjs/tools/main/docs/public/icon.svg',
  favicon:
    'https://raw.githubusercontent.com/seasonjs/tools/main/docs/public/icon.svg',
  // extraBabelPlugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: '@seasonjs/tools',
  //       libraryDirectory: 'dist',
  //       // customStyleName: name => {
  //       //   return `./style/index.less`; // 注意：这里 ./ 不可省略
  //       // },
  //     },
  //     // '@seasonjs/tools',
  //   ],]
  // extraBabelPlugins: [
  //     [
  //         'import',
  //         {
  //             libraryName: 'antd',
  //             libraryDirectory: 'es',
  //             style: 'css',
  //         },
  //     ],
  // ],
});
