/**
 * @description.zh_CN 整体代码和实现借鉴了Lodash的代码,类型的检查与定义根据ecma规范进行（MDN）,扩充类型参考了ts类型
 * @Notice 基本类型的检查会包含两个部分，一个是检查对象原始类型，一个是检查对象包装器类型(Object(1),Object(1n),Object(true))，如果有需求可以分别调用
 * @link1 https://262.ecma-international.org/6.0/#sec-ecmascript-language-types
 * @link2 https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * @link3 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */

export * from './getType';

export * from './isNumberPrimitive';

export * from './isNumberObject';

export * from './isNumber';

export * from './isStringPrimitive';

export * from './isStringObject';

export * from './isString';

export * from './isSymbolPrimitive';

export * from './isSymbolObject';

export * from './isSymbol';

export * from './isNull';

export * from './isUndefined';

export * from './isNil';

export * from './isBooleanPrimitive';

export * from './isBooleanObject';

export * from './isBoolean';

export * from './isBigIntPrimitive';

export * from './isBigIntObject';

export * from './isBigInt';

export * from './isArray';

export * from './isArrayLike';

export * from './isArrayBuffer';

export * from './isObject';

export * from './isObjectLike';

export * from './isPlainObject';

export * from './isElement';

export * from './isDate';

export * from './isSet';

export * from './isMap';

export * from './isFunction';

export * from './isRegExp';

export * from './isEmpty';
