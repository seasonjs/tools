/**
 * @description.zh_CN 检查 value 是否是 类对象（父类是Object）
 * @Notice ObjectLike 中不会包含function但是可能会包含arrays,regexp,new Number(0), 以及new String('')等能被typeof 为function的对象
 * @param value
 */
export function isObjectLike(value: any) {
  return typeof value === 'object' && value !== null;
}
