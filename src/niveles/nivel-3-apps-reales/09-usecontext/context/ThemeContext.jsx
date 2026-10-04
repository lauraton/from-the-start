// TODO (Ejercicio 1)
// 1. Creá el contexto: const ThemeContext = createContext(null)
// 2. ThemeProvider({ children }): un estado "tema" ('claro' | 'oscuro') y una función alternarTema.
//    Devuelve <ThemeContext value={{ tema, alternarTema }}>{children}</ThemeContext>
// 3. useTheme(): devuelve useContext(ThemeContext)

export function ThemeProvider({ children }) {
  return children
}

export function useTheme() {
  return { tema: 'claro', alternarTema: () => {} }
}
