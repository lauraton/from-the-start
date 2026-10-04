import { createContext, useContext, useState } from 'react'

// El contexto del apunte (Módulo 11)
const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState({ id: 1, name: 'John Doe' })

  return <UserContext value={{ user, setUser }}>{children}</UserContext>
}

export function useGlobalContext() {
  return useContext(UserContext)
}
