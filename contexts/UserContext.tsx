import React, { useState, useEffect, useContext, createContext } from 'react'
import { auth } from '../firebase/clientApp'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}

function useUserContext(): UserContext {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }
  return context
}
