import useToggle from './hooks/useToggle'

function Ejercicio1() {
  const [modoOscuro, alternarModo] = useToggle(false)
  const [verPassword, alternarPassword] = useToggle()
  const [verDetalle, alternarDetalle] = useToggle()

  return (
    <div className={`max-w-sm space-y-4 rounded-2xl p-6 shadow transition ${modoOscuro ? 'bg-slate-900 text-white' : 'bg-white'}`}>
      <button className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-800" onClick={alternarModo}>
        {modoOscuro ? '☀️ Modo claro' : '🌙 Modo oscuro'}
      </button>

      <div className="flex gap-2">
        <input
          type={verPassword ? 'text' : 'password'}
          defaultValue="secreto123"
          className="flex-1 rounded border px-2 py-1 text-slate-800"
        />
        <button onClick={alternarPassword}>{verPassword ? '🙈' : '👁️'}</button>
      </div>

      <button className="text-sm underline" onClick={alternarDetalle}>
        {verDetalle ? 'Menos info' : 'Más info'}
      </button>
      {verDetalle && <p>Este texto debería poder ocultarse y mostrarse 🙂</p>}
    </div>
  )
}

export default Ejercicio1
