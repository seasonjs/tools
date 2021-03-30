export default {
    chainWebpack(memo) {
        memo.plugins.delete('copy');
    },
    base: '/tools',
    publicPath: '/tools/',
    exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
    title: 'season/tools',
    mode: 'site',
    navs: {
        'zh-CN': [
            null,
            { title: 'GitHub', path: 'https://github.com/season/tools' },
            { title: '更新日志', path: 'https://github.com/season/tools/releases' },
        ],
    },
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

};
