import {
  isArray,
  isArrayBuffer,
  isArrayLike,
  isBigInt,
  isBoolean,
  isDate,
  isElement,
  isEmpty,
  isFunction,
  isMap,
  isNil,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
} from './assertFunc';

// 基本类型
export type TYPE =
  | 'number'
  | 'string'
  | 'symbol'
  | 'null'
  | 'undefined'
  | 'boolean'
  | 'bigint'
  // 常见的引用类型
  | 'Array'
  | 'Date'
  | 'Element'
  | 'Function'
  | 'Object'
  | 'RegExp'
  | 'Set'
  | 'Map'
  // 根据Lodash/TypeScript扩展的类型
  // 类arguments对象
  // | 'Arguments'
  //
  // nil为 null,undefined,void的合集
  | 'Nil'
  | 'ArrayLike'
  | 'ArrayBuffer'
  | 'Empty'
  | 'NaN'
  | 'unknown';
// 断言映射
const assertMap: Record<TYPE, (value: any) => boolean> = {
  number: isNumber,
  string: isString,
  symbol: isSymbol,
  null: isNull,
  undefined: isUndefined,
  boolean: isBoolean,
  bigint: isBigInt,
  Array: isArray,
  Object: isObject,
  Element: isElement,
  Date: isDate,
  Set: isSet,
  Map: isMap,
  Function: isFunction,
  RegExp: isRegExp,
  Nil: isNil,
  ArrayLike: isArrayLike,
  ArrayBuffer: isArrayBuffer,
  Empty: isEmpty,
  NaN: Number.isNaN,
  unknown: () => false,
};

/**
 * @description.zh_CN 类型断言会调用所有的类型检查，返回一个类型数组,尽量不要使用断言，
 * 因为它需要将所有条件检查一遍 :) ,如果你需要全检查一遍的话可以调用
 * @param value
 */
export function assertType(value: any): TYPE[] {
  const typeAssertArray: TYPE[] = [];
  Object.entries(assertMap).forEach(([key, as]) => {
    if (as(value)) {
      typeAssertArray.push(key as TYPE);
    }
  });
  // 最后如果断言数组长度为0则返回unknown,断言条件下基本不可能出现
  if (typeAssertArray.length === 0) {
    typeAssertArray.push('unknown');
  }
  return typeAssertArray;
}
