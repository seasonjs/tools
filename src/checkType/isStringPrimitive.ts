/**
 * @description.zh_CN 检查 value 是否是原始字符串String
 * @param value
 */
export function isStringPrimitive(value: any) {
  return typeof value === 'string';
}
