import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren,
} from 'react'
import { auth } from '../firebase/clientApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { User } from 'firebase/auth'

type Props = {
  user: User | null
}

type ContextProps = {
  user?: User | null
  loading?: boolean
  error?: Error
}

export const UserContext = createContext<ContextProps>({})

export function UserContextProvider({ children }: PropsWithChildren<Props>) {
  const [user, loading, error] = useAuthState(auth)
  const values = { user, loading, error }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }
  return context
}
