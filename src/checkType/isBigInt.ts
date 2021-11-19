import { isBigIntObject } from './isBigIntObject';
import { isBigIntPrimitive } from './isBigIntPrimitive';

/**
 * @description.zh_CN 检查 value 是否是原始 BigInt 类型或者 boolean对象。
 * @param value
 */
export function isBigInt(value: any) {
  return isBigIntPrimitive(value) || isBigIntObject(value);
}
