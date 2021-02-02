// https://github.com/mobxjs/mobx/blob/ddf99789daebc6a891c930bf77df132d532e090f/packages/mobx-react-lite/src/utils/utils.ts#L5

import {useCallback, useState} from "react"

/**
 *  强制更新UI
 *  @return forceUpdate 返回刷新实例函数
 */
export default function useForceUpdate() {
    const [, setTick] = useState(0)
    return useCallback(() => {
        setTick(tick => tick + 1)
    }, [])
}

