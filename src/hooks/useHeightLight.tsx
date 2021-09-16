import type { ReactElement } from 'react';
import React from 'react';
import { travelTree } from '@/tree';

/**
 * @description 单文本高亮
 * @param text
 * @param key
 */
export function keySingleRender(
  text: string | ReactElement,
  key: string | ReactElement,
) {
  // 特别注意！！！可能会出现react 对象
  if (key && text && typeof text === 'string' && typeof key === 'string') {
    const reg = new RegExp(key, 'gi');
    const result = text.replace(reg, (txt) => {
      return `<Fragment style='color:#0076ff'>${txt}</Fragment>`;
    });
    // 特别要注意这块可能会出现非法字符
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  }
  return text;
}

type dataItemProps = {
  content: any;
  children: dataItemProps[];
} & Record<string, any>;

/**
 * @description 系统高亮hook,如果需要定制可以使用keySingleRender
 * @param data 需要注意：data中必须要有content 与children,children可以为其他名称
 * @param keyword 要高亮的关键字
 * @param callback 树遍历的每一次回调
 * @param children 需要遍历的节点属性名
 * @return data 处理好的树形jsx对象
 */
export const useHeightLight = (
  data: dataItemProps,
  keyword:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  callback?: (arg0: Record<string, any>) => void,
  children = 'children',
) => {
  travelTree(
    data,
    (item) => {
      if (keyword) {
        const splitWord = keySingleRender(item.content, keyword);
        //eslint-disable-next-line  no-param-reassign
        item.content = <>{splitWord}</>;
      }
      if (callback) {
        callback(item);
      }
    },
    children,
  );
  return data;
};
// function travleTree(tree: any, keyword?: string) {
//   tree.forEach((item: Record<string, any>, index: any) => {
//     // 如果有要搜索的关键字
//     if (keyword) {
//       const splitWord = keySingleRender(item.content, keyword);
//       item.content = (
//         <>
//           {splitWord}
//         </>
//       );
//     }
//
//
//   });
//   return tree;
// }
