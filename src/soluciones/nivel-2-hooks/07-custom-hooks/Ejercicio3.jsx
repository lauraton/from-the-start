import useFetch from './hooks/useFetch'

function ListaUsuarios() {
  const { data, cargando, error } = useFetch('https://jsonplaceholder.typicode.com/users')

  if (cargando) return <p>Cargando...</p>
  if (error) return <p className="text-red-600">Error: {error}</p>
  return (
    <ul className="space-y-1">
      {data.map((u) => (
        <li key={u.id} className="rounded bg-slate-50 px-3 py-1">
          <b>{u.name}</b> <span className="text-sm text-slate-500">{u.email}</span>
        </li>
      ))}
    </ul>
  )
}

function ListaPosts() {
  const { data, cargando, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

  if (cargando) return <p>Cargando...</p>
  if (error) return <p className="text-red-600">Error: {error}</p>
  return (
    <ol className="list-decimal space-y-1 pl-5">
      {data.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ol>
  )
}

function Ejercicio3() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section>
        <h3 className="mb-2 text-lg font-bold">👥 Usuarios</h3>
        <ListaUsuarios />
      </section>
      <section>
        <h3 className="mb-2 text-lg font-bold">📰 Últimos posts</h3>
        <ListaPosts />
      </section>
    </div>
  )
}

export default Ejercicio3
