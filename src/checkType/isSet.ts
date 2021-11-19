import { getType } from './getType';
import { isObjectLike } from './isObjectLike';

/**
 * @description.zh_CN 检查 value 是否是一个Set对象。
 * @param value
 */
export function isSet(value: any) {
  return isObjectLike(value) && getType(value) == '[object Set]';
}
