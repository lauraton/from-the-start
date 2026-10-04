/**
 * El ejemplo del apunte: GET a nuestro backend con loading y error
 *
 * ⚠️ Necesitás el mini backend prendido: abrí otra terminal y corré  npm run api
 *
 *   • Si está apagado vas a ver el estado de ERROR → ¡también es parte del ejemplo!
 *   • Prendelo y tocá "↻ Reiniciar" (arriba) para volver a montar el componente.
 *   • Mirá la terminal del backend: aparece cada pedido que llega (GET /api/users).
 */
import { useEffect, useState } from 'react'

function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch('http://localhost:3000/api/users')
        if (!response.ok) throw new Error('No se pudo obtener la lista de usuarios')
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  if (loading) return <p>Cargando...</p>
  if (error)
    return (
      <div className="rounded-lg bg-red-50 p-3 text-red-700">
        <p>Error: {error}</p>
        <p className="mt-1 text-sm">💡 ¿Prendiste el backend con <code>npm run api</code>?</p>
      </div>
    )

  return (
    <ul className="list-disc pl-6">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

function Ejemplo() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">👥 Usuarios desde http://localhost:3000/api/users</h2>
      <UsersList />
    </div>
  )
}

export default Ejemplo
