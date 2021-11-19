import { isObjectLike } from '@/checkType/isObjectLike';
import { getType } from '@/checkType/getType';

/**
 * @description.zh_CN 检查value是否为RegExp对象。
 * @param value
 */
export function isRegExp(value: any) {
  return isObjectLike(value) && getType(value) == '[object RegExp]';
}
