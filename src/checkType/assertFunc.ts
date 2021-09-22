/**
 * @description.zh_CN 整体代码和实现借鉴了Lodash的代码,类型的检查与定义根据ecma规范进行（MDN）,扩充类型参考了ts类型
 * @Notice 基本类型的检查会包含两个部分，一个是检查对象原始类型，一个是检查对象包装器类型(Object(1),Object(1n),Object(true))，如果有需求可以分别调用
 * @link1 https://262.ecma-international.org/6.0/#sec-ecmascript-language-types
 * @link2 https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * @link3 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */

/**
 * @description.zh_CN 获取对象的toString类型
 * @param value
 */
export function getType(value: any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}

/**
 * @description.zh_CN 检查 value 是否是原始Number数值型
 * @param  value
 */
export function isNumberPrimitive(value: any) {
  return typeof value === 'number';
}

/**
 * @description.zh_CN 检查 value 是否是 Number对象。
 * @param value
 */
export function isNumberObject(value: any) {
  return isObjectLike(value) && getType(value) === '[object Number]';
}

/**
 * @description.zh_CN 检查 value 是否是原始Number数值型或者Number对象类型
 * @Notice 对象包装器和自变量
 * @param value
 */
export function isNumber(value: any) {
  return isNumberPrimitive(value) || isNumberObject(value);
}

/**
 * @description.zh_CN 检查 value 是否是原始字符串String
 * @param value
 */
export function isStringPrimitive(value: any) {
  return typeof value === 'string';
}

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

/**
 * @description.zh_CN 检查 value 是否是原始字符串String或者String对象。
 * @Notice 原始字符串和String对象在使用的时候是存在区别的！
 * @link  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects
 * @param value
 */
export function isString(value: any) {
  return isStringPrimitive(value) || isStringObject(value);
}

/**
 * @description.zh_CN 检查 value 是否是原始 Symbol 或者 Symbol 对象。
 * @param value
 */
function isSymbolPrimitive(value: any) {
  return typeof value === 'symbol';
}

/**
 * @description.zh_CN 检查 value 是否是原始 Symbol 或者 Symbol 对象。
 * @param value
 */
function isSymbolObject(value: any) {
  return isObjectLike(value) && getType(value) === '[object Symbol]';
}

/**
 * @description.zh_CN 检查 value 是否是原始 Symbol 或者 Symbol 对象。
 * @param value
 */
export function isSymbol(value: any) {
  return isSymbolPrimitive(value) || isSymbolObject(value);
}

/**
 * @description.zh_CN 判断类型是否是null
 * @param value
 */
export function isNull(value: any) {
  return value === null;
}

/**
 * @description.zh_CN 检查 value 是否是 undefined。
 * @param value
 */
export function isUndefined(value: any) {
  return value === undefined;
}

/**
 * @description.zh_CN 检查类型是否是null或者是undefined
 * @Notice void 操作符也会返回undefined
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
 * @param value
 */
export function isNil(value: null | undefined | any) {
  return value == null;
}

/**
 * @description.zh_CN 检查 value 是否是原始 boolean 类型。
 * @param value
 */
export function isBooleanPrimitive(value: any) {
  return value === true || value === false;
}

/**
 * @description.zh_CN 检查 value 是否是 boolean对象。
 * @param value
 */
export function isBooleanObject(value: any) {
  return isObjectLike(value) && getType(value) === '[object Boolean]';
}

/**
 * @description.zh_CN 检查 value 是否是原始 boolean 类型或者 boolean对象。
 * @param value
 */
export function isBoolean(value: any) {
  return isBooleanPrimitive(value) || isBooleanObject(value);
}

/**
 * @description.zh_CN 检查 value 是否是原始 BigInt类型。
 * @param value
 */
export function isBigIntPrimitive(value: any) {
  return typeof value === 'bigint';
}

/**
 * @description.zh_CN 检查 value 是否是 BigInt对象。
 * @param value
 */
