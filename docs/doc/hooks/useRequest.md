---
title: useRequest
---

> 导出自 [@ahooks/use-request](https://ahooks.js.org/zh-CN/hooks/async) 可根据官方文档进行参考 

## API

```ts
const {
  loading: boolean,
  data?: TData,
  error?: Error,
  params: TParams || [],
  run: (...params: TParams) => void,
  runAsync: (...params: TParams) => Promise<TData>,
  refresh: () => void,
  refreshAsync: () => Promise<TData>,
  mutate: (data?: TData | ((oldData?: TData) => (TData | undefined))) => void,
  cancel: () => void,
} = useRequest<TData, TParams>(
  service: (...args: TParams) => Promise<TData>, 
  {
    manual?: boolean,
    defaultParams?: TParams,
    onBefore?: (params: TParams) => void,
    onSuccess?: (data: TData, params: TParams) => void,
    onError?: (e: Error, params: TParams) => void,
    onFinally?: (params: TParams, data?: TData, e?: Error) => void,
  }
);
```

### Result

| 参数         | 说明                                                                                                     | 类型                                                                  |
|--------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| data         | service 返回的数据                                                                                       | `TData` \| `undefind`                                                 |
| error        | service 抛出的异常                                                                                       | `Error` \| `undefind`                                                 |
| loading      | service 是否正在执行                                                                                     | `boolean`                                                             |
| params       | 当次执行的 service 的参数数组。比如你触发了 `run(1, 2, 3)`，则 params 等于 `[1, 2, 3]`                   | `TParams`  \| `[]`                                             |
| run          | <ul><li> 手动触发 service 执行，参数会传递给 service</li><li>异常自动处理，通过 `onError` 反馈</li></ul> | `(...params: TParams) => void`                                        |
| runAsync     | 与 `run` 用法一致，但返回的是 Promise，需要自行处理异常。                                                | `(...params: TParams) => Promise<TData>`                              |
| refresh      | 使用上一次的 params，重新调用 `run`                                                                      | `() => void`                                                          |
| refreshAsync | 使用上一次的 params，重新调用 `runAsync`                                                                 | `() => Promise<TData>`                                                |
| mutate       | 直接修改 `data`                                                                                          | `(data?: TData / ((oldData?: TData) => (TData / undefined))) => void` |
| cancel       | 取消当前正在进行的请求                                                                                   | `() => void`                                                          |

### Options

| 参数          | 说明                                                                                                                                       | 类型                                                 | 默认值  |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|---------|
| manual        | <ul><li> 默认 `false`。 即在初始化时自动执行 service。</li><li>如果设置为 `true`，则需要手动调用 `run` 或 `runAsync` 触发执行。 </li></ul> | `boolean`                                            | `false` |
| defaultParams | 首次默认执行时，传递给 service 的参数                                                                                                      | `TParams`                                            | -       |
| onBefore      | service 执行前触发                                                                                                                         | `(params: TParams) => void`                          | -       |
| onSuccess     | service resolve 时触发                                                                                                                     | `(data: TData, params: TParams) => void`             | -       |
| onError       | service reject 时触发                                                                                                                      | `(e: Error, params: TParams) => void`                | -       |
| onFinally     | service 执行完成时触发                                                                                                                     | `(params: TParams, data?: TData, e?: Error) => void` | -       |


以上我们介绍了 useRequest 最基础的功能，接下来我们介绍一些更高级的能力。
