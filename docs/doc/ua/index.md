---
title: Ua
---

# 快速上手

从 bowser 包抽离，用法与 bowser 包基本保持一致，并暴露 ua 供大家直接使用

```tsx
import React from 'react';
import { ua, satisfies } from '@seasonjs/tools';

export default () => (
  <div>
    <p> {JSON.stringify(ua)}</p>
    <p>
      {satisfies({
        // declare browsers per OS
        windows: {
          'internet explorer': '>10',
        },
        macos: {
          safari: '>10.1',
        },
        // or in general
        chrome: '~20.1.1432',
        firefox: '>31',
        opera: '>=22',
        // per platform (mobile, desktop or tablet)
        mobile: {
          safari: '>=9',
        },
      })?.toString()}
    </p>
  </div>
);
```
