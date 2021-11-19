/**
 * @description.zh_CN 检查 value 是否为 Object并且非null类型，
 * @Notice Object 中会包含function， arrays,regexp,new Number(0), 以及 new String('')等能被typeof 为function的对象
 * @param value
 */
export function isObject(value: null | any) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
