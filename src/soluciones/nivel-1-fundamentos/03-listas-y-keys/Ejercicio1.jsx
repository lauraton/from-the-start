const compras = ['🍎 Manzanas', '🥛 Leche', '🍞 Pan', '🧀 Queso', '☕ Café']

function Ejercicio1() {
  return (
    <div className="max-w-xs">
      <h2 className="text-xl font-bold">🛒 Lista de compras</h2>
      <p className="text-slate-500">Tenés {compras.length} productos para comprar</p>
      <ul className="mt-3 space-y-1">
        {compras.map((item) => (
          <li key={item} className="rounded bg-slate-50 px-3 py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio1
