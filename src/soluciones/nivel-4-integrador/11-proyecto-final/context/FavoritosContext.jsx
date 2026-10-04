import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const FavoritosContext = createContext(null)

export function FavoritosProvider({ children }) {
  // Extra: con useLocalStorage los favoritos sobreviven al F5
  const [favoritos, setFavoritos] = useLocalStorage('pokedex:favoritos', [])

  const esFavorito = (id) => favoritos.some((f) => f.id === id)

  function alternarFavorito(pokemon) {
    if (esFavorito(pokemon.id)) {
      setFavoritos(favoritos.filter((f) => f.id !== pokemon.id))
    } else {
      setFavoritos([...favoritos, pokemon])
    }
  }

  return (
    <FavoritosContext value={{ favoritos, alternarFavorito, esFavorito }}>{children}</FavoritosContext>
  )
}

export function useFavoritos() {
  return useContext(FavoritosContext)
}
