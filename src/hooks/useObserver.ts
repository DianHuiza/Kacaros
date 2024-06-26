import { useEffect, useRef } from 'react'
import { Callback } from '../types'

export function useObserver <T extends HTMLElement> (callback: Callback) {
  const observerRef = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback()
      }
    })
    if (observerRef.current != null) {
      observer.observe(observerRef.current)
    }
    return () => { observer.disconnect() }
  }, [callback])

  return { observerRef }
}
