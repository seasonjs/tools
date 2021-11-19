---
title: useResizeObserver
---

## 元素重置宽高大小

### 快速上手

```tsx
import React, { useRef } from 'react';
import { useResizeObserver } from '@seasonjs/tools';

let a = 0;
export default () => {
  const ref = useRef(null);
  const size = useResizeObserver(ref);
  return (
    <>
      <div ref={ref}>
        <p>宽：{size.with}</p>
        <p>高：{size.height}</p>
      </div>
    </>
  );
};
```
