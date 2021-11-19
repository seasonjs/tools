import { defineConfig } from 'dumi';

const __DEV__ = process.env.NODE_ENV === 'development';
export default defineConfig({
  base: '/tools',
  publicPath: __DEV__ ? '/' : '//season.js.org/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  analytics: {
    ga: 'G-DS0MXDKW8N',
  },
  webpack5:{},
  locales: [['zh-CN', '中文']],
  title: 'seasonjs/tools',
  mode: 'site',
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/seasonjs/tools' },
    { title: '更新日志', path: 'https://github.com/seasonjs/tools/releases' },
  ],
  logo: '/icon.svg',
  favicon: '/icon.svg',
  sitemap: {
    hostname: 'https://season.js.org',
  },
});
