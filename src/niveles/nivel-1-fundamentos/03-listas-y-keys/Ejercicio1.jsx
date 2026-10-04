/**
 * ⭐ Lista de compras
 *
 *   1. Mostrá cada producto del array "compras" como un <li> dentro del <ul> usando map().
 *   2. Usá el texto del producto como key (acá no se repiten, así que sirve).
 *   3. Arriba de la lista mostrá: "Tenés X productos para comprar" (usá .length).
 */

const compras = ['🍎 Manzanas', '🥛 Leche', '🍞 Pan', '🧀 Queso', '☕ Café']

function Ejercicio1() {
  return (
    <div className="max-w-xs">
      <h2 className="text-xl font-bold">🛒 Lista de compras</h2>
      {/* TODO: cantidad */}
      <ul className="mt-3 space-y-1">{/* TODO: map */}</ul>
    </div>
  )
}

export default Ejercicio1
