/**
 * ⭐⭐ Tabla de usuarios con "Recargar"
 *
 * (Necesitás  npm run api  corriendo)
 *
 *   1. Traé los usuarios de http://localhost:3000/api/users con el patrón loading / error / finally.
 *   2. Mostralos en la tabla: nombre, email y rol. El rol como "badge" de color:
 *        admin → rojo · editor → amarillo · lector → gris   (usá un objeto con las clases completas)
 *   3. Mientras carga: "⏳ Cargando usuarios..."
 *      Si hay error: el mensaje en rojo + "¿Prendiste npm run api?"
 *   4. Botón "↻ Recargar": vuelve a pedir los datos.
 *      Truco: un estado  const [recargas, setRecargas] = useState(0)
 *             ponelo en el array de dependencias del useEffect y sumale 1 en el click.
 *             (Acordate de volver a poner loading en true al empezar.)
 *   5. Mostrá "X usuarios" abajo de la tabla.
 *
 * Probá: apagá el backend (Ctrl+C), tocá Recargar → error. Prendelo, Recargar → anda. 🎉
 */

function Ejercicio1() {
  // TODO

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">👥 Usuarios</h2>
        <button className="rounded-lg bg-slate-800 px-3 py-1 text-white">↻ Recargar</button>
      </div>
      <table className="w-full text-left">
        <thead className="border-b text-sm text-slate-500">
          <tr>
            <th className="py-2">Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>{/* TODO */}</tbody>
      </table>
    </div>
  )
}

export default Ejercicio1
