import React, { createContext, useRef, useState } from 'react'

type UserData = {
  name: string
  authToken: string
}
interface LoginContextType {
  isLoged: boolean
  userData: UserData
}

type Props = {
  children: React.ReactNode
}

export const LoginContext = createContext<LoginContextType | null>(null)

export const LoginProvider: React.FC<Props> = ({ children }) => {
  const [isLoged] = useState<boolean>(false)
  const authToken = useRef<string>('')
  
  return (
    <LoginContext.Provider
      value={{
        isLoged,
        userData: {
          name: 'Juan Garcia',
          authToken: authToken.current
        }
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
