export default {
    chainWebpack(memo) {
        memo.plugins.delete('copy');
    },
    base: '/tools',
    publicPath: '/tools/',
    exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
};
