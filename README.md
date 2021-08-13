[English](./README.md) | 简体中文


<img src="./docs/public/icon.svg" width="200">

# @seasonjs/tool

A react common tool  
  
<p align="center">

[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi)
<a href="https://www.npmjs.com/package/@seasonjs/tools"><img src="https://img.shields.io/npm/v/@seasonjs/tools.svg?sanitize=true" alt="Version"></a>
<a href="https://www.npmjs.com/package/@seasonjs/tools"><img src="https://img.shields.io/npm/l/@seasonjs/tools.svg?sanitize=true" alt="License"></a>

</p>

## Overview

Next generation toolset package



## Install

- npm:

```shell
npm install @seasonjs/tools
```

- yarn:

```shell
yarn add @seasonjs/tools
```

## Usage

https://season.js.org

## Support

Support all modern browsers eg. Chrome, Firefox, Edge, Safari.

## Development


#### Frontend File Structure
```
root
│
└───docks     dumi doc 
│   
└───src       code space
    │   
    └───array 
    │   
    └───asyncQyeue
    │   
    └───day
    │   
    └───deepClone  not export to user yet,just an record.
    │   
    └───dom      
    │   
    └───hoc        react hoc
    │   
    └───hooks      react hooks
    │   
    └───list          
    │   
    └───mixin      not export to user yet,just an record.
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
    └───typeCheck  not export to user yet,just an record.
    │   
    └───ua
    │   
    └───upload not export to user yet,just an record.
│   
└───index.ts  Entry file
```

### Develop tips & Contribute guide

- update npm packages

```bash
yarn upgrade-interactive --latest
```

- install all

```bash
$ npm i
```

- start

```bash
$ npm start
```

- build doc

```bash
$ npm run docs:build
```

- build packages

```bash
$ npm run build
```

- git setting
 
You must be case sensitive because JS import is case sensitive

```
git config core.ignorecase false
```
## Contributors

[@Cyberhan123](https://github.com/cyberhan123)
[@gonglixin980926](https://github.com/gonglixin980926)


## Acknowledgements

thanks mobx, lodash, umijs etc.

## License
[MIT](LICENSE)
Copyright © 2021, seasonjs
