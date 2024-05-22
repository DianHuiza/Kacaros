import { useCallback, useRef } from 'react'

export function useDebounce<T extends any[]> (debounce: (...args: T) => void, timeout = 300) {
  const timerRef = useRef<number | null>(null)
  
  const debouncedFn = useCallback((...args: T) => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      debounce(...args)
    }, timeout)
  }, [debounce, timeout])

  return { debouncedFn }
}
