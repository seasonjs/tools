import { isSymbolObject } from './isSymbolObject';

/**
 * @description.zh_CN 检查 value 是否是原始 Symbol 或者 Symbol 对象。
 * @param value
 */
export function isSymbol(value: any) {
  return isSymbolPrimitive(value) || isSymbolObject(value);
}
