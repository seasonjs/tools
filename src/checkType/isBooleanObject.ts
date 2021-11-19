import { getType } from './getType';
import { isObjectLike } from './isObjectLike';

/**
 * @description.zh_CN 检查 value 是否是 boolean对象。
 * @param value
 */
export function isBooleanObject(value: any) {
  return isObjectLike(value) && getType(value) === '[object Boolean]';
}
