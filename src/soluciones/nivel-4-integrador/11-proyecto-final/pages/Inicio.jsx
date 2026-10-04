import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import PokemonCard from '../components/PokemonCard'

const idDesdeUrl = (url) => Number(url.split('/').filter(Boolean).pop())

function Inicio() {
  const { data, cargando, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const [busqueda, setBusqueda] = useState('')

  if (cargando) return <p>Cargando Pokémon... ⏳</p>
  if (error) return <p className="text-red-600">Error: {error}</p>

  const filtrados = data.results.filter((p) => p.name.includes(busqueda.toLowerCase().trim()))

  return (
    <div>
      <input
        className="mb-4 w-full rounded-full border px-4 py-2 shadow-sm"
        placeholder="🔎 Buscar Pokémon..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      {filtrados.length === 0 ? (
        <p className="py-8 text-center">No se encontró ningún Pokémon 😢</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {filtrados.map((p) => (
            <PokemonCard key={p.name} nombre={p.name} id={idDesdeUrl(p.url)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Inicio
