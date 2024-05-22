import React, { createContext, useState } from 'react'

interface SearchType {
  search: string
  setSearch: (newState:string) => void
}

type Props = {
  children: React.ReactNode
}

export const SearchContext = createContext<SearchType | null>(null)

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = useState<string>('')
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
