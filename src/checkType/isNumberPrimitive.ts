/**
 * @description.zh_CN 检查 value 是否是原始Number数值型
 * @param  value
 */
export function isNumberPrimitive(value: any) {
  return typeof value === 'number';
}
