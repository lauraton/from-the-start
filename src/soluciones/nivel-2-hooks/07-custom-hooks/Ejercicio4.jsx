import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function Ejercicio4() {
  const [notas, setNotas] = useLocalStorage('curso:notas', [])
  const [texto, setTexto] = useState('')

  function agregar(e) {
    e.preventDefault()
    if (!texto.trim()) return
    setNotas([...notas, { id: Date.now(), texto }])
    setTexto('')
  }

  const borrar = (id) => setNotas(notas.filter((n) => n.id !== id))

  return (
    <div className="max-w-md">
      <form onSubmit={agregar} className="flex gap-2">
        <input
          className="flex-1 rounded-lg border px-3 py-2"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribí una nota..."
        />
        <button className="rounded-lg bg-amber-400 px-4 font-semibold">📌 Pegar</button>
      </form>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {notas.map((n) => (
          <div key={n.id} className="relative rotate-1 rounded bg-yellow-100 p-3 shadow even:-rotate-1">
            {n.texto}
            <button className="absolute top-1 right-1 text-xs" onClick={() => borrar(n.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>
      {notas.length > 0 && <p className="mt-3 text-sm text-slate-500">Apretá F5: ¡tus notas siguen acá!</p>}
    </div>
  )
}

export default Ejercicio4
