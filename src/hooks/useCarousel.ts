import { useState, useRef, useEffect, useCallback } from 'react'

export function useCarousel (autoSlide: boolean, timeOut: number, itemsLength: number) {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const slideTimer = useRef<number | null>(null)

  const nextItem = useCallback(() => {
    if (autoSlide && slideTimer.current) {
      clearInterval(slideTimer.current)
      slideTimer.current = setInterval(() => {
        nextItem()
      }, timeOut)
    }
    setCurrentItem(curr => curr + 1 >= itemsLength ? 0 : curr + 1)
  }, [slideTimer.current])

  const prevItem = useCallback(() => {
    if (autoSlide && slideTimer.current) {
      clearInterval(slideTimer.current)
      slideTimer.current = setInterval(() => {
        nextItem()
      }, timeOut)
    }
    setCurrentItem(curr => curr - 1 <= 0 ? itemsLength - 1 : curr - 1)
  }, [slideTimer.current])

  useEffect(() => {
    if (autoSlide) {
      slideTimer.current = setInterval(() => {
        nextItem()
      }, timeOut)
    }
    return () => {
      if (slideTimer.current != null) {
        clearInterval(slideTimer.current)
      }
    }
  }, [autoSlide, nextItem, timeOut])

  return { currentItem, setCurrentItem, nextItem, prevItem }
}
