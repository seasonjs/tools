---
title: 线程/协程
---

# 线程/协程

## 快速上手

```ts
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
