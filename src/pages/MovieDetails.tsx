import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { movieDetailFetcher } from '../services/movieDetailFetcher'

export const MovieDetails = () => {
  const { id } = useParams()
  const { data, isError, isLoading } = useQuery({
    queryKey: ['movieDetail', id],
    queryFn: async () => { return await movieDetailFetcher(id ?? '') }
  })
  return (
    <>
      {data?.original_title}
      {isError && <p>An Error Occurred</p>}
      {isLoading && <p>Loading</p>}
    </>
  )
}
