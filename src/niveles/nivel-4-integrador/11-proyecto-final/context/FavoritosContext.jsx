// TODO etapa 6:
//  - const FavoritosContext = createContext(null)
//  - FavoritosProvider: estado favoritos = [] (array de { id, nombre })
//      alternarFavorito(pokemon): si está, lo saca; si no, lo agrega
//      esFavorito(id): true/false
//  - useFavoritos(): useContext(FavoritosContext)

export function FavoritosProvider({ children }) {
  return children
}

export function useFavoritos() {
  return { favoritos: [], alternarFavorito: () => {}, esFavorito: () => false }
}
