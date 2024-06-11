import { useInfiniteQuery } from '@tanstack/react-query'
import { MovieSearchFetcher } from '../../services'
import { MovieCard } from '..'
import { useObserver } from '../../hooks'
import { useParams } from 'react-router-dom'

export const SearchResult = () => {
  const { search = '' } = useParams()
  
  const { data, isFetching, isError, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['searchResult', search],
    queryFn: ({ pageParam }) => MovieSearchFetcher(search, pageParam), 
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.total_results) return null
      return lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null
    }
  })
  const movies = data?.pages.flatMap(page => page ? page.results : [])
  
  const observerHandler = () => {
    if (!isFetching && hasNextPage) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchNextPage()
    }
  }
  const { observerRef } = useObserver<HTMLBRElement>(observerHandler)

  return (
    <div className=' py-20'>
      <div className=' grid auto-grid gap-2 max-w-screen-xl mx-auto'>
        {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      {isFetching && <p>...loading</p>}
      {isError && <p>An error occurred</p>}
      <br ref={observerRef} />
    </div>
  )
}
