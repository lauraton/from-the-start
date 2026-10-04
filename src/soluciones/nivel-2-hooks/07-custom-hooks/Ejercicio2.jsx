import useContador from './hooks/useContador'

function SelectorEntradas() {
  const { valor, sumar, restar, esMin, esMax } = useContador({ inicial: 1, min: 1, max: 6 })
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="font-semibold">🎟️ Entradas</p>
      <div className="mt-2 flex items-center gap-3">
        <button className="h-8 w-8 rounded-full bg-slate-200 disabled:opacity-30" onClick={restar} disabled={esMin}>
          −
        </button>
        <span className="text-2xl font-bold">{valor}</span>
        <button className="h-8 w-8 rounded-full bg-slate-200 disabled:opacity-30" onClick={sumar} disabled={esMax}>
          +
        </button>
      </div>
      {esMax && <p className="mt-1 text-xs text-amber-600">Máximo 6 por persona</p>}
    </div>
  )
}

function Volumen() {
  const { valor, sumar, restar, reset, esMin, esMax } = useContador({ inicial: 50, min: 0, max: 100, paso: 10 })
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="font-semibold">🔊 Volumen: {valor}%</p>
      <div className="my-2 h-3 rounded-full bg-slate-200">
        <div className="h-3 rounded-full bg-violet-500 transition-all" style={{ width: `${valor}%` }} />
      </div>
      <div className="flex gap-2">
        <button className="rounded bg-slate-200 px-2 disabled:opacity-30" onClick={restar} disabled={esMin}>
          🔉
        </button>
        <button className="rounded bg-slate-200 px-2 disabled:opacity-30" onClick={sumar} disabled={esMax}>
          🔊
        </button>
        <button className="rounded bg-slate-200 px-2 text-sm" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  )
}

function Ejercicio2() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <SelectorEntradas />
      <Volumen />
    </div>
  )
}

export default Ejercicio2
