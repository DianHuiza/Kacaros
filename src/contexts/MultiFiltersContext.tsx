import React, { createContext, useRef } from 'react'
interface MultiFiltersType {
  adult: boolean
  language: string
}

type Props = {
  children: React.ReactNode
}

export const MultiFiltersContext = createContext<MultiFiltersType | null>(null)

export const MultiFiltersProvider:React.FC<Props> = ({ children }) => {
  const filters = useRef<MultiFiltersType>({
    adult: false,
    language: 'enUS'
  })
  return (
    <MultiFiltersContext.Provider value={filters.current}>
      {children}
    </MultiFiltersContext.Provider>
  )
}
