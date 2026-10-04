/**
 * ⭐⭐⭐ Crear usuarios (POST)
 *
 * (Necesitás  npm run api  corriendo)
 *
 * La lista ya funciona (GET). Te toca el formulario:
 *   1. Inputs controlados para name, email y rol (select con admin / editor / lector).
 *   2. Al enviar (onSubmit + preventDefault) hacé un POST a http://localhost:3000/api/users
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify({ name, email, rol })
 *   3. Mientras se envía: estado "enviando" = true → el botón dice "Guardando..." y está deshabilitado.
 *   4. Si el servidor responde mal (!res.ok): leé el JSON de la respuesta, que trae { error: '...' },
 *      y mostralo en rojo. (Probá mandar el form sin email: el server devuelve 400.)
 *   5. Si sale bien: agregá el usuario que devolvió el server a la lista (sin volver a pedir todo),
 *      limpiá el form y mostrá "✅ Usuario creado".
 */
import { useEffect, useState } from 'react'

const API = 'http://localhost:3000/api/users'

function Ejercicio2() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  // TODO: estados del formulario, enviando, errorForm, mensaje

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => setError('No hay conexión. ¿Prendiste npm run api?'))
  }, [])

  const input = 'w-full rounded-lg border px-3 py-2'

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form className="space-y-3 rounded-xl bg-slate-50 p-4">
        <h3 className="font-bold">➕ Nuevo usuario</h3>
        <input className={input} placeholder="Nombre" />
        <input className={input} placeholder="Email" />
        <select className={input}>
          <option value="lector">lector</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
        <button className="w-full rounded-lg bg-emerald-500 py-2 font-semibold text-white disabled:opacity-50">
          Guardar
        </button>
      </form>

      <div>
        <h3 className="mb-2 font-bold">👥 Usuarios ({users.length})</h3>
        {error && <p className="text-red-600">{error}</p>}
        <ul className="space-y-1">
          {users.map((u) => (
            <li key={u.id} className="rounded bg-white px-3 py-1 shadow-sm">
              {u.name} <span className="text-sm text-slate-400">({u.rol})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Ejercicio2
