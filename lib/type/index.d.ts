declare function getType(value: any): string;
/**
 * 判断类型是否是null或者是undefined
 * @param value
 */
declare function isNil(value: null | undefined | any): boolean;
/**
 * 判断类型是否是null或者是undefined
 * @param value
 */
declare function isNull(value: null | any): boolean;
/**
 * 判断类型是否是Object并且非空，function并非Object，这里需要注意
 * @param value
 */
declare function isObject(value: null | any): boolean;
/**
 * 判断类型是否是function并且非空，由于class 是特殊的function 或者理解为构造函数，所以也会被检查为function、
 * @param value
 */
declare function isFunction(value: any): boolean;
declare const typeCheck: {
    isNil: typeof isNil;
    isNull: typeof isNull;
    isObject: typeof isObject;
    isFunction: typeof isFunction;
    getType: typeof getType;
};
export default typeCheck;
