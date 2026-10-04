import { useEffect, useState } from 'react'

const API = 'http://localhost:3000/api/users'

function Ejercicio3() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [confirmandoId, setConfirmandoId] = useState(null)
  const [guardandoId, setGuardandoId] = useState(null)
  const [editandoId, setEditandoId] = useState(null)
  const [nombreEditado, setNombreEditado] = useState('')

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => setError('No hay conexión. ¿Prendiste npm run api?'))
  }, [])

  async function borrar(id) {
    try {
      const res = await fetch(`${API}/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('No se pudo borrar')
      setUsers(users.filter((u) => u.id !== id))
    } catch (err) {
      setError(err.message)
    } finally {
      setConfirmandoId(null)
    }
  }

  async function actualizar(id, cambios) {
    setGuardandoId(id)
    try {
      const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cambios),
      })
      if (!res.ok) throw new Error('No se pudo guardar')
      const actualizado = await res.json()
      setUsers((actuales) => actuales.map((u) => (u.id === id ? actualizado : u)))
    } catch (err) {
      setError(err.message)
    } finally {
      setGuardandoId(null)
    }
  }

  function guardarNombre(e, id) {
    e.preventDefault()
    if (nombreEditado.trim()) actualizar(id, { name: nombreEditado.trim() })
    setEditandoId(null)
  }

  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">🛠️ Administrar usuarios</h2>
      {error && <p className="text-red-600">{error}</p>}
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.id} className="flex items-center gap-3 rounded-lg border px-3 py-2">
            {editandoId === u.id ? (
              <form className="flex-1" onSubmit={(e) => guardarNombre(e, u.id)}>
                <input
                  autoFocus
                  className="w-full rounded border px-2"
                  value={nombreEditado}
                  onChange={(e) => setNombreEditado(e.target.value)}
                  onBlur={() => setEditandoId(null)}
                />
              </form>
            ) : (
              <span
                className="flex-1 cursor-text font-semibold"
                title="Doble click para editar"
                onDoubleClick={() => {
                  setEditandoId(u.id)
                  setNombreEditado(u.name)
                }}
              >
                {u.name}
              </span>
            )}

            {guardandoId === u.id && <span>💾</span>}

            <select
              className="rounded border px-2 py-1 text-sm"
              value={u.rol}
              onChange={(e) => actualizar(u.id, { rol: e.target.value })}
            >
              <option value="lector">lector</option>
              <option value="editor">editor</option>
              <option value="admin">admin</option>
            </select>

            {confirmandoId === u.id ? (
              <span className="text-sm">
                ¿Seguro?{' '}
                <button className="font-bold text-red-600" onClick={() => borrar(u.id)}>
                  Sí
                </button>{' '}
                /{' '}
                <button className="text-slate-500" onClick={() => setConfirmandoId(null)}>
                  No
                </button>
              </span>
            ) : (
              <button onClick={() => setConfirmandoId(u.id)}>🗑️</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio3
