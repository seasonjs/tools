/**
 * @description.zh_CN 判断类型是否是function并且非空
 * @Notice 由于class 是特殊的function 或者理解为构造函数，所以也会被检查为function、
 * @param value
 */
export function isFunction(value: any) {
  return typeof value === 'function';
}
