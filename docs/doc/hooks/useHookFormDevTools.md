---
title: useFormDevTool
---

## react-hook-form debug 工具封装 (仅提供存档不在导出)

### 快速上手

```tsx
import React from 'react';
import { useFormDevTool } from '@seasonjs/tools';
import { useForm } from 'react-hook-form';

let a = 0;
export default () => {
  const { control, register, handleSubmit } = useForm();
  const { DevTool } = useFormDevTool(control);
  return (
    <>
      <DevTool />
      <form onSubmit={handleSubmit((a) => console.log(a))}>
        <input {...register('test')} />
        <button>提交</button>
      </form>
    </>
  );
};
```
