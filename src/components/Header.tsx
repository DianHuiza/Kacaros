import { useState } from 'react'
import Adjustmentsv from '../assets/icons/Adjustmentsv'
import ArrowLeft from '../assets/icons/ArrowLeft'
import SearchIcon from '../assets/icons/SearchIcon'
import Dropdown from './Dropdown'
import UserButton from './UserButton'

const Header = () => {
  const [searching, setSearching] = useState<boolean>(false)
  
  return (
    <header className='flex items-center fixed w-full h-16 px-3 bg-jet text-white py-2'>
      <div className={`${searching ? ' hidden' : ''} size-full flex justify-between items-center`}>
        <div><h1 className=' text-2xl font-bold'>Kacaros</h1></div>
        <div className=' flex gap-2 items-center'>
          <button onClick={() => setSearching(true)} className=' bg-neutral-900 p-2 rounded-full'><SearchIcon className='size-5' /></button>
          <Dropdown trigger={<UserButton />}>
            <h1>Mondongo</h1>
            <h1>ASD</h1>
          </Dropdown>
        </div>
      </div>
      <div className={`${!searching ? ' hidden' : ''} size-full flex justify-center items-center gap-3`}>
        <button onClick={() => setSearching(false)} className=' bg-neutral-900 p-1 rounded-full'><ArrowLeft /></button>
        <form action='' method='post'>
          <input type='text' id='search' name='search' />
          <button><SearchIcon /></button>
        </form>
        <button className=' bg-neutral-900 p-2 rounded-full'><Adjustmentsv className='size-5' /></button>
      </div>
    </header>
  )
}

export default Header
