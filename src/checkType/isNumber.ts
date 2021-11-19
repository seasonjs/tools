import { isNumberObject } from './isNumberObject';
import { isNumberPrimitive } from './isNumberPrimitive';

/**
 * @description.zh_CN 检查 value 是否是原始Number数值型或者Number对象类型
 * @Notice 对象包装器和自变量
 * @param value
 */
export function isNumber(value: any) {
  return isNumberPrimitive(value) || isNumberObject(value);
}
