import { getType } from './getType';
import { isObjectLike } from './isObjectLike';

/**
 * @description.zh_CN 检查 value 是否是一个Map对象。
 * @param value
 */
export function isMap(value: any) {
  return isObjectLike(value) && getType(value) == '[object Map]';
}
