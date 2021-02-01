// https://github.com/mobxjs/mobx/blob/ddf99789daebc6a891c930bf77df132d532e090f/packages/mobx-react-lite/src/utils/utils.ts#L5

import {useCallback, useState} from "react"

const EMPTY_ARRAY: any[] = []

export default function useForceUpdate() {
    const [, setTick] = useState(0)

    return useCallback(() => {
        setTick(tick => tick + 1)
    }, EMPTY_ARRAY)
}

