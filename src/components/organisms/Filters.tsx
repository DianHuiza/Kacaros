import React from 'react'

export const Filters: React.FC = () => {
  const filters = { adult: 'asd', language: 'asd' }
  
  return (
    <div className='flex'>
      {filters.adult}
      {filters.language}
    </div>
  )
}
