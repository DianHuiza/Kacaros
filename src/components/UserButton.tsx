import UserIcon from '../assets/icons/UserIcon'

const UserButton = () => {
  return (
    <button className=' bg-inherit rounded-3xl border border-white-700 flex items-center min-w-max p-1'>
      <UserIcon />
      <span className=' w-20 truncate text-start px-1'>Usuario</span>
    </button>
  )
}

export default UserButton
