/**
 * ⭐ De "style" a Tailwind
 *
 * Esta tarjeta está hecha con style en línea. Reemplazá TODOS los style={{...}}
 * por clases de Tailwind que den el mismo resultado (no tiene que ser idéntico al píxel).
 *
 * Ayudita de equivalencias:
 *   padding: 24            → p-6            borderRadius: 16       → rounded-2xl
 *   backgroundColor: white → bg-white       boxShadow              → shadow-lg
 *   maxWidth: 320          → max-w-xs       display: flex          → flex
 *   alignItems: center     → items-center   gap: 12                → gap-3
 *   fontSize: 20           → text-xl        fontWeight: bold       → font-bold
 *   color: #64748b         → text-slate-500 marginTop: 16          → mt-4
 *   width: '100%'          → w-full
 *
 * Extra: agregale al botón un hover que lo oscurezca (hover:bg-emerald-600).
 */

function Ejercicio1() {
  return (
    <div style={{ padding: 24, borderRadius: 16, backgroundColor: 'white', boxShadow: '0 10px 15px rgba(0,0,0,.15)', maxWidth: 320 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 40 }}>🌱</span>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>Plan Verde</h2>
          <p style={{ color: '#64748b' }}>Ideal para empezar</p>
        </div>
      </div>
      <button style={{ marginTop: 16, width: '100%', padding: 8, borderRadius: 8, backgroundColor: '#10b981', color: 'white', fontWeight: 'bold' }}>
        Elegir plan
      </button>
    </div>
  )
}

export default Ejercicio1
