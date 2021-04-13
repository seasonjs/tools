---
title: Async-queue
---

## 异步队列

### 快速上手

```ts
import React from 'react';
import { AsyncQueue } from '@seasonjs/tools';

export default () => {
  const job1 = new Promise.resolve('xxx');
  const asyncQueue = new AsyncQueue();
  asyncQueue.add(job1);
};
```
