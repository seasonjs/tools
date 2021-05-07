/**
 * @description.zh-CN 找出两个数组不相同的元素的索引
 * @param arr1
 * @param arr2
 */
export function getDiffIndex<T>(arr1: T[], arr2: T[]): number[] {
  const res: number[] = [];
  if (arr1.length > arr2.length) {
    res.push(...findIndex(arr1, arr2));
  } else {
    res.push(...findIndex(arr2, arr1));
  }
  return res;
}

export function findIndex<T>(arr1: T[], arr2: T[]) {
  const res: number[] = [];
  arr1.forEach((el, ind) => {
    if (ind >= arr2.length) {
      res.push(ind);
    } else if (el !== arr2[ind]) {
      res.push(ind);
    }
  });
  return res;
}

/**
 * @description.zh-CN 判断数组长度是否为空
 */
export function arrayIsEmpty<T>(array: T[]) {
  return !array.length;
}

/**
 * @description.zh-CN 获取满足条件的索引
 * @param array
 * @param compareCondition
 */
export function getIndex<T>(
  array: T[],
  compareCondition: (curVal: any) => any,
) {
  const res: number[] = [];
  return array.reduce((preVal, curVal, curIdx) => {
    return compareCondition(curVal) ? [...preVal, curIdx] : preVal;
  }, res);
}

// https://github.com/react-hook-form/react-hook-form/blob/master/src/utils/insert.ts
/**
 * @description 数组插入
 * @param data 数组
 * @param index 索引
 * @param value 值
 */
export function insert<T>(
  data: T[],
  index: number,
  value?: T | T[],
): (T | undefined)[] {
  return [
    ...data.slice(0, index),
    ...(Array.isArray(value) ? value : [value || undefined]),
    ...data.slice(index),
  ];
}
