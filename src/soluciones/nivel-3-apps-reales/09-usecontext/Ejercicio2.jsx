import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const iniciarSesion = () => setUsuario({ nombre: 'Lau', avatar: '🦊' })
  const cerrarSesion = () => setUsuario(null)

  return <AuthContext value={{ usuario, iniciarSesion, cerrarSesion }}>{children}</AuthContext>
}

const useAuth = () => useContext(AuthContext)

function PerfilMini() {
  const { usuario, cerrarSesion } = useAuth()
  return (
    <div className="rounded-lg bg-white p-3">
      <p className="text-3xl">{usuario.avatar}</p>
      <p className="font-bold">{usuario.nombre}</p>
      <button className="text-sm text-red-500" onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="space-y-2 rounded-xl bg-slate-100 p-3">
      <p className="text-xs text-slate-400">Sidebar</p>
      <PerfilMini />
    </aside>
  )
}

function Layout() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Sidebar />
      <main className="col-span-2 rounded-xl bg-slate-50 p-4">Contenido principal 📄</main>
    </div>
  )
}

function BotonLogin() {
  const { iniciarSesion } = useAuth()
  return (
    <button className="rounded-lg bg-sky-500 px-4 py-2 text-white" onClick={iniciarSesion}>
      Iniciar sesión
    </button>
  )
}

function Contenido() {
  const { usuario } = useAuth()
  return usuario ? <Layout /> : <BotonLogin />
}

function Ejercicio2() {
  return (
    <AuthProvider>
      <Contenido />
    </AuthProvider>
  )
}

export default Ejercicio2
