import { CarritoProvider, useCarrito } from './context/CarritoContext'

const productos = [
  { id: 1, nombre: 'Mate', precio: 12000, emoji: '🧉' },
  { id: 2, nombre: 'Alfajores x6', precio: 7500, emoji: '🍪' },
  { id: 3, nombre: 'Dulce de leche', precio: 4200, emoji: '🍯' },
  { id: 4, nombre: 'Yerba 1kg', precio: 6800, emoji: '🌿' },
]

function IconoCarrito() {
  const { totalUnidades } = useCarrito()
  return (
    <span className="relative text-3xl">
      🛒
      <span className="absolute -top-1 -right-3 rounded-full bg-red-500 px-1.5 text-xs font-bold text-white">
        {totalUnidades}
      </span>
    </span>
  )
}

function Header() {
  return (
    <header className="mb-4 flex items-center justify-between rounded-xl bg-sky-600 p-4 text-white">
      <h2 className="text-xl font-bold">🇦🇷 Almacén Criollo</h2>
      <IconoCarrito />
    </header>
  )
}

function TarjetaProducto({ producto }) {
  const { items, agregar } = useCarrito()
  const enCarrito = items.find((i) => i.id === producto.id)

  return (
    <div className="rounded-xl border p-4 text-center">
      <p className="text-5xl">{producto.emoji}</p>
      <p className="font-semibold">{producto.nombre}</p>
      <p className="text-slate-500">${producto.precio}</p>
      <button className="mt-2 rounded-lg bg-sky-500 px-3 py-1 text-sm text-white" onClick={() => agregar(producto)}>
        {enCarrito ? `Agregar otro (${enCarrito.cantidad})` : 'Agregar'}
      </button>
    </div>
  )
}

function Catalogo() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {productos.map((p) => (
        <TarjetaProducto key={p.id} producto={p} />
      ))}
    </div>
  )
}

function PanelCarrito() {
  const { items, quitar, vaciar, totalPrecio } = useCarrito()

  if (items.length === 0) return <aside className="rounded-xl bg-slate-50 p-4">Carrito vacío</aside>

  return (
    <aside className="space-y-2 rounded-xl bg-slate-50 p-4">
      {items.map((i) => (
        <div key={i.id} className="flex justify-between text-sm">
          <span>
            {i.emoji} {i.nombre} × {i.cantidad}
          </span>
          <button className="text-red-500" onClick={() => quitar(i.id)}>
            ✕
          </button>
        </div>
      ))}
      <p className="border-t pt-2 font-bold">Total: ${totalPrecio}</p>
      <button className="w-full rounded bg-red-100 py-1 text-red-700" onClick={vaciar}>
        Vaciar
      </button>
    </aside>
  )
}

function Ejercicio3() {
  return (
    <CarritoProvider>
      <Header />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Catalogo />
        </div>
        <PanelCarrito />
      </div>
    </CarritoProvider>
  )
}

export default Ejercicio3
