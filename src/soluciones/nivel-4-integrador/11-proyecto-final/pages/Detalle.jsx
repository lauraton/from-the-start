import { useNavigate, useParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import { useFavoritos } from '../context/FavoritosContext'

const fondos = {
  fire: 'from-orange-200',
  water: 'from-sky-200',
  grass: 'from-emerald-200',
  electric: 'from-yellow-200',
  psychic: 'from-pink-200',
  poison: 'from-purple-200',
  ground: 'from-amber-200',
  rock: 'from-stone-300',
  bug: 'from-lime-200',
  ghost: 'from-indigo-200',
  ice: 'from-cyan-100',
  dragon: 'from-violet-200',
  fighting: 'from-red-200',
  fairy: 'from-rose-200',
}

function Detalle() {
  const { nombre } = useParams()
  const navigate = useNavigate()
  const { data: pokemon, cargando, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
  const { esFavorito, alternarFavorito } = useFavoritos()

  if (cargando) return <p>Cargando... ⏳</p>
  if (error) return <p className="text-red-600">No se encontró "{nombre}" ({error})</p>

  const tipo = pokemon.types[0].type.name
  const favorito = esFavorito(pokemon.id)

  return (
    <article className={`mx-auto max-w-lg rounded-2xl bg-gradient-to-b ${fondos[tipo] ?? 'from-slate-200'} to-white p-6 shadow`}>
      <button className="text-sm text-slate-600" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="mx-auto h-56"
      />
      <p className="text-center text-slate-500">#{String(pokemon.id).padStart(3, '0')}</p>
      <h1 className="text-center text-4xl font-bold capitalize">{pokemon.name}</h1>

      <div className="my-3 flex justify-center gap-2">
        {pokemon.types.map((t) => (
          <span key={t.type.name} className="rounded-full bg-slate-800 px-3 py-0.5 text-sm text-white capitalize">
            {t.type.name}
          </span>
        ))}
      </div>
      <p className="text-center text-sm text-slate-600">
        Altura: {pokemon.height / 10} m · Peso: {pokemon.weight / 10} kg
      </p>

      <div className="my-4 space-y-1 text-sm">
        {pokemon.stats.map((s) => (
          <div key={s.stat.name} className="flex items-center gap-2">
            <span className="w-32 capitalize">{s.stat.name}</span>
            <div className="h-2 flex-1 rounded bg-slate-200">
              <div className="h-2 rounded bg-red-500" style={{ width: `${Math.min(s.base_stat / 1.5, 100)}%` }} />
            </div>
            <span className="w-8 text-right">{s.base_stat}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full rounded-lg py-2 font-semibold ${favorito ? 'bg-red-100 text-red-700' : 'bg-red-500 text-white'}`}
        onClick={() => alternarFavorito({ id: pokemon.id, nombre: pokemon.name })}
      >
        {favorito ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
      </button>

      <div className="mt-3 flex justify-between text-sm">
        <button disabled={pokemon.id <= 1} className="disabled:opacity-30" onClick={() => navigate(`/pokemon/${pokemon.id - 1}`)}>
          ◀ Anterior
        </button>
        <button onClick={() => navigate(`/pokemon/${pokemon.id + 1}`)}>Siguiente ▶</button>
      </div>
    </article>
  )
}

export default Detalle
