/**
 * ⭐⭐⭐ Carrito global con Context
 *
 * ¿Te acordás del carrito de useState (lección 5)? Ahí había que pasar funciones por props.
 * Ahora el carrito vive en un CONTEXTO y cualquier componente lo usa directo.
 *
 *   1. Completá context/CarritoContext.jsx (instrucciones adentro).
 *      Tip: en agregar() usá la forma funcional setItems((actuales) => ...).
 *   2. Envolvé la tienda con <CarritoProvider>.
 *   3. IconoCarrito (en el Header): muestra totalUnidades en un globito.
 *   4. TarjetaProducto: el botón "Agregar" llama a agregar(producto).
 *      ⭐ Extra: si el producto ya está en el carrito, que el botón diga "Agregar otro (2)".
 *   5. PanelCarrito: lista los items con cantidad, botón ✕ (quitar), total y "Vaciar".
 *
 * Fijate: Header, Catalogo y PanelCarrito están en ramas distintas del árbol y NO se pasan props.
 */
import { CarritoProvider, useCarrito } from './context/CarritoContext'

const productos = [
  { id: 1, nombre: 'Mate', precio: 12000, emoji: '🧉' },
  { id: 2, nombre: 'Alfajores x6', precio: 7500, emoji: '🍪' },
  { id: 3, nombre: 'Dulce de leche', precio: 4200, emoji: '🍯' },
  { id: 4, nombre: 'Yerba 1kg', precio: 6800, emoji: '🌿' },
]

function IconoCarrito() {
  return (
    <span className="relative text-3xl">
      🛒
      <span className="absolute -top-1 -right-3 rounded-full bg-red-500 px-1.5 text-xs font-bold text-white">0</span>
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
  return (
    <div className="rounded-xl border p-4 text-center">
      <p className="text-5xl">{producto.emoji}</p>
      <p className="font-semibold">{producto.nombre}</p>
      <p className="text-slate-500">${producto.precio}</p>
      <button className="mt-2 rounded-lg bg-sky-500 px-3 py-1 text-sm text-white">Agregar</button>
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
  return <aside className="rounded-xl bg-slate-50 p-4">Carrito vacío</aside>
}

function Ejercicio3() {
  return (
    <div>
      <Header />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Catalogo />
        </div>
        <PanelCarrito />
      </div>
    </div>
  )
}

export default Ejercicio3
