/**
 * ⭐⭐⭐ useFetch reutilizable
 *
 * En la lección anterior escribiste el mismo useEffect + 3 estados para cada fetch. ¡Basta de repetir!
 *
 *   1. Creá hooks/useFetch.js:
 *        function useFetch(url) → { data, cargando, error }
 *      Adentro: los 3 useState + un useEffect con dependencia [url], AbortController,
 *      try/catch/finally y chequeo de response.ok. (Copiá el patrón del Ejercicio 3 de useEffect.)
 *   2. Usalo en los dos componentes de abajo, con APIs distintas:
 *        - ListaUsuarios → https://jsonplaceholder.typicode.com/users   (mostrá name y email)
 *        - ListaPosts    → https://jsonplaceholder.typicode.com/posts?_limit=5   (mostrá title)
 *   3. Cada uno maneja su "Cargando..." y su error.
 *
 * Fijate que cada componente queda de ~10 líneas. ¡Esa es la gracia de un custom hook!
 */

function ListaUsuarios() {
  // TODO: const { data, cargando, error } = useFetch('...')
  return <p className="text-slate-400">Usuarios: completame</p>
}

function ListaPosts() {
  // TODO
  return <p className="text-slate-400">Posts: completame</p>
}

function Ejercicio3() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section>
        <h3 className="mb-2 text-lg font-bold">👥 Usuarios</h3>
        <ListaUsuarios />
      </section>
      <section>
        <h3 className="mb-2 text-lg font-bold">📰 Últimos posts</h3>
        <ListaPosts />
      </section>
    </div>
  )
}

export default Ejercicio3
