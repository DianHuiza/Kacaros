import { Result } from '../../types'
import React from 'react'
import { formatImgUrl } from '../../utils'
import { useNavigate } from 'react-router-dom'

type Props = {
  movie: Result
}

export const MovieCard:React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(`/movie/${movie.id}`)
  }
  return (
    <div onClick={onClickHandler} className=' rounded-lg overflow-hidden shadow bg-jet'>
      <div className=' relative'>
        <img className='w-full aspect-video' src={formatImgUrl('300', movie.backdrop_path)} alt={movie.title} />
        <span className=' absolute bottom-2 right-2 bg-jet size-10 py-2 text-center text-white text-md font-bold rounded-full'>
          {Math.round(movie.vote_average * 10)}
          <span className=' text-xs'>%</span>
        </span>
      </div>
      <div className='px-3'>
        <p className=' font-semibold max-w-full truncate'>{movie.title}</p>
      </div>
    </div>
  )
}
