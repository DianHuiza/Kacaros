export function formatApiUrl (endpoint: string, params: string = '') { 
  return `${import.meta.env.VITE_BACKEND_URL}${endpoint}?api_key=${import.meta.env.VITE_API_KEY}${params}` 
}
