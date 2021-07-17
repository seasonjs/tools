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
      <p>某天的开始（如果不传递参数默认为今天）: {somedayStart().toString()}</p>
      <p>某天的结束（如果不传递参数默认为今天）: {somedayEnd().toString()}</p>
      <p>今天开始: {todayStart.toString()}</p>
      <p>今天结束: {todayEnd.toString()}</p>
    </div>
  );
};
```
