import { useEffect, useState } from 'react'

function Mensaje() {
  useEffect(() => {
    console.log('✅ Mensaje montado')
    return () => console.log('❌ Mensaje desmontado')
  }, [])

  return <p className="rounded-lg bg-emerald-100 p-3">👋 ¡Hola! Soy un componente montado.</p>
}

function Ejercicio1() {
  const [cantidad, setCantidad] = useState(3)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.title = `(${cantidad}) Notificaciones`
  }, [cantidad])

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
