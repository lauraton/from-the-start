import { Link } from 'react-router'
import { useFavoritos } from '../context/FavoritosContext'
import PokemonCard from '../components/PokemonCard'

function Favoritos() {
  const { favoritos } = useFavoritos()

  if (favoritos.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-lg">Todavía no tenés favoritos 🤍</p>
        <Link to="/" className="text-red-600 underline">
          Ir a buscar Pokémon
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">❤️ Mis favoritos</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {favoritos.map((f) => (
          <PokemonCard key={f.id} nombre={f.nombre} id={f.id} />
        ))}
      </div>
    </div>
  )
}

export default Favoritos
