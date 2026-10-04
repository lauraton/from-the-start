const planes = [
  { id: 'basico', nombre: 'Básico', precio: 0, color: 'gris', caracteristicas: ['1 proyecto', 'Soporte por mail'] },
  { id: 'pro', nombre: 'Pro', precio: 9, color: 'violeta', destacado: true, caracteristicas: ['10 proyectos', 'Soporte 24/7', 'Dominio propio'] },
  { id: 'equipo', nombre: 'Equipo', precio: 29, color: 'verde', caracteristicas: ['Proyectos ilimitados', 'Soporte 24/7', 'Hasta 20 personas'] },
]

// Clases COMPLETAS: Tailwind las encuentra escritas en el código y las genera
const estilos = {
  gris: { boton: 'bg-slate-500 hover:bg-slate-600', borde: 'border-slate-500', badge: 'bg-slate-500' },
  violeta: { boton: 'bg-violet-500 hover:bg-violet-600', borde: 'border-violet-500', badge: 'bg-violet-500' },
  verde: { boton: 'bg-emerald-500 hover:bg-emerald-600', borde: 'border-emerald-500', badge: 'bg-emerald-500' },
}

function Plan({ nombre, precio, color, caracteristicas, destacado = false }) {
  const e = estilos[color]
  return (
    <div
      className={`relative rounded-2xl bg-white p-6 shadow-sm ${
        destacado ? `border-2 ${e.borde} md:scale-105 shadow-xl` : 'border'
      }`}
    >
      {destacado && (
        <span className={`${e.badge} absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-bold text-white`}>
          ⭐ Más elegido
        </span>
      )}
      <h3 className="text-lg font-bold">{nombre}</h3>
      <p className="my-3">
        <span className="text-4xl font-bold">${precio}</span>
        <span className="text-sm text-slate-500">/mes</span>
      </p>
      <ul className="space-y-1 text-sm">
        {caracteristicas.map((c) => (
          <li key={c}>✓ {c}</li>
        ))}
      </ul>
      <button className={`${e.boton} mt-6 w-full rounded-lg px-4 py-2 font-semibold text-white transition`}>
        Elegir
      </button>
    </div>
  )
}

function Ejercicio3() {
  return (
    <div className="grid gap-6 rounded-2xl bg-slate-50 p-6 md:grid-cols-3">
      {planes.map((p) => (
        <Plan key={p.id} {...p} />
      ))}
    </div>
  )
}

export default Ejercicio3
