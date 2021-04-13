---
title: useDownLoad-下载
---

## 常用下载方法

### 快速上手

```tsx
import React from 'react';
import { useDownLoad } from '@seasonjs/tools';

export default () => {
  const { run } = useDownLoad();
  return (
    <button
      onClick={() => {
        run('/someFile');
      }}
    >
      下载
    </button>
  );
};
```
