/**
 * ⭐ useToggle
 *
 *   1. Implementá el hook en hooks/useToggle.js (las instrucciones están ahí).
 *   2. Usalo TRES veces en este componente:
 *        - modoOscuro: cambia los colores de la tarjeta (bg-slate-900 text-white vs bg-white).
 *        - verPassword: el input pasa de type="password" a type="text". El botón dice 🙈 / 👁️.
 *        - verDetalle: muestra/oculta el párrafo de "Más info".
 *   Fijate cómo con UNA línea por cada uno resolvés lo que antes eran 2 líneas (estado + función).
 */
import useToggle from './hooks/useToggle'

function Ejercicio1() {
  const [modoOscuro, alternarModo] = useToggle(false)
  // TODO: verPassword y verDetalle

  return (
    <div className={`max-w-sm space-y-4 rounded-2xl p-6 shadow transition ${modoOscuro ? 'bg-slate-900 text-white' : 'bg-white'}`}>
      <button className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-800" onClick={alternarModo}>
        {modoOscuro ? '☀️ Modo claro' : '🌙 Modo oscuro'}
      </button>

      <div className="flex gap-2">
        <input type="password" defaultValue="secreto123" className="flex-1 rounded border px-2 py-1 text-slate-800" />
        <button>👁️</button>
      </div>

      <button className="text-sm underline">Más info</button>
      <p>Este texto debería poder ocultarse y mostrarse 🙂</p>
    </div>
  )
}

export default Ejercicio1
