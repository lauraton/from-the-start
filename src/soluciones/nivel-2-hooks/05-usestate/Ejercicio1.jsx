import { useState } from 'react'

function Ejercicio1() {
  const [cantidad, setCantidad] = useState(0)

  const boton =
    'h-12 w-12 rounded-full bg-sky-500 text-2xl font-bold text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-30'

  const color = cantidad === 10 ? 'text-red-500' : cantidad === 0 ? 'text-slate-400' : ''

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-6">
        <button className={boton} disabled={cantidad === 0} onClick={() => setCantidad((c) => c - 1)}>
          −
        </button>
        <span className={`w-16 text-center text-5xl font-bold ${color}`}>{cantidad}</span>
        <button className={boton} disabled={cantidad === 10} onClick={() => setCantidad((c) => c + 1)}>
          +
        </button>
      </div>
      <button className="text-sm text-slate-500 underline" onClick={() => setCantidad(0)}>
        Reiniciar
      </button>
      {cantidad === 10 && <p className="font-semibold text-red-500">¡Llegaste al máximo!</p>}
    </div>
  )
}

export default Ejercicio1
