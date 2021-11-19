/**
 * @description.zh_CN 检查类型是否是null或者是undefined
 * @Notice void 操作符也会返回undefined
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
 * @param value
 */
export function isNil(value: null | undefined | any) {
  return value == null;
}
