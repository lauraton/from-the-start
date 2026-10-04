/**
 * ⭐⭐ Ficha de producto
 *
 * Usando el objeto "producto", mostrá en pantalla:
 *   1. El nombre en un <h2>.
 *   2. El precio original tachado (clase "line-through") y el precio con descuento.
 *      precioFinal = precio - (precio * descuento / 100)
 *   3. Un cartel "AGOTADO" (rojo) si stock es 0, o "Stock: X unidades" (verde) si hay. → usá un TERNARIO
 *   4. Un badge "🚚 Envío gratis" SOLO si el precio final es mayor a 50000. → usá &&
 *   5. Las categorías unidas con " · " (pista: producto.categorias.join(' · ')).
 *
 * Probá cambiar stock y precio en el objeto para verificar que los condicionales funcionan.
 */

const producto = {
  nombre: 'Auriculares Bluetooth',
  precio: 80000,
  descuento: 25,
  stock: 4,
  categorias: ['Audio', 'Tecnología', 'Gaming'],
}

function Ejercicio2() {
  // TODO: calculá el precio final acá
  const precioFinal = 0

  return (
    <div className="max-w-sm rounded-2xl border p-5 shadow">
      {/* TODO: nombre */}

      {/* TODO: precio original tachado y precio final */}

      {/* TODO: stock con ternario */}

      {/* TODO: envío gratis con && */}

      {/* TODO: categorías */}
    </div>
  )
}

export default Ejercicio2
