import { useEffect, useState } from 'react'

const API = 'http://localhost:3000/api/users'
const vacio = { name: '', email: '', rol: 'lector' }

function Ejercicio2() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [form, setForm] = useState(vacio)
  const [enviando, setEnviando] = useState(false)
  const [errorForm, setErrorForm] = useState(null)
  const [mensaje, setMensaje] = useState(null)

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => setError('No hay conexión. ¿Prendiste npm run api?'))
  }, [])

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    setEnviando(true)
    setErrorForm(null)
    setMensaje(null)
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setUsers([...users, data])
      setForm(vacio)
      setMensaje('✅ Usuario creado')
    } catch (err) {
      setErrorForm(err.message)
    } finally {
      setEnviando(false)
    }
  }

  const input = 'w-full rounded-lg border px-3 py-2'

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form className="space-y-3 rounded-xl bg-slate-50 p-4" onSubmit={handleSubmit}>
        <h3 className="font-bold">➕ Nuevo usuario</h3>
        <input className={input} placeholder="Nombre" name="name" value={form.name} onChange={cambiar} />
        <input className={input} placeholder="Email" name="email" value={form.email} onChange={cambiar} />
        <select className={input} name="rol" value={form.rol} onChange={cambiar}>
          <option value="lector">lector</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
        <button
          disabled={enviando}
          className="w-full rounded-lg bg-emerald-500 py-2 font-semibold text-white disabled:opacity-50"
        >
          {enviando ? 'Guardando...' : 'Guardar'}
        </button>
        {errorForm && <p className="text-sm text-red-600">{errorForm}</p>}
        {mensaje && <p className="text-sm text-emerald-600">{mensaje}</p>}
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
