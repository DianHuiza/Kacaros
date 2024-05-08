import React, { JSX, useCallback, useState } from 'react'
import useClickOut from '../hooks/useClickOut'

type Props = {
  children: React.ReactNode
  trigger: JSX.Element
}

const Dropdown: React.FC<Props> = ({ children, trigger }) => {
  const [show, setShow] = useState<boolean>(false)
  const callback = useCallback(() => setShow(false), [])
  const Dref = useClickOut(callback)
  const clickHandler = () => {
    setShow(curr => {
      console.log(curr)
      return !curr
    })
  }

  return (
    <div className=' relative' ref={Dref} onClick={clickHandler}>
      {trigger}
      <div className={`${!show ? 'hidden' : 'block'} absolute right-2 mt-5 rounded-lg bg-black`}>
        {children}
        Mondongo 
      </div>
    </div>
  )
}

export default Dropdown
