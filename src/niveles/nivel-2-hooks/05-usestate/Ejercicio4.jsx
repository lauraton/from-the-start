/**
 * ⭐⭐⭐ Carrito de compras (levantar el estado)
 *
 * Hay 3 componentes: Ejercicio4 (padre), Producto y Carrito (hijos/hermanos).
 * Producto y Carrito necesitan el MISMO dato (el carrito) → el estado vive en el PADRE.
 *
 *   1. En Ejercicio4: estado "carrito" = array de { id, nombre, precio, cantidad }.
 *   2. Producto recibe por props el producto y una función "onAgregar".
 *      Al hacer click en "Agregar", llama a onAgregar(producto).
 *   3. agregar(producto) en el padre:
 *        - si el producto YA está en el carrito → sumarle 1 a la cantidad (map)
 *        - si no está → agregarlo con cantidad: 1 (spread)
 *   4. Carrito recibe "items", "onQuitar" y "onVaciar". Muestra cada item con su cantidad y subtotal,
 *      un botón ✕ para quitarlo, el TOTAL y un botón "Vaciar carrito".
 *   5. Si el carrito está vacío: "Tu carrito está vacío 🛒".
 *   6. En el header mostrá la cantidad TOTAL de unidades en el carrito (reduce).
 */

const productos = [
  { id: 1, nombre: 'Remera React', precio: 15000, emoji: '👕' },
  { id: 2, nombre: 'Taza JS', precio: 8000, emoji: '☕' },
  { id: 3, nombre: 'Stickers', precio: 2500, emoji: '🏷️' },
  { id: 4, nombre: 'Gorra Vite', precio: 12000, emoji: '🧢' },
]

function Producto() {
  // TODO: recibir props y llamar a onAgregar
  return (
    <div className="rounded-xl border p-4 text-center">
      <p className="text-4xl">❓</p>
      <button className="mt-2 rounded-lg bg-sky-500 px-3 py-1 text-sm text-white">Agregar</button>
    </div>
  )
}

function Carrito() {
  // TODO
  return <aside className="rounded-xl bg-slate-50 p-4">Tu carrito está vacío 🛒</aside>
}

function Ejercicio4() {
  // TODO: estado carrito + funciones agregar, quitar, vaciar

  return (
    <div>
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">🛍️ Tienda</h2>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">🛒 0</span>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="grid grid-cols-2 gap-3 md:col-span-2">
          {productos.map((p) => (
            <Producto key={p.id} />
          ))}
        </div>
        <Carrito />
      </div>
    </div>
  )
}

export default Ejercicio4
