# 为 @seasonjs/tools 做出贡献

## 我怎样才能做出贡献？

### 改进文档

作为 @seasonjs/tools 的用户，你是帮助我们改进文档的最佳人选。错别字的纠正，错误的修复，更好的解释，更多的例子，等等。对可以改进的事情创建 issues。任何东西都可以。甚至是对这个文件的改进。

### 改善问题

有些问题是在信息缺失的情况下产生的，不能复现，或者纯粹是无效的。帮助它们让它们更容易解决。处理问题需要大量的时间，而我们可以把这些时间用于修复错误和增加功能。

### 对问题进行反馈

我们一直在 issues 中寻找更多关于讨论的意见。这是一个影响 @seasonjs/tools 未来方向的好机会。

### 提交一个 issue

- issues 是为问题而设立的。
- 在提出一个问题之前，请先在 issues 中搜索之前是否讨论过。
- 确保你使用的 @seasonjs/tools 是的最新版本。
- 使用一个清晰和描述性的标题。
- 包括尽可能多的信息。复现问题的步骤，错误信息，客户端版本，操作系统，等等。
- 你在一个问题上投入的时间越多，我们就会投入越多。
- 最好的问题报告是一个失败的测试来证明它。

### 提交一个 pull request

- 非微不足道的变化通常最好先在一个 issue 中讨论，以防止你做不必要的工作。
- 对于雄心勃勃的任务，你应该尽快让你的工作得到社区的反馈。一旦你完成了演示你想法中所需的最低要求，就打开一个拉请求在这个早期阶段，不要担心让事情变得完美，或者 100% 完成。
- 为拉取请求和提交的内容使用一个清晰的、描述性的标题。
- 你可能会被要求对你的拉动请求进行修改。没有必要再开一个拉动请求。只需更新现有的那个。

### 开发提示

- 升级包

```bash
$ pnpm up
```

- 安装依赖

```bash
$ pnpm i
```

- 启动开发服务

```bash
$ pnpm run start
```

- 构建文档

```bash
$ pnpm run docs:build
```

- 构建包

```bash
$ pnpm run build
```

- git 设置

你必须进行这项设置，因为 js 是`大小写敏感的`

```
git config core.ignorecase false
```

#### 项目结构参考

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
