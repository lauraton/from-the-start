/**
 * ⭐⭐ Refactor: chau prop drilling
 *
 * Este código FUNCIONA, pero "usuario" y "cerrarSesion" bajan por 3 componentes que no los usan
 * (Layout → Sidebar → PerfilMini). Eso es prop drilling.
 *
 * Refactorizá usando Context (todo en este archivo está bien):
 *   1. Creá AuthContext con createContext(null).
 *   2. Creá AuthProvider que tenga el estado "usuario" y las funciones iniciarSesion / cerrarSesion.
 *   3. Creá el hook useAuth().
 *   4. Sacá TODAS las props usuario / cerrarSesion / iniciarSesion de Layout y Sidebar.
 *   5. PerfilMini y BotonLogin leen lo que necesitan con useAuth().
 *
 * Al final, Layout y Sidebar no deberían recibir NINGUNA prop (salvo children si querés).
 */
import { useState } from 'react'

function PerfilMini({ usuario, cerrarSesion }) {
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

function Sidebar({ usuario, cerrarSesion }) {
  return (
    <aside className="space-y-2 rounded-xl bg-slate-100 p-3">
      <p className="text-xs text-slate-400">Sidebar</p>
      <PerfilMini usuario={usuario} cerrarSesion={cerrarSesion} />
    </aside>
  )
}

function Layout({ usuario, cerrarSesion }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Sidebar usuario={usuario} cerrarSesion={cerrarSesion} />
      <main className="col-span-2 rounded-xl bg-slate-50 p-4">Contenido principal 📄</main>
    </div>
  )
}

function BotonLogin({ iniciarSesion }) {
  return (
    <button className="rounded-lg bg-sky-500 px-4 py-2 text-white" onClick={iniciarSesion}>
      Iniciar sesión
    </button>
  )
}

function Ejercicio2() {
  const [usuario, setUsuario] = useState(null)
  const iniciarSesion = () => setUsuario({ nombre: 'Lau', avatar: '🦊' })
  const cerrarSesion = () => setUsuario(null)

  return usuario ? (
    <Layout usuario={usuario} cerrarSesion={cerrarSesion} />
  ) : (
    <BotonLogin iniciarSesion={iniciarSesion} />
  )
}

export default Ejercicio2
