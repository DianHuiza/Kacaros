import React from 'react'
import { ArrowLeft, SearchIcon, Adjustmentsv } from '../../assets/icons'
import { useNavigate } from 'react-router-dom'

type Props = {
  show: boolean
  exitFn: () => void
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchBar: React.FC<Props> = ({ show, exitFn, setShowFilters }) => {
  const navigate = useNavigate()
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const search = formData.get('search')
    navigate(`/search/${search}`)
  }

  return (
    <div className={`${!show ? ' hidden' : 'flex'} w-full sm:flex sm:w-auto  justify-center items-center gap-3`}>
      <button onClick={exitFn} className=' bg-neutral-900 p-1 rounded-full sm:hidden'><ArrowLeft /></button>
      <form onSubmit={onSubmitHandler} className=' flex flex-1 max-w- items-center border border-zinc-300 rounded-3xl py-1 px-4' action='' method='post'>
        <input className=' flex-1 bg-inherit focus:bg-inherit focus:outline-none' type='text' id='search' name='search' />
        <button className=' transition-all duration-200 hover:bg-jet-300 rounded-full p-1'><SearchIcon /></button>
      </form>
      <button onClick={() => { setShowFilters(curr => !curr) }} className=' bg-neutral-900 p-2 rounded-full'><Adjustmentsv className='size-5' /></button>
    </div>
  )
}
