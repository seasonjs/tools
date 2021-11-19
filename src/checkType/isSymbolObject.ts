import { getType } from './getType';
import { isObjectLike } from './isObjectLike';

/**
 * @description.zh_CN 检查 value 是否是原始 Symbol 或者 Symbol 对象。
 * @param value
 */
export function isSymbolObject(value: any) {
  return isObjectLike(value) && getType(value) === '[object Symbol]';
}
