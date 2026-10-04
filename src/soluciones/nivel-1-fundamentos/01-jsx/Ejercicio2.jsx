const producto = {
  nombre: 'Auriculares Bluetooth',
  precio: 80000,
  descuento: 25,
  stock: 4,
  categorias: ['Audio', 'Tecnología', 'Gaming'],
}

function Ejercicio2() {
  const precioFinal = producto.precio - (producto.precio * producto.descuento) / 100

  return (
    <div className="max-w-sm space-y-2 rounded-2xl border p-5 shadow">
      <h2 className="text-xl font-bold">{producto.nombre}</h2>

      <p>
        <span className="mr-2 text-slate-400 line-through">${producto.precio}</span>
        <span className="text-2xl font-bold">${precioFinal}</span>
        <span className="ml-2 text-sm text-emerald-600">-{producto.descuento}%</span>
      </p>

      {producto.stock === 0 ? (
        <p className="font-bold text-red-600">AGOTADO</p>
      ) : (
        <p className="text-emerald-600">Stock: {producto.stock} unidades</p>
      )}

      {precioFinal > 50000 && (
        <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700">
          🚚 Envío gratis
        </span>
      )}

      <p className="text-sm text-slate-500">{producto.categorias.join(' · ')}</p>
    </div>
  )
}

export default Ejercicio2
