/**
 * JSX: todas las reglas en un solo lugar
 *
 * Leé el código con atención: cada bloque tiene un comentario que explica una regla.
 * Probá cambiar "logueado" a false y "mensajes" a 0 para ver los condicionales en acción.
 */

function Ejemplo() {
  const nombre = 'Laurato'
  const edad = 66
  const logueado = false
  const mensajes = 0
  const estiloCaja = { backgroundColor: '#fef3c7', padding: 12, borderRadius: 12 }

  return (
    // Regla 1: un solo padre. Usamos un Fragment <> </> que no agrega nada al HTML
    <>
      {/* Regla 4: llaves = JavaScript */}
      <h1 className="text-2xl font-bold">Hola, {nombre.toUpperCase()}</h1>
      <p>El año que viene vas a tener {edad + 1} años.</p>

      {/* Regla 2 y 3: className, htmlFor y etiquetas cerradas */}
      <label htmlFor="email" className="mt-4 block text-sm font-semibold">
        Email
      </label>
      <input id="email" type="email" className="rounded border px-2 py-1" />
      <br />

      {/* Regla 6: style recibe un objeto (doble llave) */}
      <div style={estiloCaja} className="mt-4">
        Caja con style en línea
      </div>
      <div
        style={{ color: 'white', background: 'teal', padding: 8 }}
        className="mt-2 rounded"
      >
        Objeto escrito directo: style=&#123;&#123; ... &#125;&#125;
      </div>

      {/* Condicional con ternario */}
      <p className="mt-4">{logueado ? '✅ Sesión iniciada' : '🔒 Iniciá sesión'}</p>

      {/* Condicional con && (ojo: comparamos con > 0 para que no aparezca un "0") */}
      {mensajes > 0 && <p>📩 Tenés {mensajes} mensajes nuevos</p>}

      {/* Regla 5: eventos en camelCase y reciben una FUNCIÓN */}
      <button
        className="mt-4 rounded bg-slate-800 px-3 py-1 text-white"
        onClick={() => alert(`Hola ${nombre}`)}
      >
        Saludar
      </button>
    </>
  )
}

export default Ejemplo
