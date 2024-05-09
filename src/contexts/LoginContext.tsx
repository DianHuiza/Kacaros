import React, { createContext, useRef, useState } from 'react'

interface LoginContextType {
  isLoged: boolean
  authToken: string
}

type Props = {
  children: React.ReactNode
}

export const LoginContext = createContext<LoginContextType | null>(null)

export const LoginProvider:React.FC<Props> = ({ children }) => {
  const [isLoged] = useState<boolean>(false)
  const authToken = useRef<string>('')
  return (
    <LoginContext.Provider value={{ isLoged, authToken: authToken.current }}>
      {children}
    </LoginContext.Provider>
  )
}
