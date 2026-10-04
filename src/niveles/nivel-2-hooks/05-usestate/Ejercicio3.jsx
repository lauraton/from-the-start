/**
 * ⭐⭐⭐ Lista de tareas (el clásico de todos los parciales)
 *
 *   1. Estado "tareas": array de objetos { id, texto, hecha }. Arranca con las 2 de ejemplo.
 *   2. AGREGAR: input controlado + botón (o Enter, usando un <form onSubmit>).
 *        - id: Date.now() o crypto.randomUUID()
 *        - no agregar si el texto está vacío (.trim())
 *        - limpiar el input después de agregar
 *   3. TACHAR: al hacer click en una tarea, cambiar "hecha" (map + spread).
 *   4. BORRAR: botón 🗑️ en cada tarea (filter).
 *   5. FILTRAR: botones "Todas" / "Pendientes" / "Hechas" (otro estado: filtro).
 *   6. Mostrar "X pendientes" abajo.
 *   7. Si no hay tareas para mostrar: "🎉 Nada por acá".
 *
 * ⚠️ Recordá: nunca push ni modificar el objeto directamente. Siempre crear arrays/objetos nuevos.
 */

const iniciales = [
  { id: 1, texto: 'Repasar useState', hecha: true },
  { id: 2, texto: 'Hacer la lista de tareas', hecha: false },
]

function Ejercicio3() {
  // TODO: estados (tareas, texto del input, filtro)

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-3 text-2xl font-bold">📝 Mis tareas</h2>

      <form className="flex gap-2">
        <input className="flex-1 rounded-lg border px-3 py-2" placeholder="Nueva tarea..." />
        <button className="rounded-lg bg-sky-500 px-4 font-semibold text-white">Agregar</button>
      </form>

      <div className="my-3 flex gap-2 text-sm">
        {['Todas', 'Pendientes', 'Hechas'].map((f) => (
          <button key={f} className="rounded-full bg-slate-100 px-3 py-1">
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {iniciales.map((t) => (
          <li key={t.id} className="flex items-center gap-2 rounded-lg border px-3 py-2">
            <span className="flex-1">{t.texto}</span>
            <button>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio3
