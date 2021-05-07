---
title: useResizeObserver
---

## debug 工具

### 快速上手

```tsx
import React from 'react';
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
