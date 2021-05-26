---
title: Mobx
---

## 持久化

### 快速上手

```tsx
import React from 'react';
import { makePersistent, persistent } from '@seasonjs/tools';
import { makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

class mobxTestStore {
  constructor() {
    makeObservable(this);
    makePersistent(this);
  }

  @observable
  @persistent
  test = 1;
}

//注意store在使用的时候需要是单实例
const store = new mobxTestStore();
export default observer(() => {
  console.log(store.test);
  return (
    <>
      <h1>{store.test}</h1>
      <button
        onClick={() => {
          store.test++;
        }}
      >
        加1
      </button>
    </>
  );
});
```
