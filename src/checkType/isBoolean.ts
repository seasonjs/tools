import { isBooleanObject } from './isBooleanObject';
import { isBooleanPrimitive } from './isBooleanPrimitive';

/**
 * @description.zh_CN 检查 value 是否是原始 boolean 类型或者 boolean对象。
 * @param value
 */
export function isBoolean(value: any) {
  return isBooleanPrimitive(value) || isBooleanObject(value);
}
