import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'
import { LoginButton, SignUpButton, UserButton, Dropdown } from '../'

export const UserDropdown: React.FC = () => {
  const loginData = useContext(LoginContext)
  if (loginData == null) {
    throw new Error('useContext must be used within a Provider')
  }
  const { isLoged, userData } = loginData
  return (
    <Dropdown trigger={<UserButton label={isLoged ? userData.name : 'Guess Secion'} />}>
      {isLoged
        ? (
          <>
            
          </>
          )
        : (
          <>
            <LoginButton />
            <SignUpButton />
          </>
          )}
    </Dropdown>
  )
}
