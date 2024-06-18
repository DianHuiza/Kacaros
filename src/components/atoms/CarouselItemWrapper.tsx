import React, { useContext } from 'react'
import { CarouselContext } from '../../contexts'

interface CarouseItemWrapperProps {
 children: React.ReactNode 
}
 
export const CarouseItemWrapper: React.FC<CarouseItemWrapperProps> = ({ children }) => {
  const currentItem = useContext(CarouselContext)
  return ( 
    <div style={{ transform: `translate(-${currentItem * 100}%)` }} className=' size-full shrink-0 transition-transform duration-500 ease-in-out'>
      {children}
    </div>
  )
}
