---
title: Ua
---

# 快速上手

```tsx
import React from 'react';
import { ua } from '@seasonjs/tools';

export default () => (
  <div>
    {/*<p>machine:{ua.browser.machine}</p>*/}
    {/*<p>name:{ua.browser.name}</p>*/}
    {/*<p>version: {ua.browser.version}</p>*/}
    {/*<p>engineVer:{ua.browser.engineVer}</p>*/}
    {/*<p>engine:{ua.browser.engine}</p>*/}
    {/*<p>machineSys:{ua.browser.machineSys}</p>*/}
    {/*<p>totalInfo:{ua.browser.totalInfo}</p>*/}
    {JSON.stringify(ua)}
  </div>
);
```
