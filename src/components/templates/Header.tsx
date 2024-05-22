import { useState } from 'react'
import { Adjustmentsv, ArrowLeft, SearchIcon } from '../../assets/icons'
import { useClickOut } from '../../hooks'
import { Category, UserDropdown, Filters } from '..'

export const Header = () => {
  const [searching, setSearching] = useState<boolean>(false)
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const ref = useClickOut(() => { setShowFilters(false) })

  return (
    <header ref={ref} className=' fixed w-full px-3 bg-jet text-white'>
      <div className=' flex items-center py-2 h-16 shadow-md'>
        <div className={`${searching ? ' hidden' : ''} size-full flex justify-between items-center`}>
          <div><h1 className=' text-2xl font-bold'>Kacaros</h1></div>
          <div className=' flex gap-2 items-center'>
            <button onClick={() => { setSearching(true) }} className=' bg-jet-300 p-2 rounded-full'><SearchIcon className='size-5' /></button>
            <Category />
            <UserDropdown />
          </div>
        </div>
        <div className={`${!searching ? ' hidden' : ''} size-full flex justify-center items-center gap-3`}>
          <button onClick={() => { setSearching(false) }} className=' bg-neutral-900 p-1 rounded-full'><ArrowLeft /></button>
          <form className=' flex flex-1 max-w- items-center border border-zinc-300 rounded-3xl py-1 px-2' action='' method='post'>
            <input className=' flex-1 bg-inherit focus:bg-inherit focus:outline-none' type='text' id='search' name='search' />
            <button onClick={(e) => { e.preventDefault() }} className=' transition-all duration-200 hover:bg-jet-300 rounded-full p-1'><SearchIcon /></button>
          </form>
          <button onClick={() => { setShowFilters(curr => !curr) }} className=' bg-neutral-900 p-2 rounded-full'><Adjustmentsv className='size-5' /></button>
        </div>
      </div>
      {showFilters && <Filters />}
    </header>
  )
}
