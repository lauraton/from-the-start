/**
 * ⭐⭐⭐ useLocalStorage: notas que sobreviven al F5
 *
 * localStorage guarda texto en el navegador y no se borra al recargar.
 *   localStorage.setItem('clave', JSON.stringify(valor))
 *   JSON.parse(localStorage.getItem('clave'))      → null si no existe
 *
 *   1. Creá hooks/useLocalStorage.js:
 *        function useLocalStorage(clave, valorInicial) → [valor, setValor]   (igual que useState)
 *      - El valor inicial de useState se lee de localStorage (si no hay nada, usa valorInicial).
 *        Tip: pasale una FUNCIÓN a useState para que lea solo la primera vez:
 *             useState(() => { ... })
 *      - Un useEffect con [clave, valor] que guarde en localStorage cada vez que cambia.
 *   2. Reemplazá el useState de abajo por useLocalStorage('curso:notas', []).
 *   3. Agregá algunas notas, apretá F5... ¡siguen ahí! 🎉
 *   4. Agregá un botón para borrar cada nota.
 */
import { useState } from 'react'

function Ejercicio4() {
  const [notas, setNotas] = useState([]) // TODO: cambiar por useLocalStorage
  const [texto, setTexto] = useState('')

  function agregar(e) {
    e.preventDefault()
    if (!texto.trim()) return
    setNotas([...notas, { id: Date.now(), texto }])
    setTexto('')
  }

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
          <div key={n.id} className="rotate-1 rounded bg-yellow-100 p-3 shadow even:-rotate-1">
            {n.texto}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ejercicio4
