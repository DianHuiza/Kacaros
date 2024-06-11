import { MovieSearchResult } from '../types'

export async function MovieSearchFetcher (search: string, pageParam:number): Promise<MovieSearchResult | undefined> {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${pageParam}&api_key=${import.meta.env.VITE_API_KEY}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`)
    }
    const jsonData = await response.json() as MovieSearchResult
    if (jsonData.total_pages <= 0) {
      throw new Error('Search Not Found')
    }
    console.log(jsonData)
    return jsonData
  } catch (error:unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