export function isBigIntObject(value: any) {
  return isObjectLike(value) && getType(value) === '[object BigInt]';
}

/**
 * @description.zh_CN 检查 value 是否是原始 BigInt 类型或者 boolean对象。
 * @param value
 */
export function isBigInt(value: any) {
  return isBigIntPrimitive(value) || isBigIntObject(value);
}

/**
 * @description.zh_CN 检查 value 是否是 Array 类对象
 * @param value
 */
export function isArray(value: any) {
  return Array.isArray(value);
}

/**
 * @description.zh_CN  检查 value 是否是类数组。可以理解为可以被Array.from转换为数组的对象
 * @Detail 1.拥有伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）；2.可迭代对象（可以获取对象中的元素,如 Map和 Set 等）
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 * @param value
 */
export function isArrayLike(value: any) {
  const { length } = value;
  return (
    typeof value !== 'function' &&
    Number.isFinite(length) &&
    length > -1 &&
    length % 1 === 0
  );
}
/**
 * @description.zh_CN  检查 value 是否是 ArrayBuffer 对象。
 * @param value
 */
export function isArrayBuffer(value: any) {
  return isObjectLike(value) && getType(value) == '[object ArrayBuffer]';
}

/**
 * @description.zh_CN 检查 value 是否为 Object并且非null类型，
 * @Notice Object 中会包含function， arrays,regexp,new Number(0), 以及 new String('')等能被typeof 为function的对象
 * @param value
 */
export function isObject(value: null | any) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

/**
 * @description.zh_CN 检查 value 是否是 类对象（父类是Object）
 * @Notice ObjectLike 中不会包含function但是可能会包含arrays,regexp,new Number(0), 以及new String('')等能被typeof 为function的对象
 * @param value
 */
export function isObjectLike(value: any) {
  return typeof value === 'object' && value !== null;
}

/**
 * @description.zh_CN 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。
 * @Notice isPlainObject 中不会包含function，arrays,regexp,new Number(0), 以及 new String('')
 * @param value
 */
export function isPlainObject(value: any) {
  //如果不是Object或者父类不是Object那么肯定不是普通对象
  if (!isObjectLike(value) || getType(value) !== '[object Object]') {
    return false;
  }
  //如果父类为null，那么肯定是普通对象
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  //遍历，如果父类不为空则继续遍历
  while (Object.getPrototypeOf(proto) !== null) {
    //向上查找继承的基类，找到不是null的最上面的一层
    proto = Object.getPrototypeOf(proto);
  }
  // 如果原型链最上面的类和父类相等：）也就是他还是Object为父类则认为是普通对象
  return Object.getPrototypeOf(value) === proto;
}

/**
 * @description.zh_CN 检查 value 是否是 DOM 元素。
 * @param value
 * @TODO: 调研是否可以通过判断父类为Node来检测，可能会有兼容问题
 */
export function isElement(value: any) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

/**
 * @description.zh_CN 检查 value 是否是 Date 对象。
 * @param value
 */
export function isDate(value: any) {
  return isObjectLike(value) && getType(value) === '[object Date]';
}

/**
 * @description.zh_CN 检查 value 是否是一个Set对象。
 * @param value
 */
export function isSet(value: any) {
  return isObjectLike(value) && getType(value) == '[object Set]';
}

/**
 * @description.zh_CN 检查 value 是否是一个Map对象。
 * @param value
 */
export function isMap(value: any) {
  return isObjectLike(value) && getType(value) == '[object Map]';
}

/**
 * @description.zh_CN 判断类型是否是function并且非空
 * @Notice 由于class 是特殊的function 或者理解为构造函数，所以也会被检查为function、
 * @param value
 */
export function isFunction(value: any) {
  return typeof value === 'function';
}

/**
 * @description.zh_CN 检查value是否为RegExp对象。
 * @param value
 */
export function isRegExp(value: any) {
  return isObjectLike(value) && getType(value) == '[object RegExp]';
}

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
