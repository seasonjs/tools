---
title: TypeCheck
---

# 类型检查

```tsx
import React from 'react';
import { assertType } from '@seasonjs/tools';

export default () => {
  return <button onClick={() => {
    console.log(assertType({}))
    console.log(assertType(new Date()))
    1 |> assertType |> console.log
  }}>检查类型</button>;
};
```
