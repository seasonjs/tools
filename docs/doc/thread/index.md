---
title: Thread
---

# 协程（worker）

## 快速上手

不需要使用 worker loader 也可以使用的 worker，虽热是 woker 进程，但是这里我更愿意叫他协程
因为传入的代码必须是对外部状态无依赖的，而且需要注意 woker 的开销

```tsx | pure
import { makeWorker } from '@seasonjs/tools';

export default () => {
  const shouldRunOnThread = () => {
    console.log('I should run on thread');
  };
  makeWorker(shouldRunOnThread)
    .then((a) => {
      console.log('I get an message', a);
    })
    .catch((e) => {
      console.log('I catch an error', e);
    });
  return null;
};
```
