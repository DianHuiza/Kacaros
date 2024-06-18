import React, { Children, useMemo } from 'react'
import { useCarousel } from '../../hooks'
import { CarouselContext } from '../../contexts'
import { ArrowLeft, ArrowRight } from '../../assets/icons'

type Props = {
  children: React.ReactNode[]
  autoSlide: boolean
}

export const Caroulsel: React.FC<Props> = ({ children, autoSlide }) => {
  const childrenLength = useMemo(() => Children.count(children), [children])
  const { currentItem, setCurrentItem, nextItem, prevItem } = useCarousel(autoSlide, 5000, childrenLength)
  return (
    <CarouselContext.Provider value={currentItem}>
      <div className=' flex flex-row overflow-hidden relative max-h-max max-w-screen-xl mx-auto aspect-video'>
        {children}
        <div className=' absolute bottom-0 w-full flex items-center justify-center gap-1 pb-4'>
          {Children.map(children, (_, index) => (
            <span
              key={`moveItem${index}`}
              className={`size-3 rounded-full ${index === currentItem ? 'bg-gray-200' : 'bg-gray-500'}`}
              onClick={() => { setCurrentItem(index) }}
            />
          ))}
        </div>
        <div className=' absolute size-full flex justify-between items-center px-3'>
          <button onClick={prevItem} className='p-2 rounded-full bg-jet-100'><ArrowLeft /></button>
          <button onClick={nextItem} className='p-2 rounded-full bg-jet'><ArrowRight /></button>
        </div>
      </div>

    </CarouselContext.Provider>
  )
}
