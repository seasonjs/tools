/**
 * @description.zh_CN 获取对象的toString类型
 * @param value
 */
export function getType(value: any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}
