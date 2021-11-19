import { isArrayLike } from '@/checkType/isArrayLike';
import { isArray } from '@/checkType/isArray';
import { isString } from '@/checkType/isString';
import { isMap } from '@/checkType/isMap';
import { isSet } from '@/checkType/isSet';
import { isObjectLike } from '@/checkType/isObjectLike';

/**
 * @description.zh_CN 检查value是否为空。
 * @param value
 */
export function isEmpty(value: any) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray(value) || isString(value))) {
    return value?.length > 0;
  }
  if (isMap(value) || isSet(value)) {
    return value?.size > 0;
  }
  if (isObjectLike(value)) {
    return Object?.keys(value)?.length > 0;
  }
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
