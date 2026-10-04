import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro')
  const alternarTema = () => setTema((t) => (t === 'claro' ? 'oscuro' : 'claro'))

  return <ThemeContext value={{ tema, alternarTema }}>{children}</ThemeContext>
}

export function useTheme() {
  return useContext(ThemeContext)
}
