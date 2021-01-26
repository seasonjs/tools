function getType(value: any) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]'
    }
    return toString.call(value);
}

/**
 * 判断类型是否是null或者是undefined
 * @param value
 */
function isNil(value: null | undefined | any) {
    return value == null
}

/**
 * 判断类型是否是null或者是undefined
 * @param value
 */
function isNull(value: null | any) {
    return value === null
}

/**
 * 判断类型是否是Object并且非空，function并非Object，这里需要注意
 * @param value
 */
function isObject(value: null | any) {
    return typeof value === 'object' && value !== null
}

/**
 * 判断类型是否是function并且非空，由于class 是特殊的function 或者理解为构造函数，所以也会被检查为function、
 * @param value
 */
function isFunction(value: any) {
    return typeof value === 'function'
}

const type = {
    isNil,
    isNull,
    isObject,
    isFunction,
    getType,
}
export default type;
