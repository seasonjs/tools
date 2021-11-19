import { isArray, isObjectLike } from '@/checkType/assertFunc';
import { getType } from './getType';

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
