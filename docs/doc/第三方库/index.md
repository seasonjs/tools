---
title: 第三方库
---

内置的第三方库:loadsh，ahooks,react-hook-form.

# loadsh

常见函数方法

```tsx
import React from 'react';
import _ from 'lodash';

export default () => {
  return <div>lodash 版本:{_.VERSION}</div>;
};
```

# ahooks

钩子合集

```tsx
import React from 'react';
import { useRequest } from 'ahooks';

export default () => {
  return <div>{/*useRequest :{JSON.stringify(useRequest())}*/}</div>;
};
```

# react-hook-form

超级小的表单

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';

export default () => {
  return <div>useForm :{JSON.stringify(useForm())}</div>;
};
```

# query string

更安全的 json 序列化方案

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { stringify } from 'querystring';

export default () => {
  return <div>{/*useForm :{stringify(useForm())}*/}</div>;
};
```
