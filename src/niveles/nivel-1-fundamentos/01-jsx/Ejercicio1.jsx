/**
 * ⭐ Detective de errores
 *
 * Este componente tiene 5 errores típicos de JSX. Al abrirlo vas a ver un error rojo: ¡es a propósito!
 * Encontralos y arreglalos (están marcados con 🐛 en el código):
 *   1. "style" recibe un texto en vez de un objeto.
 *   2. Se usa "class" en lugar de "className".
 *   3. Se usa "for" en lugar de "htmlFor".
 *   4. El evento "onclick" está en minúscula (debe ser camelCase).
 *   5. La condición con && muestra un "0" en pantalla cuando no hay stock.
 *
 * Cuando esté bien: la caja es violeta, el botón muestra un alert, y NO aparece un 0 suelto.
 * Tip: abrí la consola del navegador (F12) — React te avisa varios de estos errores.
 */

function Ejercicio1() {
  const stock = 0

  return (
    <div>
      {/* 🐛 1 */}
      <div style="background: violet; padding: 12px">Caja violeta</div>

      {/* 🐛 2 */}
      <h2 class="mt-4 text-xl font-bold">Formulario</h2>

      {/* 🐛 3 */}
      <label for="nombre">Nombre</label>
      <input id="nombre" className="ml-2 rounded border px-2" />

      {/* 🐛 4 */}
      <button className="ml-2 rounded bg-slate-800 px-3 text-white" onclick={() => alert('¡Funciona!')}>
        Enviar
      </button>

      {/* 🐛 5 */}
      <div className="mt-4">{stock && <p>Quedan {stock} unidades</p>}</div>
    </div>
  )
}

export default Ejercicio1
