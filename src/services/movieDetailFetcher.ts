import { MovieDetails } from '../types'
import { formatApiUrl } from '../utils'

export async function movieDetailFetcher (id:string) {
  const url = formatApiUrl(`/movie/${id}`)
  
  try {
    const res = await fetch(url)
    
    if (!res.ok) throw new Error('Conexion Error')

    const json = await res.json() as MovieDetails
    return json
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}
