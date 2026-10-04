import { Link } from 'react-router'
import { useFavoritos } from '../context/FavoritosContext'

export const imagenPokemon = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

function PokemonCard({ nombre, id }) {
  const { esFavorito } = useFavoritos()

  return (
    <Link
      to={`/pokemon/${nombre}`}
      className="relative rounded-xl bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      {esFavorito(id) && <span className="absolute top-2 right-2">❤️</span>}
      <img src={imagenPokemon(id)} alt={nombre} loading="lazy" className="mx-auto aspect-square w-full" />
      <p className="text-xs text-slate-400">#{String(id).padStart(3, '0')}</p>
      <p className="font-semibold capitalize">{nombre}</p>
    </Link>
  )
}

export default PokemonCard
