---
title: 日期
---

## 日期

### 快速上手

```tsx
import React from 'react';
import { todayStart, todayEnd } from '@seasonjs/tools';

export default () => {
  return (
    <div>
      <p>今天开始: {todayStart.toString()}</p>
      <p>今天结束: {todayEnd.toString()}</p>
    </div>
  );
};
```
