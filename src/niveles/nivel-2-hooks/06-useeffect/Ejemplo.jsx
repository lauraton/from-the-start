/**
 * useEffect: fetch, timer y document.title
 *
 *   1. UsersList: el ejemplo del apunte (trae usuarios de GitHub una sola vez).
 *   2. Reloj: un setInterval con su limpieza. Tocá "Ocultar reloj" y mirá la consola (F12):
 *      vas a ver que se ejecuta la limpieza (desmontaje).
 *   3. Título: mirá la pestaña del navegador mientras tocás el botón (efecto con dependencia [clicks]).
 */
import { useEffect, useState } from 'react'

function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchUsers() {
      try {
        const response = await fetch('https://api.github.com/users', { signal: controller.signal })
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err)
      }
    }

    fetchUsers()
    return () => controller.abort()
  }, [])

  return (
    <ul className="grid max-h-64 grid-cols-2 gap-2 overflow-auto">
      {users.length === 0 && <p className="text-slate-400">Cargando (o sin internet)...</p>}
      {users.map((user) => (
        <li key={user.id} className="flex items-center gap-2 text-sm">
          <img src={user.avatar_url} alt="" className="h-6 w-6 rounded-full" />
          {user.login}
        </li>
      ))}
    </ul>
  )
}

function Reloj() {
  const [hora, setHora] = useState(new Date())

  useEffect(() => {
    console.log('⏰ Reloj montado: arranca el intervalo')
    const id = setInterval(() => setHora(new Date()), 1000)
    return () => {
      console.log('🧹 Reloj desmontado: limpio el intervalo')
      clearInterval(id)
    }
  }, [])

  return <p className="font-mono text-4xl">{hora.toLocaleTimeString()}</p>
}

function Ejemplo() {
  const [mostrarReloj, setMostrarReloj] = useState(true)
  const [clicks, setClicks] = useState(0)

  useEffect(() => {
    document.title = `Clicks: ${clicks}`
    return () => (document.title = 'Curso de React')
  }, [clicks]) // se ejecuta cada vez que cambia "clicks"

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="rounded-xl bg-slate-50 p-4 md:col-span-2">
        <h3 className="mb-2 font-bold">1. Usuarios de GitHub (useEffect con [])</h3>
        <UsersList />
      </section>

      <section className="rounded-xl bg-slate-50 p-4">
        <h3 className="mb-2 font-bold">2. Reloj (setInterval + limpieza)</h3>
        {mostrarReloj && <Reloj />}
        <button className="mt-2 rounded bg-slate-200 px-3 py-1" onClick={() => setMostrarReloj(!mostrarReloj)}>
          {mostrarReloj ? 'Ocultar' : 'Mostrar'} reloj
        </button>
      </section>

      <section className="rounded-xl bg-slate-50 p-4">
        <h3 className="mb-2 font-bold">3. Título de la pestaña ([clicks])</h3>
        <button className="rounded bg-sky-500 px-3 py-1 text-white" onClick={() => setClicks((c) => c + 1)}>
          Clicks: {clicks}
        </button>
      </section>
    </div>
  )
}

export default Ejemplo
