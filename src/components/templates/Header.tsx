import { useState } from 'react'
import { SearchIcon } from '../../assets/icons'
import { useClickOut } from '../../hooks'
import { UserDropdown, Filters, SearchBar } from '..'

export const Header = () => {
  const [searching, setSearching] = useState<boolean>(false)
  const [showFilters, setShowFilters] = useState<boolean>(false)
  
  const clickOutHandler = () => { 
    if (showFilters) {
      setShowFilters(false)
    }
    if (searching) {
      setSearching(false)
    }
  }
  
  const ref = useClickOut(clickOutHandler)

  return (
    <header ref={ref} className=' fixed w-full bg-jet text-white z-50'>
      <div className=' flex items-center py-2 h-16 shadow-md px-3 justify-between'>
        <div className={`${searching ? 'hidden' : ''} sm:block`}><h1 className=' text-2xl font-bold'>Kacaros</h1></div>
        <SearchBar show={searching} exitFn={() => { setSearching(false) }} setShowFilters={setShowFilters} />
        <div className={`${searching ? 'hidden' : ''} sm:flex gap-2 items-center`}>
          <button onClick={() => { setSearching(true) }} className=' bg-jet-300 p-2 rounded-full sm:hidden'>
            <SearchIcon className='size-5' />
          </button>
          <UserDropdown />
        </div>
      </div>
      {showFilters && <Filters />}
    </header>
  )
}
