import { UserIcon } from '../../assets/icons'
import React from 'react'

type Props = {
  label: string
}

export const UserButton: React.FC<Props> = ({ label }) => {
  return (
    <button className=' bg-inherit rounded-3xl border border-white-700 flex items-center min-w-max p-1'>
      <UserIcon className='size-6' />
      <span className=' max-w-20 truncate text-start px-1 mr-1'>{label}</span>
    </button>
  )
}
