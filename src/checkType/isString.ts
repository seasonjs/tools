import { isStringObject } from './isStringObject';
import { isStringPrimitive } from './isStringPrimitive';

/**
 * @description.zh_CN 检查 value 是否是原始字符串String或者String对象。
 * @Notice 原始字符串和String对象在使用的时候是存在区别的！
 * @link  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects
 * @param value
 */
export function isString(value: any) {
  return isStringPrimitive(value) || isStringObject(value);
}
