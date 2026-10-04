import { useEffect, useState } from 'react'

function Ejercicio2() {
  const [segundos, setSegundos] = useState(0)
  const [corriendo, setCorriendo] = useState(false)

  useEffect(() => {
    if (!corriendo) return
    const id = setInterval(() => setSegundos((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [corriendo])

  const mm = String(Math.floor(segundos / 60)).padStart(2, '0')
  const ss = String(segundos % 60).padStart(2, '0')

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-mono text-7xl font-bold">
        {mm}:{ss}
      </p>
      <div className="flex gap-3">
        <button
          className={`rounded-lg px-5 py-2 font-semibold text-white ${corriendo ? 'bg-amber-500' : 'bg-emerald-500'}`}
          onClick={() => setCorriendo(!corriendo)}
        >
          {corriendo ? '⏸ Pausar' : '▶ Iniciar'}
        </button>
        <button
          className="rounded-lg bg-slate-200 px-5 py-2 font-semibold"
          onClick={() => {
            setCorriendo(false)
            setSegundos(0)
          }}
        >
          ↺ Reiniciar
        </button>
      </div>
      {/* Sin limpieza: cada "Iniciar" crearía un intervalo nuevo y se sumarían (2, 3, 4 segundos por segundo...). */}
    </div>
  )
}

export default Ejercicio2
