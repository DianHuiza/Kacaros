import { BarsIcon } from '../../assets/icons'
import React from 'react'
import { Dropdown, DropdownItem } from '../'

export const Category: React.FC = () => {
  return (
    <div className='flex items-center justify-center gap-1'>
      <Dropdown trigger={<button className='bg-jet-300 rounded-full p-2'><BarsIcon className='size-5' /></button>}>
        <DropdownItem>
          Peliculas
        </DropdownItem>
        <DropdownItem>
          Series
        </DropdownItem>
        <DropdownItem>
          TV Show
        </DropdownItem>
      </Dropdown>
    </div>
  )
}
