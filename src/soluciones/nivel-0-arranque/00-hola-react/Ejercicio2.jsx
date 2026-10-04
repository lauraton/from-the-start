import { useState } from 'react'

const respuestaHMR =
  'Sí. El HMR reemplaza solo el módulo que cambió y preserva el estado de la app.'
const respuestaF5 =
  'Volvió a 0: F5 recarga TODA la página, así que el estado en memoria se pierde.'

const estructura = [
  { nombre: 'index.html', descripcion: 'Tiene el <div id="root"> y carga el JavaScript de la app.' },
  { nombre: 'src/main.jsx', descripcion: 'Punto de entrada: monta <App /> con createRoot.' },
  { nombre: 'src/App.jsx', descripcion: 'Componente raíz que arma la estructura básica.' },
  { nombre: 'public/', descripcion: 'Archivos estáticos (imágenes) que no pasan por el build.' },
  { nombre: 'src/components/', descripcion: 'Componentes reutilizables.' },
  { nombre: 'src/hooks/', descripcion: 'Custom hooks del proyecto.' },
]

function Ejercicio2() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="space-y-6">
      <button
        className="rounded-full bg-emerald-500 px-5 py-2 font-bold text-white"
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
