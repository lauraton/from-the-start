import { useState } from 'react'

const productos = [
  { id: 1, nombre: 'Remera React', precio: 15000, emoji: '👕' },
  { id: 2, nombre: 'Taza JS', precio: 8000, emoji: '☕' },
  { id: 3, nombre: 'Stickers', precio: 2500, emoji: '🏷️' },
  { id: 4, nombre: 'Gorra Vite', precio: 12000, emoji: '🧢' },
]

function Producto({ producto, onAgregar }) {
  return (
    <div className="rounded-xl border p-4 text-center">
      <p className="text-4xl">{producto.emoji}</p>
      <p className="font-semibold">{producto.nombre}</p>
      <p className="text-slate-500">${producto.precio}</p>
      <button
        className="mt-2 rounded-lg bg-sky-500 px-3 py-1 text-sm text-white hover:bg-sky-600"
        onClick={() => onAgregar(producto)}
      >
        Agregar
      </button>
    </div>
  )
}

function Carrito({ items, onQuitar, onVaciar }) {
  if (items.length === 0) {
    return <aside className="rounded-xl bg-slate-50 p-4">Tu carrito está vacío 🛒</aside>
  }
  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0)

  return (
    <aside className="space-y-2 rounded-xl bg-slate-50 p-4">
      {items.map((i) => (
        <div key={i.id} className="flex items-center justify-between text-sm">
          <span>
            {i.nombre} × {i.cantidad}
          </span>
          <span className="flex items-center gap-2">
            ${i.precio * i.cantidad}
            <button className="text-red-500" onClick={() => onQuitar(i.id)}>
              ✕
            </button>
          </span>
        </div>
      ))}
      <p className="border-t pt-2 text-lg font-bold">Total: ${total}</p>
      <button className="w-full rounded-lg bg-red-100 py-1 text-red-700" onClick={onVaciar}>
        Vaciar carrito
      </button>
    </aside>
  )
}

function Ejercicio4() {
  const [carrito, setCarrito] = useState([])

  function agregar(producto) {
    const existe = carrito.some((i) => i.id === producto.id)
    if (existe) {
      setCarrito(carrito.map((i) => (i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i)))
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  const quitar = (id) => setCarrito(carrito.filter((i) => i.id !== id))
  const vaciar = () => setCarrito([])
  const unidades = carrito.reduce((acc, i) => acc + i.cantidad, 0)

  return (
    <div>
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">🛍️ Tienda</h2>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">🛒 {unidades}</span>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="grid grid-cols-2 gap-3 md:col-span-2">
          {productos.map((p) => (
            <Producto key={p.id} producto={p} onAgregar={agregar} />
          ))}
        </div>
        <Carrito items={carrito} onQuitar={quitar} onVaciar={vaciar} />
      </div>
    </div>
  )
}

export default Ejercicio4
