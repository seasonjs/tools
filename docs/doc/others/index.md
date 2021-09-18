---
title: Others
---

在安装 umijs 时生效，

```jsx | pure
import { utils } from 'umi';
```

如果无 umjs 可以独立安装

```shell
yarn add @umijs/utils -D
```

```js | pure
import xxx from '@umijs/utils';
```

@umijs/utils 中 **值得注意的是：导出的大部分包为 node 包，无法在浏览器使用**

导出方法，详见 [@umijs/utils/src/index.ts](https://github.com/umijs/umi/blob/master/packages/utils/src/index.ts)。
包含外部库：

- `lodash` : 导出自 `lodash`, 实用的 js 工具库。
- `got` : 导出自 `got`, 轻量级的请求库。
- `deepmerge` : 导出自 `deepmerge`, 将两个对象的可以枚举属性深度合并。
- `semver` : 导出自 `semver`, 用于实现版本号的解析和比较，规范版本号的格式。常见于版本过低提示用户升级等场景。
- `Mustache` : 导出自 `mustache`, 无逻辑的模版语法，是 JavaScript 中的 mustache 模板系统的零依赖实现。
- `address` : 导出自 `address`, 用于获取当前计算机的 IP ，MAC 和 DNS 服务器地址等。
- `cheerio` : 导出自 `cheerio`, 用于方便的处理爬取到的网页内容，在服务端对 DOM 结构进行方便的操作。
- `clipboardy` : 导出自 `clipboardy`, 用于对剪贴板内容写入与读取的处理。
- `chokidar` : 导出自 `chokidar`, 用于监听文件的变化。
- `createDebug`, `Debugger` : 导出自 `debug`, 用于控制调试日志的输出。
- `chalk` : 导出自 `chalk`, 常用于在终端中输出彩色文字，支持链式调用，能够设置文本样式、颜色、背景色等。
- `signale` : 导出自 `signale`, 用于日志记录、状态报告以及处理其他 Node 模块和应用的输出渲染方式。
- `portfinder` : 导出自 `portfinder`, 常用于在判断端口是否被占用或者获取没有被占用的端口等场景。
- `glob` : 导出自 `glob`, 用于获取匹配对应规则的文件。
- `pkgUp` : 导出自 `pkg-up`, 查找最近的 package.json 文件。
- `resolve` : 导出自 `resolve`, 实现了 node 的 require.resolve() 算法, 提供了方便处理获取模块完整路径相关需求的方法。
- `spawn` : 导出自 `cross-spawn` , 已经封装好了 Node.js 子进程（child_process）模块下 `spawn` 函数的跨平台写法的相关细节, 直接使用其调用系统上的命令如 `npm` 即可。
- `execa`: 导出自 `execa`, 更好的子进程管理工具。相当于衍生一个 shell，传入的 command 字符串在该 shell 中直接处理。
- `mkdirp` : 导出自 `mkdirp`, node 中 `mkdir -p` 功能的实现, 用于在 Node.js 中递归式创建目录及其子目录。
- `rimraf` : 导出自 `rimraf`, node 中 `rm -rf` 功能的实现,
- `yargs` : 导出自 `yargs`, 用于创建交互式命令行工具，能够方便的处理命令行参数。
- `yParser` : 导出自 `yargs-parser`, `yargs` 使用的强大 option 解析器, 用于解析命令行参数。
- `parser` : 导出自 `@babel/parser`, 解析代码生成 AST 抽象语法树。
- `traverse` : 导出自 `@babel/traverse`, 对 AST 节点进行递归遍历。
- `t` : 导出自 `@babel/types`, 用于 AST 节点的 Lodash 式工具库。它包含了构造、验证以及变换 AST 节点的方法。 该工具库包含考虑周到的工具方法，对编写处理 AST 逻辑非常有用。 包含内部方法 内部库
- `isBrowser`, 判断是否在浏览器环境。
- `isWindows`, 判断当前是否是 windows 系统。
- `isSSR`, whether SSR success in client。
- `isLernaPackage`, 判断是否存在 `lerna.json` 文件。
- `winPath`, 将文件路径转换为兼容 window 的路径，用于在代码中添加 `require('/xxx/xxx.js')` 之类的代码。
- `winEOL`, 在 windows 环境下，很多工具都会把换行符 lf 自动改成 crlf, 为了测试精准需要将换行符转化一下。
- `compatESModuleRequire`, 兼容 ESModule 以及 Require 为 Require。
- `mergeConfig`, 对象合并。
- `randomColor`, 随机生成颜色。
- `delay`, 延迟函数。
- `Generator`, `mustache` 模版代码生成。
- `BabelRegister`, `@babel/register` 的简易封装。
- `parseRequireDeps`, 获取特定文件的本地依赖。
- `cleanRequireCache`, 清理特定 Module 在 require cache 以及 parent.children 中的引用。
- `getWindowInitialProps`, 获取 window.g_initialProps。
- `getFile`, 获取特定目录中文件的完整扩展名，javascript 文件的匹配顺序 `['.ts', '.tsx', '.js', '.jsx']`，css
  文件的匹配顺序 `['.less', '.sass', '.scss', '.stylus', '.css']`。
- `routeToChunkName`, transform route component into webpack chunkName。

类型

- `ArgsType<T extends (...args: any[]) => any>`, 获取函数参数数组类型。
- `PartialKeys<T>`, 找出 T 中类型是 undefined 的 key。
- `PartialProps<T>`, 取出 T 中类型是 undefined 的属性。
- `NodeEnv`: 联合类型 'development' | 'production' | 'test'。
- `Omit<T, U>`, 排除 T 中的 U key。

注：

- 原则上同类功能的方法不允许使用其他的，以降低整体尺寸，比如请求用 got，参数处理用 yargs
- 编写插件时，除了 `api.utils`，还可通过 `import { utils } from 'umi'` 取到，通常用于非插件主入口的文件

````

# react-hook-form

超级小的表单

```tsx | pure
import React from 'react';
import { useForm } from 'react-hook-form';

export default () => {
  return <div>useForm :{JSON.stringify(useForm())}</div>;
};
````

# query string

更安全的 json 序列化方案

```tsx | pure
import { querystring } from '@seasonjs/tools';

export default () => {
  return <div>{querystring.stringify({ a: 1, b: 2 })}</div>;
};
```
