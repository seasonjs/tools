import { getType } from "./getType";
import { isObjectLike } from "./isObjectLike";

/**
 * @description.zh_CN 检查 value 是否是 Number对象。
 * @param value
 */
export function isNumberObject(value: any) {
  return isObjectLike(value) && getType(value) === '[object Number]';
}
