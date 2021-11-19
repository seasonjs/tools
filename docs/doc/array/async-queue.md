---
title: Async-queue
---

## 异步队列

### 快速上手

非常轻量的基于 Promise 的异步队列

```tsx | pure
import React from 'react';
import { AsyncQueue } from '@seasonjs/tools';

export default () => {
  const job1 = new Promise.resolve('xxx');
  const asyncQueue = new AsyncQueue();
  asyncQueue.add(job1);
};
```
