import React from 'react'

type Props = {
  children: React.ReactNode
}
export const DropdownItem: React.FC<Props> = ({ children }) => {
  return (
    <div className=' px-1 border-b border-platinum-500 min-w-max'>
      {children}
    </div>
  )
}
