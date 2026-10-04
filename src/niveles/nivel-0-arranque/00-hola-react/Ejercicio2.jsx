/**
 * ⭐ Experimento HMR + estructura del proyecto
 *
 * PARTE A — Probá el HMR:
 *   1. Tocá "Me gusta" hasta llegar a 5.
 *   2. Sin recargar, cambiá el color del botón: reemplazá "bg-pink-500" por "bg-emerald-500" y guardá.
 *   3. ¿El contador sigue en 5? Respondé en el TODO de abajo.
 *   4. Ahora apretá F5 (recarga completa). ¿Qué pasó con el número? ¿Por qué?
 *
 * PARTE B — Completá el array "estructura" con lo que contiene cada carpeta/archivo
 * de un proyecto Vite (mirá el README de esta lección si no te acordás).
 */
import { useState } from 'react'

// TODO PARTE A: escribí tus respuestas acá
const respuestaHMR = '...'
const respuestaF5 = '...'

// TODO PARTE B: completá las descripciones
const estructura = [
  { nombre: 'index.html', descripcion: '...' },
  { nombre: 'src/main.jsx', descripcion: '...' },
  { nombre: 'src/App.jsx', descripcion: '...' },
  { nombre: 'public/', descripcion: '...' },
  { nombre: 'src/components/', descripcion: '...' },
  { nombre: 'src/hooks/', descripcion: '...' },
]

function Ejercicio2() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="space-y-6">
      <button
        className="rounded-full bg-pink-500 px-5 py-2 font-bold text-white"
        onClick={() => setLikes(likes + 1)}
      >
        ❤️ Me gusta ({likes})
      </button>

      <div className="space-y-1 text-sm">
        <p><b>¿Se mantuvo el contador?</b> {respuestaHMR}</p>
        <p><b>¿Y con F5?</b> {respuestaF5}</p>
      </div>

      <ul className="divide-y rounded-xl border">
        {estructura.map((item) => (
          <li key={item.nombre} className="flex gap-3 p-2 text-sm">
            <code className="w-36 shrink-0 font-bold text-sky-700">{item.nombre}</code>
            <span>{item.descripcion}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio2
