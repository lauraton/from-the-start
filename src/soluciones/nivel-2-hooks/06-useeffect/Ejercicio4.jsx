import { useEffect, useState } from 'react'

function Ejercicio4() {
  const [texto, setTexto] = useState('')
  const [busqueda, setBusqueda] = useState('pikachu')
  const [pokemon, setPokemon] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!busqueda) return
    const controller = new AbortController()

    async function buscar() {
      setCargando(true)
      setError(null)
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`, {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error('No existe ese Pokémon 😢')
        setPokemon(await res.json())
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setPokemon(null)
        }
      } finally {
        // si se canceló (el componente se desmontó), no tocamos el estado
        if (!controller.signal.aborted) setCargando(false)
      }
    }

    buscar()
    return () => controller.abort()
  }, [busqueda])

  function handleSubmit(e) {
    e.preventDefault()
    setBusqueda(texto.toLowerCase().trim())
  }

  return (
    <div className="mx-auto max-w-md">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className="flex-1 rounded-lg border px-3 py-2"
          placeholder="pikachu, charmander, 25..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="rounded-lg bg-red-500 px-4 font-semibold text-white">Buscar</button>
      </form>

      {cargando && <p className="mt-4">Buscando... ⏳</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {pokemon && !cargando && (
        <article className="mt-4 rounded-2xl bg-gradient-to-b from-amber-100 to-white p-6 text-center shadow">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="mx-auto h-48"
          />
          <p className="text-slate-400">#{pokemon.id}</p>
          <h2 className="text-3xl font-bold capitalize">{pokemon.name}</h2>
          <div className="my-3 flex justify-center gap-2">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className="rounded-full bg-slate-800 px-3 py-0.5 text-sm text-white capitalize">
                {t.type.name}
              </span>
            ))}
          </div>
          <div className="space-y-1 text-left text-sm">
            {pokemon.stats.map((s) => (
              <div key={s.stat.name} className="flex items-center gap-2">
                <span className="w-32 capitalize">{s.stat.name}</span>
                <div className="h-2 flex-1 rounded bg-slate-200">
                  <div className="h-2 rounded bg-red-400" style={{ width: `${Math.min(s.base_stat / 2, 100)}%` }} />
                </div>
                <span className="w-8 text-right">{s.base_stat}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <button
              className="rounded bg-slate-200 px-3 py-1 disabled:opacity-40"
              disabled={pokemon.id <= 1}
              onClick={() => setBusqueda(String(pokemon.id - 1))}
            >
              ◀ Anterior
            </button>
            <button className="rounded bg-slate-200 px-3 py-1" onClick={() => setBusqueda(String(pokemon.id + 1))}>
              Siguiente ▶
            </button>
          </div>
        </article>
      )}
    </div>
  )
}

export default Ejercicio4
