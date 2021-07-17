import { useState } from 'react';

/**
 *  @description 强制更新UI
 *  @link  https://github.com/mobxjs/mobx/blob/ddf99789daebc6a891c930bf77df132d532e090f/packages/mobx-react-lite/src/utils/utils.ts#L5 ForceUpdate 最初版本实现
 *  @link  https://github.com/mobxjs/mobx/pull/2983 更改ForceUpdate实现 ，移除useCallback,因为它不会提升性能，反而会发生无限触发的问题： [#2982](https://github.com/mobxjs/mobx/pull/2982)
 *  @return forceUpdate 返回刷新实例函数
 */
export function useForceUpdate() {
  const [, setState] = useState();
  return () => setState([] as any);
}
