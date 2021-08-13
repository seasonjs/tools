
English | [简体中文](./README.zh-CN.md)


<img src="./docs/public/icon.svg" width="200">

# @seasonjs/tools


react 通用工具 
  
<p align="center">

[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi)
<a href="https://www.npmjs.com/package/@seasonjs/tools"><img src="https://img.shields.io/npm/v/@seasonjs/tools.svg?sanitize=true" alt="Version"></a>
<a href="https://www.npmjs.com/package/@seasonjs/tools"><img src="https://img.shields.io/npm/l/@seasonjs/tools.svg?sanitize=true" alt="License"></a>

</p>

## 概览

下一代工具合集


## 安装

- npm:

```shell
npm install @seasonjs/tools
```

- yarn:

```shell
yarn add @seasonjs/tools
```

## 使用

https://season.js.org

## 支持

所有现代浏览器， Chrome, Firefox, Edge, Safari。

## 开发


#### 项目结构
```
root
│
└───docks     dumi 文档
│   
└───src       code space
    │   
    └───array 
    │   
    └───asyncQyeue
    │   
    └───day
    │   
    └───deepClone  未被导出给用户，仅做记录
    │   
    └───dom      
    │   
    └───hoc        react hoc
    │   
    └───hooks      react hooks
    │   
    └───list          
    │   
    └───mixin      未被导出给用户，仅做记录
    │   
    └───mobx
    │   
    └───reg
    │   
    └───store
    │   
    └───thread
    │   
    └───tree
    │   
    └───typeCheck  未被导出给用户，仅做记录
    │   
    └───ua
    │   
    └───upload     未被导出给用户，仅做记录
│   
└───index.ts  Entry file
```

### 开发提示 & 贡献指南

- 升级包

```bash
yarn upgrade-interactive --latest
```

- 安装依赖

```bash
$ npm i
```

- 启动开发服务

```bash
$ npm start
```

- 构建文档

```bash
$ npm run docs:build
```

- 构建包

```bash
$ npm run build
```

- git设置
 
You must be case sensitive because JS import is case sensitive

```
git config core.ignorecase false
```
## 贡献者

[@Cyberhan123](https://github.com/cyberhan123)
[@gonglixin980926](https://github.com/gonglixin980926)


## 感谢

感谢 mobx, lodash, umijs 等.

## License

[MIT](LICENSE)
Copyright © 2021, seasonjs