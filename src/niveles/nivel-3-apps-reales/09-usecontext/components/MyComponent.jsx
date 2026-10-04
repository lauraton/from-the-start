import { useGlobalContext } from '../context/UserContext'

function MyComponent() {
  const { user, setUser } = useGlobalContext()

  return (
    <div className="rounded-xl bg-sky-50 p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <button
        className="mt-2 rounded bg-sky-500 px-3 py-1 text-white"
        onClick={() => setUser({ id: 2, name: 'Jane Doe' })}
      >
        Cambiar usuario
      </button>
    </div>
  )
}

export default MyComponent
