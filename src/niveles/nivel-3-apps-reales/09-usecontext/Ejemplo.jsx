/**
 * El ejemplo del apunte: UserProvider + useGlobalContext
 *
 *   • context/UserContext.jsx crea el contexto, el Provider y el custom hook.
 *   • components/MyComponent.jsx lo consume y lo cambia.
 *   • Saludo (abajo) es OTRO componente, muy lejos, que también lee el usuario.
 *     Tocá "Cambiar usuario": ¡se actualizan los dos! Sin pasar ni una prop.
 */
import { UserProvider, useGlobalContext } from './context/UserContext'
import MyComponent from './components/MyComponent'

function Saludo() {
  const { user } = useGlobalContext()
  return <p className="text-lg">👋 Hola {user.name}, tu id es {user.id}</p>
}

function ParteDeAbajo() {
  // Este componente NO recibe ni pasa props. Saludo lee el contexto directo.
  return (
    <div className="rounded-xl bg-violet-50 p-4">
      <p className="text-sm text-slate-500">(un componente muy lejos en el árbol)</p>
      <Saludo />
    </div>
  )
}

function Ejemplo() {
  return (
    <UserProvider>
      <div className="grid gap-4 md:grid-cols-2">
        <MyComponent />
        <ParteDeAbajo />
      </div>
    </UserProvider>
  )
}

export default Ejemplo
