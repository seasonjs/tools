---
title: Day
---

## 日期

### 快速上手

```tsx | pure
import React from 'react';
import {
  somedayStart,
  somedayEnd,
  todayStart,
  todayEnd,
} from '@seasonjs/tools';

export default () => {
  return (
    <div>
      <p>今天开始: {somedayStart().toString()}</p>
      <p>今天结束: {somedayEnd().toString()}</p>
      <p>今天开始: {todayStart.toString()}</p>
      <p>今天结束: {todayEnd.toString()}</p>
    </div>
  );
};
```
