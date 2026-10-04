/**
 * ⭐⭐ Personajes de Rick and Morty
 *
 * API: https://rickandmortyapi.com/api/character
 *   La respuesta es un objeto: { info: {...}, results: [ { id, name, status, species, image }, ... ] }
 *
 *   1. Estados: personajes ([]), cargando (true), error (null).
 *   2. useEffect con [] que:
 *        - cree un AbortController
 *        - tenga una función async interna con try / catch / finally
 *        - si !response.ok → throw new Error('No se pudo cargar')
 *        - guarde data.results en el estado
 *        - en finally → cargando = false
 *          (solo si no se canceló: if (!controller.signal.aborted) setCargando(false))
 *        - devuelva () => controller.abort()
 *   3. Mientras carga → "Cargando personajes... ⏳"
 *      Si hay error → mostralo en rojo.
 *   4. Mostrá una grilla de tarjetas con imagen, nombre, especie y estado:
 *      "Alive" con un puntito verde 🟢, "Dead" rojo 🔴, "unknown" gris ⚪.
 *
 * Para probar el error: cambiá la URL por una que no exista (ej: .../api/characterxxx).
 */

function Ejercicio3() {
  // TODO

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">🛸 Personajes</h2>
      {/* TODO */}
    </div>
  )
}

export default Ejercicio3
