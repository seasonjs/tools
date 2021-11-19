import { isObjectLike } from './isObjectLike';
import { isPlainObject } from './isPlainObject';

/**
 * @description.zh_CN 检查 value 是否是 DOM 元素。
 * @param value
 * @TODO: 调研是否可以通过判断父类为Node来检测，可能会有兼容问题
 */
export function isElement(value: any) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}
