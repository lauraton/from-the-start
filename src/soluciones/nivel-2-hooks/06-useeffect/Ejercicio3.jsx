import { useEffect, useState } from 'react'

const puntito = { Alive: '🟢', Dead: '🔴', unknown: '⚪' }

function Ejercicio3() {
  const [personajes, setPersonajes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function cargar() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character', {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('No se pudo cargar')
        const data = await response.json()
        setPersonajes(data.results)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        // si se canceló (el componente se desmontó), no tocamos el estado
        if (!controller.signal.aborted) setCargando(false)
      }
    }

    cargar()
    return () => controller.abort()
  }, [])

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">🛸 Personajes</h2>
      {cargando && <p>Cargando personajes... ⏳</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {personajes.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-xl bg-slate-800 text-white">
            <img src={p.image} alt={p.name} className="w-full" />
            <div className="p-3">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-sm text-slate-300">
                {puntito[p.status]} {p.status} · {p.species}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Ejercicio3
