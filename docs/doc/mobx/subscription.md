---
title: subscription
---

## 订阅

### 快速上手

```tsx
import React from 'react';
import { subscription } from '@seasonjs/tools';
import { observer } from 'mobx-react-lite';

const obj = {
  a: 1,
};
export default observer(() => {
  subscription(
    obj,
    (state) => {
      return state.a + 1;
    },
    (oldValue, newValue) => {
      console.log(oldValue, newValue);
    },
  );
  return (
    <>
      <h1>{obj.a}</h1>
      <button
        onClick={() => {
          obj.a++;
          console.log(obj.a);
        }}
      >
        加1
      </button>
    </>
  );
});
```
