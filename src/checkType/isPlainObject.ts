import { getType } from './getType';
import { isObjectLike } from './isObjectLike';

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
