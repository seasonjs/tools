/**
 * @description.zh_CN 检查 value 是否是原始 boolean 类型。
 * @param value
 */
export function isBooleanPrimitive(value: any) {
  return value === true || value === false;
}
