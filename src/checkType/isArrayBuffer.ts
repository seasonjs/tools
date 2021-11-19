import { getType } from './getType';
import { isObjectLike } from './isObjectLike';

/**
 * @description.zh_CN  检查 value 是否是 ArrayBuffer 对象。
 * @param value
 */
export function isArrayBuffer(value: any) {
  return isObjectLike(value) && getType(value) == '[object ArrayBuffer]';
}
