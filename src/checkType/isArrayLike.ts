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
