/**
 * ⭐ Título de la pestaña + montaje/desmontaje
 *
 * PARTE A — En el componente Notificaciones:
 *   1. Con un useEffect, poné en el título de la pestaña: "(3) Notificaciones" usando el estado "cantidad".
 *   2. El efecto debe volver a ejecutarse SOLO cuando cambia "cantidad". ¿Qué va en el array?
 *
 * PARTE B — En el componente Mensaje:
 *   3. Con un useEffect que se ejecute UNA sola vez, hacé console.log('✅ Mensaje montado').
 *   4. Agregale una limpieza que haga console.log('❌ Mensaje desmontado').
 *   5. Abrí la consola (F12) y tocá "Mostrar/Ocultar". ¿Ves los logs?
 *      (Si al cargar ves montado → desmontado → montado, es el StrictMode. ¡Está bien!)
 */
import { useState } from 'react'

function Mensaje() {
  // TODO PARTE B

  return <p className="rounded-lg bg-emerald-100 p-3">👋 ¡Hola! Soy un componente montado.</p>
}

function Ejercicio1() {
  const [cantidad, setCantidad] = useState(3)
  const [visible, setVisible] = useState(true)

  // TODO PARTE A

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-xl">🔔 {cantidad} notificaciones</span>
        <button className="rounded bg-sky-500 px-3 py-1 text-white" onClick={() => setCantidad((c) => c + 1)}>
          +1
        </button>
        <button className="rounded bg-slate-200 px-3 py-1" onClick={() => setCantidad(0)}>
          Marcar leídas
        </button>
      </div>

      <button className="rounded bg-slate-800 px-3 py-1 text-white" onClick={() => setVisible(!visible)}>
        Mostrar / Ocultar
      </button>
      {visible && <Mensaje />}
    </div>
  )
}

export default Ejercicio1
