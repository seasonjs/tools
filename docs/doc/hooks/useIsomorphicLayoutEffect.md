---
title: useIsomorphicLayoutEffect
---

### 快速上手

自动降级的 layoutEffect

```tsx | pure
import React from 'react';
import { useIsomorphicLayoutEffect } from '@seasonjs/tools';

// 部分环境中可能不支持useLayoutEffect，因此会在这里被降级为useEffect
export default () => {
  useIsomorphicLayoutEffect(() => {
    console.log('啊，这是个自动降级的LayoutEffect');
  }, []);
};
```
