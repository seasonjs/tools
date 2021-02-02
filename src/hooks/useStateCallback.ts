import { useState, useRef, useEffect, useCallback } from 'react'

const useStateCallback = (initialState: any) => {
  const [state, setState] = useState(initialState)
  const cbRef = useRef<any>(null)

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb
    setState(state)
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
