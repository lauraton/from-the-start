// 🧪 TU PLAYGROUND
// Escribí acá lo que quieras para practicar. Guardá (Ctrl+S) y mirá el navegador.
// Tip: escribí "rafce" + Enter (con la extensión ES7 snippets) para crear un componente rápido.

import { useState } from 'react'

function MiApp() {
  const [clicks, setClicks] = useState(0)

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">¡Hola! Este es tu espacio libre 🚀</h1>
      <p className="text-slate-600">Borrá todo esto y probá lo que quieras.</p>
      <button
        className="rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white hover:bg-sky-600"
        onClick={() => setClicks((c) => c + 1)}
      >
        Clicks: {clicks}
      </button>
    </div>
  )
}

export default MiApp
