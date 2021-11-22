---
title: TypeCheck
---

# 类型检查

```tsx
import React from 'react';
 import { getType } from '@seasonjs/tools';

export default () => {
  return <button onClick={() => {
    console.log(getType({}))
    console.log(getType(new Date()))
    1 |> getType |> console.log
  }}>检查类型</button>;
};
```
