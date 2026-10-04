/**
 * ⭐⭐⭐ Buscador de Pokémon
 *
 * API: https://pokeapi.co/api/v2/pokemon/{nombre}   (ej: .../pokemon/pikachu)
 *   Datos útiles de la respuesta:
 *     data.name, data.id, data.sprites.other['official-artwork'].front_default,
 *     data.types → [{ type: { name: 'electric' } }],
 *     data.stats → [{ base_stat: 35, stat: { name: 'hp' } }, ...]
 *   Si el Pokémon no existe, la API responde 404 (response.ok === false).
 *
 *   1. Dos estados distintos: "texto" (lo que se escribe en el input) y "busqueda" (lo que se buscó).
 *      Al enviar el form → setBusqueda(texto.toLowerCase().trim())
 *      ¿Por qué dos? Para NO hacer un fetch por cada letra que tipeás.
 *   2. useEffect con dependencia [busqueda]:
 *        - si busqueda está vacía, no hacer nada (return)
 *        - fetch con AbortController, cargando/error, try/catch/finally
 *        - si 404 → error "No existe ese Pokémon 😢"
 *   3. Mostrá: imagen, #id, nombre (capitalizado con CSS: className="capitalize"),
 *      tipos como "chips" y las stats como barras (style={{ width: `${stat / 2}%` }}).
 *   4. Arranca buscando "pikachu".
 *
 * ⭐ Extra: botones "◀ Anterior" / "Siguiente ▶" que busquen por id (id - 1 / id + 1).
 */

function Ejercicio4() {
  // TODO

  return (
    <div className="mx-auto max-w-md">
      <form className="flex gap-2">
        <input className="flex-1 rounded-lg border px-3 py-2" placeholder="pikachu, charmander, 25..." />
        <button className="rounded-lg bg-red-500 px-4 font-semibold text-white">Buscar</button>
      </form>
      {/* TODO: resultado */}
    </div>
  )
}

export default Ejercicio4
