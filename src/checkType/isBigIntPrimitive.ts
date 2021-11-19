/**
 * @description.zh_CN 检查 value 是否是原始 BigInt类型。
 * @param value
 */
export function isBigIntPrimitive(value: any) {
  return typeof value === 'bigint';
}
