import { useState } from 'react'

const iniciales = [
  { id: 1, texto: 'Repasar useState', hecha: true },
  { id: 2, texto: 'Hacer la lista de tareas', hecha: false },
]

function Ejercicio3() {
  const [tareas, setTareas] = useState(iniciales)
  const [texto, setTexto] = useState('')
  const [filtro, setFiltro] = useState('Todas')

  function agregar(e) {
    e.preventDefault()
    if (!texto.trim()) return
    setTareas([...tareas, { id: Date.now(), texto: texto.trim(), hecha: false }])
    setTexto('')
  }

  function alternar(id) {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)))
  }

  function borrar(id) {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  const visibles = tareas.filter((t) => {
    if (filtro === 'Pendientes') return !t.hecha
    if (filtro === 'Hechas') return t.hecha
    return true
  })
  const pendientes = tareas.filter((t) => !t.hecha).length

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-3 text-2xl font-bold">📝 Mis tareas</h2>

      <form className="flex gap-2" onSubmit={agregar}>
        <input
          className="flex-1 rounded-lg border px-3 py-2"
          placeholder="Nueva tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="rounded-lg bg-sky-500 px-4 font-semibold text-white">Agregar</button>
      </form>

      <div className="my-3 flex gap-2 text-sm">
        {['Todas', 'Pendientes', 'Hechas'].map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`rounded-full px-3 py-1 ${filtro === f ? 'bg-sky-500 text-white' : 'bg-slate-100'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {visibles.length === 0 ? (
        <p className="py-6 text-center text-slate-500">🎉 Nada por acá</p>
      ) : (
        <ul className="space-y-2">
          {visibles.map((t) => (
            <li key={t.id} className="flex items-center gap-2 rounded-lg border px-3 py-2">
              <span
                onClick={() => alternar(t.id)}
                className={`flex-1 cursor-pointer ${t.hecha ? 'text-slate-400 line-through' : ''}`}
              >
                {t.hecha ? '✅' : '⬜'} {t.texto}
              </span>
              <button onClick={() => borrar(t.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-3 text-sm text-slate-500">{pendientes} pendientes</p>
    </div>
  )
}

export default Ejercicio3
