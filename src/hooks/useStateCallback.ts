import {useCallback, useEffect, useRef, useState} from 'react'

const useStateCallback = (initialState: any) => {
    const [state, setState] = useState(initialState)
    const cbRef = useRef<any>(null)

    const setStateCallback = useCallback((tState, cb) => {
        cbRef.current = cb
        setState(tState)
    }, [])

    useEffect(() => {
        if (cbRef.current) {
            cbRef.current(state)
            cbRef.current = null
        }
    }, [state])

    return [state, setStateCallback]
}

export default useStateCallback
