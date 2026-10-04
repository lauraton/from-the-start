import { useEffect, useState } from 'react'

const coloresRol = {
  admin: 'bg-red-100 text-red-700',
  editor: 'bg-amber-100 text-amber-700',
  lector: 'bg-slate-100 text-slate-700',
}

function Ejercicio1() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [recargas, setRecargas] = useState(0)

  useEffect(() => {
    async function cargar() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('http://localhost:3000/api/users')
        if (!res.ok) throw new Error('No se pudo obtener la lista de usuarios')
        setUsers(await res.json())
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    cargar()
  }, [recargas])

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">👥 Usuarios</h2>
        <button className="rounded-lg bg-slate-800 px-3 py-1 text-white" onClick={() => setRecargas((r) => r + 1)}>
          ↻ Recargar
        </button>
      </div>

      {loading && <p>⏳ Cargando usuarios...</p>}
      {error && (
        <p className="text-red-600">
          {error} — ¿Prendiste <code>npm run api</code>?
        </p>
      )}

      {!loading && !error && (
        <>
          <table className="w-full text-left">
            <thead className="border-b text-sm text-slate-500">
              <tr>
                <th className="py-2">Nombre</th>
                <th>Email</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b">
                  <td className="py-2 font-semibold">{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${coloresRol[u.rol] ?? ''}`}>
                      {u.rol}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-sm text-slate-500">{users.length} usuarios</p>
        </>
      )}
    </div>
  )
}

export default Ejercicio1
