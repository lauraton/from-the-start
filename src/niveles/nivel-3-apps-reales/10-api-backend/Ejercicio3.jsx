/**
 * ⭐⭐⭐ CRUD completo: editar (PUT) y borrar (DELETE)
 *
 * (Necesitás  npm run api  corriendo)
 *
 * La lista ya carga. Agregá a cada fila:
 *
 *   BORRAR
 *   1. Botón 🗑️. Al tocarlo, en vez de borrar directo, la fila muestra "¿Seguro? Sí / No"
 *      (guardá en un estado el id del usuario que se está por borrar: confirmandoId).
 *   2. "Sí" → fetch(`${API}/${id}`, { method: 'DELETE' }) y si res.ok → sacarlo de la lista (filter).
 *
 *   EDITAR ROL
 *   3. El rol es un <select>. Al cambiarlo → PUT a `${API}/${id}` con body { rol: nuevoRol }.
 *   4. Con la respuesta del server, reemplazá ese usuario en la lista (map).
 *   5. Mientras se guarda, mostrá "💾" al lado de esa fila (estado guardandoId).
 *
 *   ⭐ EXTRA: editar el nombre con doble click (input que guarda al apretar Enter).
 *
 * Mirá la terminal del backend: vas a ver llegar los DELETE y PUT.
 * Si cortás y volvés a prender el server, los datos vuelven a los originales.
 */
import { useEffect, useState } from 'react'

const API = 'http://localhost:3000/api/users'

function Ejercicio3() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  // TODO: confirmandoId, guardandoId

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => setError('No hay conexión. ¿Prendiste npm run api?'))
  }, [])

  // TODO: async function borrar(id) { ... }
  // TODO: async function cambiarRol(id, rol) { ... }

  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">🛠️ Administrar usuarios</h2>
      {error && <p className="text-red-600">{error}</p>}
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.id} className="flex items-center gap-3 rounded-lg border px-3 py-2">
            <span className="flex-1 font-semibold">{u.name}</span>
            <select className="rounded border px-2 py-1 text-sm" value={u.rol} onChange={() => {}}>
              <option value="lector">lector</option>
              <option value="editor">editor</option>
              <option value="admin">admin</option>
            </select>
            <button>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio3
