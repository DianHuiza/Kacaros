import { useEffect, useRef } from 'react'

export default function useClickOut (callback: () => void) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const clickHandler = (e:MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        callback()
        console.log('Mondongo')
      }
    }
    document.addEventListener('mousedown', clickHandler)

    return () => {
      document.removeEventListener('mousedown', clickHandler)
    }
  }, [callback])
  return ref
}
