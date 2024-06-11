import React, { createContext, useRef } from 'react'
interface MultiFiltersType {
  include_adult: boolean
  language: string
  primary_release_year: string
  region: string
  year: string
}

type Props = {
  children: React.ReactNode
}

export const MultiFiltersContext = createContext<MultiFiltersType | null>(null)

export const MultiFiltersProvider:React.FC<Props> = ({ children }) => {
  const filters = useRef<MultiFiltersType>({
    include_adult: false,
    language: '',
    primary_release_year: '',
    region: '',
    year: ''
  })
  
  return (
    <MultiFiltersContext.Provider value={filters.current}>
      {children}
    </MultiFiltersContext.Provider>
  )
}
