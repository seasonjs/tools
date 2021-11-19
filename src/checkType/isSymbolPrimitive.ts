/**
 * @description.zh_CN 检查 value 是否是原始 Symbol 或者 Symbol 对象。
 * @param value
 */
export function isSymbolPrimitive(value: any) {
  return typeof value === 'symbol';
}
