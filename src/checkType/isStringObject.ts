
import { getType } from './getType';
import { isArray } from './isArray';
import { isObjectLike } from './isObjectLike';

/**
 * @description.zh_CN 检查 value 是否是String对象。
 * @param value
 */
export function isStringObject(value: any) {
  return (
    isObjectLike(value) &&
    !isArray(value) &&
    getType(value) === '[object String]'
  );
}
