---
title: useForceUpdate
---

## 强制更新

### 快速上手

```tsx
import React from 'react';
import { useForceUpdate } from '@seasonjs/tools';

let a = 0;
export default () => {
  const forceUpdate = useForceUpdate();
  return (
    <button
      onClick={() => {
        a += 1;
        forceUpdate();
      }}
    >
      点击按钮实现强制更新：{a}
    </button>
  );
};
```
