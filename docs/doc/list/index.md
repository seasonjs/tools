---
title: List
---

## 链表

### 快速上手

```tsx
import React from 'react';
import { List } from '@seasonjs/tools';

export default () => {
  const list = new List(1);
  list
    .push(2)
    .push(3)
    .push(4)
    .push(5)
    .map((item: any) => {
      console.log(item);
    })
    .reverse()
    .map((item: any) => console.log(item));
  return (
    <>
      {console.log(list)}
      {list.head.val}
    </>
  );
};
```
